import json, os
from dotenv import load_dotenv
from fetch.get_bookmarks import get_bookmarks
from classes.bookmark import Bookmark
from classes.folder import Folder

# append folder to array
def append_folder(arr, title, bookmarks_arr):
  fd = Folder(title, bookmarks_arr)
  arr.append(fd.to_dictionary())

# append bookmark to array
def append_bookmark(arr, title, description, url):
  bk = Bookmark(title, description, url)
  arr.append(bk.to_dictionary())

# categorize folder or bookmark
def categorize(arr, fold_title, title, description, url, tags):
  found = False

  for a in arr:
    if a['type'] == 'folder' and a['title'] == fold_title:
      found = True
      if len(tags) == 0:
        append_bookmark(a['items'], title, description, url)
      else:
        category = tags[0]
        tags.remove(category)
        categorize(a['items'], category, title, description, url, tags)
  
  if found == False:
    bk = Bookmark(title, description, url)
    if len(tags) == 0:
      append_folder(arr, fold_title, [bk.to_dictionary()])
    else:
      append_folder(arr, fold_title, [])
      category = tags[0]
      tags.remove(category)
      categorize(arr[-1]['items'], category, title, description, url, tags)

# reorder list after filling it
def reorder_list(arr):
  folders = []
  bookmarks = []
  for f_bookmark in arr:
    if f_bookmark['type'] == 'folder':
      folders.append(f_bookmark)
    else:
      bookmarks.append(f_bookmark)
  return bookmarks + folders

# concatenate bookmark to the html string
def concat_bookmark(string, bookmark):
  url = f'"{bookmark['url']}"'
  title = bookmark['title']
  return (
    f"{string}"
    f"<DT><A HREF={url}>{title}</A></DT>\n"
  )

# concat folder to the html string
def concat_folder(string, folder):
  title = folder['title']
  items = reorder_list(folder['items'])
  return (
    f"{string}"
    f"<DT><H3>{title}</H3></DT>\n"
    f"<DL>\n"
    f"{generate_html(items)}"
    f"</DL>\n"
  )

# run string contacatenation
def generate_html(bookmarks):
  formatted_string = ''
  for f_bookmark in bookmarks:
    if f_bookmark['type'] == 'bookmark':
      formatted_string = concat_bookmark(formatted_string, f_bookmark)
    else:
      formatted_string = concat_folder(formatted_string, f_bookmark)
  return formatted_string

# main function
def export_to_folders():

  # env
  load_dotenv()
  export_prefix = os.getenv('GENERATION_PATH')

  # get bookmarks from api
  bookmarks = get_bookmarks()

  # format each bookmark into folders
  formatted_bookmarks = []
  for bookmark in bookmarks['results']:
    if (len(bookmark['tag_names']) > 0):
      category = bookmark['tag_names'][0]
      bookmark['tag_names'].remove(category)
      categorize(
        formatted_bookmarks,
        category,
        bookmark['title'],
        bookmark['description'],
        bookmark['url'],
        bookmark['tag_names'],
      )
    else:
      append_bookmark(formatted_bookmarks, bookmark['title'], bookmark['description'], bookmark['url'])

  # after collecting the data, reorder the list
  formatted_bookmarks = reorder_list(formatted_bookmarks)

  # generate necessary files and directories
  debug_json = 'debug/breadcrums.json'
  bookmarks_file = export_prefix + 'bookmarks.html'
  os.makedirs(os.path.dirname(debug_json), exist_ok=True)
  os.makedirs(os.path.dirname(bookmarks_file), exist_ok=True)
  
  # generate the html
  formatted_string = generate_html(formatted_bookmarks)

  # write to files
  with open(debug_json, 'w') as file:
    file.write(json.dumps(formatted_bookmarks, indent=2))
  with open(bookmarks_file, 'w') as file:
    file.write(f"<DL>\n{formatted_string}</DL>")

  # log sucessful result
  print('generated bookmarks in ' + bookmarks_file)