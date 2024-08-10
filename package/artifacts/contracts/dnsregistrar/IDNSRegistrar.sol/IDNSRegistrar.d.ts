// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface IDNSRegistrar$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "IDNSRegistrar",
  "sourceName": "contracts/dnsregistrar/IDNSRegistrar.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "name",
          "type": "bytes"
        },
        {
          "components": [
            {
              "internalType": "bytes",
              "name": "rrset",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "sig",
              "type": "bytes"
            }
          ],
          "internalType": "struct DNSSEC.RRSetWithSignature[]",
          "name": "input",
          "type": "tuple[]"
        }
      ],
      "name": "proveAndClaim",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "name",
          "type": "bytes"
        },
        {
          "components": [
            {
              "internalType": "bytes",
              "name": "rrset",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "sig",
              "type": "bytes"
            }
          ],
          "internalType": "struct DNSSEC.RRSetWithSignature[]",
          "name": "input",
          "type": "tuple[]"
        },
        {
          "internalType": "address",
          "name": "resolver",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "proveAndClaimWithResolver",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "IDNSRegistrar",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IDNSRegistrar$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/dnsregistrar/IDNSRegistrar.sol:IDNSRegistrar",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IDNSRegistrar$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "IDNSRegistrar",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IDNSRegistrar$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/dnsregistrar/IDNSRegistrar.sol:IDNSRegistrar",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IDNSRegistrar$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "IDNSRegistrar",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IDNSRegistrar$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/dnsregistrar/IDNSRegistrar.sol:IDNSRegistrar",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IDNSRegistrar$Type["abi"]>>;
}
