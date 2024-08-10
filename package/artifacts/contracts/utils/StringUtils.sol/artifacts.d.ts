// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { StringUtils$Type } from "./StringUtils";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["StringUtils"]: StringUtils$Type;
    ["contracts/utils/StringUtils.sol:StringUtils"]: StringUtils$Type;
  }

  interface ContractTypesMap {
    ["StringUtils"]: GetContractReturnType<StringUtils$Type["abi"]>;
    ["contracts/utils/StringUtils.sol:StringUtils"]: GetContractReturnType<StringUtils$Type["abi"]>;
  }
}