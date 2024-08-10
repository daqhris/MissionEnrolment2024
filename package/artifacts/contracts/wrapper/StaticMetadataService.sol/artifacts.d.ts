// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { StaticMetadataService$Type } from "./StaticMetadataService";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["StaticMetadataService"]: StaticMetadataService$Type;
    ["contracts/wrapper/StaticMetadataService.sol:StaticMetadataService"]: StaticMetadataService$Type;
  }

  interface ContractTypesMap {
    ["StaticMetadataService"]: GetContractReturnType<StaticMetadataService$Type["abi"]>;
    ["contracts/wrapper/StaticMetadataService.sol:StaticMetadataService"]: GetContractReturnType<StaticMetadataService$Type["abi"]>;
  }
}
