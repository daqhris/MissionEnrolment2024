// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface LowLevelCallUtils$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "LowLevelCallUtils",
  "sourceName": "contracts/utils/LowLevelCallUtils.sol",
  "abi": [],
  "bytecode": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220f482a2a3c9de819ae4ca2d7f1ff95429db36547b93befa94dc495822d6b1899d64736f6c63430008110033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220f482a2a3c9de819ae4ca2d7f1ff95429db36547b93befa94dc495822d6b1899d64736f6c63430008110033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "LowLevelCallUtils",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<LowLevelCallUtils$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/utils/LowLevelCallUtils.sol:LowLevelCallUtils",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<LowLevelCallUtils$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "LowLevelCallUtils",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<LowLevelCallUtils$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/utils/LowLevelCallUtils.sol:LowLevelCallUtils",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<LowLevelCallUtils$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "LowLevelCallUtils",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<LowLevelCallUtils$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/utils/LowLevelCallUtils.sol:LowLevelCallUtils",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<LowLevelCallUtils$Type["abi"]>>;
}
