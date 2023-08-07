import BigNumber from "bignumber.js";
import type { TezosToolkit } from "@taquito/taquito";
import type { token } from "./types";
import type { TezosAccountAddress } from "./store";

export const displayTokenAmount = (
  amount_: BigNumber | number,
  token: token
): string => {
  let amount = BigNumber.isBigNumber(amount_) ? amount_.toNumber() : amount_;
  switch (token) {
    case "XTZ":
      return (+(amount / 10 ** 6).toFixed(6)).toLocaleString("en-US");
  }
};

export const shortenHash = (hash: string): string =>
  hash ? hash.slice(0, 5) + "..." + hash.slice(-5) : "";

export const fetchBalances = async (
  Tezos: TezosToolkit,
  userAddress: TezosAccountAddress
): Promise<{
  xtzBalance: number;
} | null> => {
  try {
    const xtzBalance = await Tezos.tz.getBalance(userAddress);
    if (!xtzBalance) throw "Unable to fetch XTZ balance";
      return {
        xtzBalance: xtzBalance.toNumber(),
      };
  } catch (error) {
    console.error(error);
    return null;
  }
};

