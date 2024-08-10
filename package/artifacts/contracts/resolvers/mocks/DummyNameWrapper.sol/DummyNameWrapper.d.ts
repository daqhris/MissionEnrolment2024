// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface DummyNameWrapper$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "DummyNameWrapper",
  "sourceName": "contracts/resolvers/mocks/DummyNameWrapper.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
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
  "bytecode": "0x608060405234801561001057600080fd5b5060b48061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80636352211e14602d575b600080fd5b603d60383660046066565b503290565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b600060208284031215607757600080fd5b503591905056fea26469706673582212209250b52d8e259a0c62856c46c378e59c90535fa81df1452947065305c9f520e164736f6c63430008110033",
  "deployedBytecode": "0x6080604052348015600f57600080fd5b506004361060285760003560e01c80636352211e14602d575b600080fd5b603d60383660046066565b503290565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b600060208284031215607757600080fd5b503591905056fea26469706673582212209250b52d8e259a0c62856c46c378e59c90535fa81df1452947065305c9f520e164736f6c63430008110033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "DummyNameWrapper",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<DummyNameWrapper$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/resolvers/mocks/DummyNameWrapper.sol:DummyNameWrapper",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<DummyNameWrapper$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "DummyNameWrapper",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<DummyNameWrapper$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/resolvers/mocks/DummyNameWrapper.sol:DummyNameWrapper",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<DummyNameWrapper$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "DummyNameWrapper",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<DummyNameWrapper$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/resolvers/mocks/DummyNameWrapper.sol:DummyNameWrapper",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<DummyNameWrapper$Type["abi"]>>;
}