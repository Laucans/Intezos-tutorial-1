<script>
  import Modal from "./base/Modal.svelte";
  import LabelInput from "../inputs/LabelInput.svelte";

  import { createEventDispatcher } from 'svelte';

  // Modal properties
  export let isOpen = false;
  export let question = "default question";
  export let amount = -1;
  export let senderAddress = "undefined";

  // Modal form data
  let answer = undefined;


  // Event
  const dispatch = createEventDispatcher();

  function dispatchClosed(event) {
    dispatch('modalClaimClosed', event.detail);
  }

  function claim(event) {
   //TODO: claim

   dispatchClosed(event)
  }


</script>

<style lang="scss">
</style>


<Modal title="Claim" isOpen={isOpen} validateButtonLabel="Claim" on:modalClosed={dispatchClosed} on:modalValidated={claim}>
  <p>You received a transfer of {amount} from {senderAddress}</p>
  <LabelInput label={question} placeholder="Your answer here..." bind:inputId={answer} />
</Modal>
