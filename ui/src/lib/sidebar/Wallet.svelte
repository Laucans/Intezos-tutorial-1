<script lang="ts">
  import { onMount } from "svelte";
  import { BeaconWallet } from "@taquito/beacon-wallet";
  import store from "../../store";
  import { shortenHash, fetchBalances } from "../../utils";

  let connectedNetwork = "";
  let walletIcon = "";
  let walletName = "";

  const getWalletInfo = async (wallet: BeaconWallet) => {

  };

  const disconnectWallet = async () => {


  };

  const connectWallet = async () => {


  };

  onMount(async () => {

  });
</script>

<style lang="scss">
  @import "../../styles/settings.scss";

  .wallet {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 10%;

    .wallet-button {
      background-color: $tezos-blue;
      color: $white;
      min-height: 25px;
    }
    .wallet__info {
      padding-bottom: 20px;
      text-align: center;

      p {
        margin: 0px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

        img.wallet-icon {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
</style>

<div class="wallet">
  {#if $store.wallet && $store.userAddress}
    <div class="wallet__info">
      <p>
        {#if walletIcon}
          <img src={walletIcon} alt="wallet-icon" class="wallet-icon" />
        {/if}
        <span>{shortenHash($store.userAddress)}</span>
      </p>
      {#if !walletIcon && walletName}
        <p style="font-size:0.7rem">({walletName})</p>
      {/if}
      <p>
        {#if connectedNetwork}
          On {connectedNetwork}
        {:else}
          No network data
        {/if}
      </p>
    </div>
    <button class="wallet-button" on:click={disconnectWallet}>
      Disconnect
    </button>
  {:else}
    <button class="wallet-button" on:click={connectWallet}>
      Connect wallet
    </button>
  {/if}
</div>
