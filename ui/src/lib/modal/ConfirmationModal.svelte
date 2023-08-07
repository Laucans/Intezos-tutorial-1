<script>
  import Modal from "./base/Modal.svelte";

  import { createEventDispatcher } from 'svelte';

  // Modal properties
  export let isOpen = false;
  export let modalTitle = "default title";
  export let modalText = "default text";

  // Modal form data
  let answer = undefined;


  // Event
  const dispatch = createEventDispatcher();

  function dispatchClosed(event) {
    dispatch('modalClosed', event.detail);
  }

  function dispatchConfirm(event) {
   dispatch('modalConfirmed', event.detail);
   dispatchClosed(event)
  }


</script>

<style lang="scss">
</style>


<Modal title="{modalTitle}" isOpen={isOpen} validateButtonLabel="Confirm" on:modalClosed={dispatchClosed} on:modalValidated={dispatchConfirm}>
  <p>{modalText}</p>
</Modal>
