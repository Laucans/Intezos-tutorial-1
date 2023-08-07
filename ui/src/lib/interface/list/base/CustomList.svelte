<script>

  import { createEventDispatcher } from 'svelte';

  export let data = []
  export let buttonLabel = ""

  const dispatch = createEventDispatcher();

  function emitButtonClicked(item) {
    dispatch('listButtonCliked', item);
  }


</script>

<style lang="scss">
  @import "../../../../styles/settings.scss";

  .transfert-list {
    height: 30vh;
    border: 4px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    overflow-y: auto;
  }

  .header {
    font-weight: bold;
  }

  .column {
    flex: 1;
    flex-direction: column;
    align-items: left;
    overflow-x: auto;
    white-space: nowrap;
    position: relative;
    margin-right: 30px;
  }

  .button {
    cursor: pointer;
    background-color: $tezos-blue;
    color: $white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
  }

</style>

<div>
<div class="transfert-list">
  <div class="header column">Address</div>
  <div class="header column">Amount</div>
  <div class="header column">Date</div>
  <div class="header column">Reason</div>
  <div class="column"></div>

  {#each data as item}
    <div class="column">{item.address}</div>
    <div class="column">{item.amount}</div>
    <div class="column">{item.date}</div>
    <div class="column">{item.reason}</div>
    <div class="column"> <button class="button" on:click={() => emitButtonClicked(item)}>{buttonLabel}</button>
</div>
  {/each}
</div>
</div>
