<script>
  import Modal from "./base/Modal.svelte";
  import LabelInput from "../inputs/LabelInput.svelte";

  import { createEventDispatcher } from 'svelte';

  // Modal properties
  export let isOpen = false;
  
  // Modal form data
  let recipientAddress = undefined;
  let amount = undefined;
  let secretQuestion = undefined;
  let secretAnswer = undefined;


  // Event
  const dispatch = createEventDispatcher();

  function dispatchClosed(event) {
    dispatch('modalTransferClosed', event.detail);
  }

  function sendTransfer(event) {
   //TODO: SEND TRANSFER (originate new contract or use the current one ?)

   dispatchClosed(event)
  }


</script>

<style lang="scss">
</style>


<Modal title="Transfer" isOpen={isOpen} validateButtonLabel="Send new transfer" on:modalClosed={dispatchClosed} on:modalValidated={sendTransfer}>

  <LabelInput label="Recipient address" placeholder="tzxxxx" bind:inputId={recipientAddress} />
  <LabelInput label="Amount" placeholder="xtz" bind:inputId={amount} />
  <LabelInput label="Question" placeholder="..." bind:inputId={secretQuestion} />
  <LabelInput label="Answer" placeholder="..." bind:inputId={secretAnswer} />

</Modal>
