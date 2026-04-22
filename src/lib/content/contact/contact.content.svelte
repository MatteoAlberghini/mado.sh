<!-- script -->
<script lang="ts">
	/* imports */
  import { request, URLs } from '$lib/managers/request.manager'
	import Button from '$lib/ui/components/buttons/button.svelte'
	import DummyInput from '$lib/ui/components/input/dummy.input.svelte'
  import Input from '$lib/ui/components/input/input.svelte'
	import TextArea from '$lib/ui/components/text-area/text.area.svelte'
	import Container from '$lib/ui/macro/wrappers/container/container.wrapper.svelte'
	import { scale } from 'svelte/transition';

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
    if (!data.has('message') || data.get('message') === '') {
      loading = false
      message = { error: true, text: '[ message is required ]' }
      return
    }
    const res = await request<{ success: boolean, message: string }>(URLs.form, 'POST', data)
    if (res.success === false) {
      loading = false
      message = { error: true, text: res.message }
      return
    }
    loading = false
    message = { error: false, text: '[ success ]' }
  }
</script>

<!-- template -->
<Container>
  <form onsubmit={onSubmit}>
    <div class="button">
      <Button
        type="submit"
        loading={loading}
        width={120}
        height={39}
      >
        <span>submit</span>
      </Button>
    </div>
    <div class="inputs">
      <p class="title">
        CONTACT ME
        {#if message.text !== ''}
          <span
            class="message"
            data-error={message.error}
          >
            {message.text}
          </span>
        {/if}
      </p>
      <DummyInput
        label="to"
        value="me@matteoalberghini.com"
      />
      <Input
        id="username"
        label="nick/alias/email"
        type="username"
        side="[ required ]"
        max={50}
      />
      <TextArea
        id="message"
        label="your message"
        side="[ required ]"
        max={600}
      />
    </div>
  </form>
</Container>

<!-- styles -->
<style>
  /* containers */
  .inputs {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-self: flex-start;
    flex-direction: column;
    width: 100%;
    padding-left: 17px;
    padding-right: 17px;
    margin-top: 26px;
    padding-bottom: 12px;
    padding-top: 14px;
    border: 1px solid var(--background-color);
    border-bottom-width: 3px;
  }
  .button {
    padding-right: 17px;
    display: flex;
    width: 100%;
    justify-items: center;
    align-items: center;
  }
  .mt {
    margin-top: -4px;
  }

  /* text */
  span {
    font-size: 17px;
    font-weight: 400;
  }
  .title {
    font-size: 18px;
    font-weight: 400;
    position: absolute;
    top: -14px;
    color: var(--primary-color);
    background-color: var(--modal-background-color);
    background-image: url(/images/general/bg-texture.png);
    padding-left: 8px;
    padding-right: 8px;
    margin-left: -8px;
  }
  .message {
    font-size: 16px;
    font-weight: 400;
    color: var(--primary-color);
    margin-left: 2px;
  }
  .message[data-error=true] {
    --shadow-primary-color: var(--selection-background-color);
    --shadow-secondary-color: var(--text-color);
    color: var(--red-color);
  }
</style>