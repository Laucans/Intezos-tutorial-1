<script lang="ts">
  import { onMount } from "svelte";
  import { TezosToolkit } from "@taquito/taquito";
  import store from "./store";
  import { rpcUrl, intezosAddress } from "./config";
  import Sidebar from "./lib/sidebar/Sidebar.svelte";
  import Interface from "./lib/interface/Interface.svelte";
  import Toast from "./lib/interface/Toast.svelte";
  import type { Storage } from "./types";

  onMount(async () => {
    const Tezos = new TezosToolkit(rpcUrl);
    store.updateTezos(Tezos);
    const contract = await Tezos.wallet.at(intezosAddress);
    const storage: Storage | undefined = await contract.storage();
    }
  );
</script>

<style lang="scss">
@import "./styles/settings.scss";

main {
 display: grid;
 grid-template-columns: 250px 1fr;
 gap: $padding;
 padding: $padding;
 height: calc(100% - (#{$padding} * 2));
}
@media screen and (max-height: 700px) {
 main {
   padding: 0px;
   height: 100%;
 }
}
</style>

<main>
  <Toast />
  {#if $store.Tezos }
    <Sidebar />
    <Interface />
  {:else}
    <div>Loading</div>
  {/if}
</main>
