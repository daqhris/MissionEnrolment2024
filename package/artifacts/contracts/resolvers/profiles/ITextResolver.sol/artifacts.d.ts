// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { ITextResolver$Type } from "./ITextResolver";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["ITextResolver"]: ITextResolver$Type;
    ["contracts/resolvers/profiles/ITextResolver.sol:ITextResolver"]: ITextResolver$Type;
  }

  interface ContractTypesMap {
    ["ITextResolver"]: GetContractReturnType<ITextResolver$Type["abi"]>;
    ["contracts/resolvers/profiles/ITextResolver.sol:ITextResolver"]: GetContractReturnType<ITextResolver$Type["abi"]>;
  }
}