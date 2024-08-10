// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface LegacyResolver$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "LegacyResolver",
  "sourceName": "contracts/test/mocks/LegacyResolver.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "addr",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060b48061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80633b3b57de14602d575b600080fd5b603d60383660046066565b503090565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b600060208284031215607757600080fd5b503591905056fea2646970667358221220d5df32cd7c93fab9950fd403333bc86e12df6fac7fc92f29d7d3d002c4e381bb64736f6c63430008110033",
  "deployedBytecode": "0x6080604052348015600f57600080fd5b506004361060285760003560e01c80633b3b57de14602d575b600080fd5b603d60383660046066565b503090565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b600060208284031215607757600080fd5b503591905056fea2646970667358221220d5df32cd7c93fab9950fd403333bc86e12df6fac7fc92f29d7d3d002c4e381bb64736f6c63430008110033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "LegacyResolver",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<LegacyResolver$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/test/mocks/LegacyResolver.sol:LegacyResolver",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<LegacyResolver$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "LegacyResolver",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<LegacyResolver$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/test/mocks/LegacyResolver.sol:LegacyResolver",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<LegacyResolver$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "LegacyResolver",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<LegacyResolver$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/test/mocks/LegacyResolver.sol:LegacyResolver",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<LegacyResolver$Type["abi"]>>;
}
