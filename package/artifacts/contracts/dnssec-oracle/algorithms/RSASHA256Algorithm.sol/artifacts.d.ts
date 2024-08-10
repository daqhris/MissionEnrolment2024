// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { RSASHA256Algorithm$Type } from "./RSASHA256Algorithm";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["RSASHA256Algorithm"]: RSASHA256Algorithm$Type;
    ["contracts/dnssec-oracle/algorithms/RSASHA256Algorithm.sol:RSASHA256Algorithm"]: RSASHA256Algorithm$Type;
  }

  interface ContractTypesMap {
    ["RSASHA256Algorithm"]: GetContractReturnType<RSASHA256Algorithm$Type["abi"]>;
    ["contracts/dnssec-oracle/algorithms/RSASHA256Algorithm.sol:RSASHA256Algorithm"]: GetContractReturnType<RSASHA256Algorithm$Type["abi"]>;
  }
}
