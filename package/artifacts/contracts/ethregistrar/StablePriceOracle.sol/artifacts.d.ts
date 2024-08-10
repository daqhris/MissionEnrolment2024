// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { AggregatorInterface$Type } from "./AggregatorInterface";
import { StablePriceOracle$Type } from "./StablePriceOracle";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["AggregatorInterface"]: AggregatorInterface$Type;
    ["StablePriceOracle"]: StablePriceOracle$Type;
    ["contracts/ethregistrar/StablePriceOracle.sol:AggregatorInterface"]: AggregatorInterface$Type;
    ["contracts/ethregistrar/StablePriceOracle.sol:StablePriceOracle"]: StablePriceOracle$Type;
  }

  interface ContractTypesMap {
    ["AggregatorInterface"]: GetContractReturnType<AggregatorInterface$Type["abi"]>;
    ["StablePriceOracle"]: GetContractReturnType<StablePriceOracle$Type["abi"]>;
    ["contracts/ethregistrar/StablePriceOracle.sol:AggregatorInterface"]: GetContractReturnType<AggregatorInterface$Type["abi"]>;
    ["contracts/ethregistrar/StablePriceOracle.sol:StablePriceOracle"]: GetContractReturnType<StablePriceOracle$Type["abi"]>;
  }
}
