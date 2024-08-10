// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { ENS$Type } from "./ENS";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["ENS"]: ENS$Type;
    ["contracts/registry/ENS.sol:ENS"]: ENS$Type;
  }

  interface ContractTypesMap {
    ["ENS"]: GetContractReturnType<ENS$Type["abi"]>;
    ["contracts/registry/ENS.sol:ENS"]: GetContractReturnType<ENS$Type["abi"]>;
  }
}
