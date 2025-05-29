<!-- script -->
<script lang="ts">
	/* imports */
  import { request, URLs } from '$lib/managers/request.manager'
	import Button from '$lib/ui/components/buttons/button.svelte';
  import Input from '$lib/ui/components/interactive/input/input.svelte'
	import TextArea from '$lib/ui/components/interactive/text-area/text.area.svelte'

  /* state */
  let loading: boolean = $state(false)
  let message: { error: boolean, text: string } = $state({ error: false, text: '' })

  /* callbacks */
  /**
   * handle errors and submit to db
   * @param e submit event
   */
  async function onSubmit(e: SubmitEvent) {
    e.preventDefault()
    loading = true
    message  = { error: false, text: '' }
    let data = new FormData(e.target as HTMLFormElement)
    if (!data.has('username') || data.get('username') === '') {
      loading = false
      message = { error: true, text: '[ username is required ]' }
      return
    }
    if (!data.has('message') || data.get('username') === '') {
      loading = false
      message = { error: true, text: '[ message is required ]' }
      return
    }
    const res = await request<{ success: boolean }>(URLs.form, 'POST', data)
    if (res.success === false) {
      loading = false
      message = { error: true, text: '[ server error, try again later ]' }
      return
    }
    loading = false
    message = { error: false, text: '[ submission has been registered correctly ]' }
  }
</script>

<!-- template -->
<div class="content">
  <form onsubmit={onSubmit}>
    <div class="input-container">
      <Input
        id="username"
        label="nick/alias/mail"
        type="username"
        side="[ required ]"
        max={50}
      />
    </div>
    <div class="input-container">
      <TextArea
        id="message"
        label="your message"
        side="[ required ]"
        max={600}
      />
    </div>
    <div class="input-container button">
      <Button
        type="submit"
        loading={loading}
        width={300}
        height={40}
      >
        <span>submit</span>
      </Button>
    </div>
    <div class="input-container">
      {#if message.text !== ''}
        <p class="message" data-error={message.error}>{message.text}</p>
      {/if}
    </div>
  </form>
</div>

<!-- styles -->
<style>
  /* containers */
  .content {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-self: center;
    flex-direction: column;
    flex-wrap: wrap;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 24px;
  }
  .input-container {
    display: flex;
    align-self: flex-start;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
  }
  .button {
    margin-top: 32px;
  }

  /* text */
  span {
    font-size: 16px;
    font-weight: 400;
  }
  .message {
    margin-top: 4px;
    font-size: 16px;
    font-weight: 400;
    color: var(--primary-color);
  }
  .message[data-error=true] {
    color: var(--error-color);
  }
</style>