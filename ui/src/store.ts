import { writable } from "svelte/store";
import type { TezosToolkit } from "@taquito/taquito";
import type { BeaconWallet } from "@taquito/beacon-wallet";
import type { token } from "./types";

export type TezosContractAddress = `KT1${string}`;
export type TezosAccountAddress = `tz${"1" | "2" | "3"}${string}`;

interface State {
  Tezos: TezosToolkit;
  wallet: BeaconWallet;
  userAddress: TezosAccountAddress;
  userBalances: {
    XTZ: null | number;
  };
  toast: { show: boolean; text: string };
}

const initialState: State = {
  Tezos: undefined,
  wallet: undefined,
  userAddress: undefined,
  userBalances: undefined,
  toast: { show: false, text: "This is a test" }
};

const store = writable(initialState);

const state = {
  subscribe: store.subscribe,
  updateTezos: (tezos: TezosToolkit) =>
    store.update(store => ({ ...store, Tezos: tezos })),

  updateWallet: (wallet: BeaconWallet | undefined) =>
    store.update(store => ({ ...store, wallet })),

  updateUserAddress: (address: TezosAccountAddress | undefined) => {
    store.update(store => ({
      ...store,
      userAddress: address
    }));
  },

  updateToast: (state: boolean, text: string) =>
    store.update(store => ({
      ...store,
      toast: { show: state, text }
    })),

  showToast: (state: boolean) =>
    store.update(store => ({
      ...store,
      toast: { show: state, text: !state ? "" : store.toast.text }
    })),

  updateUserBalance: (token: token, balance: null | number) =>
    store.update(store => {
      if (balance >= 0) {
        return {
          ...store,
          userBalances: { ...store.userBalances, [token]: balance }
        };
      } else {
        return store;
      }
    })
};

export default state;
