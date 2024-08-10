// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { IAddrResolver$Type } from "./IAddrResolver";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["IAddrResolver"]: IAddrResolver$Type;
    ["contracts/resolvers/profiles/IAddrResolver.sol:IAddrResolver"]: IAddrResolver$Type;
  }

  interface ContractTypesMap {
    ["IAddrResolver"]: GetContractReturnType<IAddrResolver$Type["abi"]>;
    ["contracts/resolvers/profiles/IAddrResolver.sol:IAddrResolver"]: GetContractReturnType<IAddrResolver$Type["abi"]>;
  }
}
