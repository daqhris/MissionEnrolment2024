// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface RSAVerify$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "RSAVerify",
  "sourceName": "contracts/dnssec-oracle/algorithms/RSAVerify.sol",
  "abi": [],
  "bytecode": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212209277de49618785de8f6f2070ea5aa66df31713aa93e3cd6ec706099c01bde87064736f6c63430008110033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212209277de49618785de8f6f2070ea5aa66df31713aa93e3cd6ec706099c01bde87064736f6c63430008110033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "RSAVerify",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<RSAVerify$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/dnssec-oracle/algorithms/RSAVerify.sol:RSAVerify",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<RSAVerify$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "RSAVerify",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<RSAVerify$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/dnssec-oracle/algorithms/RSAVerify.sol:RSAVerify",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<RSAVerify$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "RSAVerify",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<RSAVerify$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/dnssec-oracle/algorithms/RSAVerify.sol:RSAVerify",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<RSAVerify$Type["abi"]>>;
}