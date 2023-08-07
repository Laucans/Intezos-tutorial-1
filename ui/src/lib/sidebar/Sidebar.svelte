<script lang="ts">
  import Wallet from "./Wallet.svelte";
  import TransferModal from '../modal/TransferModal.svelte';

    let showTransferModal = false;


  function handleModalTransferClosed() {
    showTransferModal = false;
  }
</script>

<style lang="scss">
  @import "../../styles/settings.scss";

  .sidebar {
    height: 100%;
    border-right: solid 3px $tezos-blue;
    display: grid;
    grid-template-rows: 20% 70% 10%;
    gap: 20px;

    .interface-container {
      display: grid;
      grid-template-rows: 20% 60% 20%;
      justify-items: center;
      align-items: center;
    }
    .sidebar__footer {
      button {
        margin-left:10px;
        align-items: bottom;
        width: 90%;
      }
      h1 {
        text-align: center;
        font-family: "Roboto";
        font-weight: 700;
        font-size:xx-large;
        align-items: bottom;
        margin-top: 5px;
      }
    }
  }
</style>

<aside class="sidebar">
  <Wallet />
  <div></div>
  <div class="sidebar__footer">
    <button class="button send-button" on:click={() => showTransferModal = true}>
      Send XTZ 
    </button>
    <h1>Intezos</h1>
  </div>

  <TransferModal isOpen={showTransferModal} on:modalTransferClosed={handleModalTransferClosed} />
</aside>
