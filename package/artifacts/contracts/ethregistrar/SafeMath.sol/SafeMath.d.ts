// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface SafeMath$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "SafeMath",
  "sourceName": "contracts/ethregistrar/SafeMath.sol",
  "abi": [],
  "bytecode": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207096346103f81cf21bbd7a8711c38ada736fa38948c2b53f7a522ec99720d58664736f6c63430008110033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207096346103f81cf21bbd7a8711c38ada736fa38948c2b53f7a522ec99720d58664736f6c63430008110033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "SafeMath",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<SafeMath$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/ethregistrar/SafeMath.sol:SafeMath",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<SafeMath$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "SafeMath",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<SafeMath$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/ethregistrar/SafeMath.sol:SafeMath",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<SafeMath$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "SafeMath",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<SafeMath$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/ethregistrar/SafeMath.sol:SafeMath",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<SafeMath$Type["abi"]>>;
}
