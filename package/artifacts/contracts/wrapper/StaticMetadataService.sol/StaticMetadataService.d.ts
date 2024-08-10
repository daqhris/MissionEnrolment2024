// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { AbiParameterToPrimitiveType, GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface StaticMetadataService$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "StaticMetadataService",
  "sourceName": "contracts/wrapper/StaticMetadataService.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_metaDataUri",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "uri",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060405161045538038061045583398101604081905261002f91610058565b600061003b82826101aa565b5050610269565b634e487b7160e01b600052604160045260246000fd5b6000602080838503121561006b57600080fd5b82516001600160401b038082111561008257600080fd5b818501915085601f83011261009657600080fd5b8151818111156100a8576100a8610042565b604051601f8201601f19908116603f011681019083821181831017156100d0576100d0610042565b8160405282815288868487010111156100e857600080fd5b600093505b8284101561010a57848401860151818501870152928501926100ed565b600086848301015280965050505050505092915050565b600181811c9082168061013557607f821691505b60208210810361015557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156101a557600081815260208120601f850160051c810160208610156101825750805b601f850160051c820191505b818110156101a15782815560010161018e565b5050505b505050565b81516001600160401b038111156101c3576101c3610042565b6101d7816101d18454610121565b8461015b565b602080601f83116001811461020c57600084156101f45750858301515b600019600386901b1c1916600185901b1785556101a1565b600085815260208120601f198616915b8281101561023b5788860151825594840194600190910190840161021c565b50858210156102595787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6101dd806102786000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80630e89341c14610030575b600080fd5b61004361003e3660046100ed565b610059565b6040516100509190610106565b60405180910390f35b60606000805461006890610154565b80601f016020809104026020016040519081016040528092919081815260200182805461009490610154565b80156100e15780601f106100b6576101008083540402835291602001916100e1565b820191906000526020600020905b8154815290600101906020018083116100c457829003601f168201915b50505050509050919050565b6000602082840312156100ff57600080fd5b5035919050565b600060208083528351808285015260005b8181101561013357858101830151858201604001528201610117565b506000604082860101526040601f19601f8301168501019250505092915050565b600181811c9082168061016857607f821691505b6020821081036101a1577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea2646970667358221220dee5977a2693f04a6202db215bcb6c19eee7b94993ae966733d3658597220ef964736f6c63430008110033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061002b5760003560e01c80630e89341c14610030575b600080fd5b61004361003e3660046100ed565b610059565b6040516100509190610106565b60405180910390f35b60606000805461006890610154565b80601f016020809104026020016040519081016040528092919081815260200182805461009490610154565b80156100e15780601f106100b6576101008083540402835291602001916100e1565b820191906000526020600020905b8154815290600101906020018083116100c457829003601f168201915b50505050509050919050565b6000602082840312156100ff57600080fd5b5035919050565b600060208083528351808285015260005b8181101561013357858101830151858201604001528201610117565b506000604082860101526040601f19601f8301168501019250505092915050565b600181811c9082168061016857607f821691505b6020821081036101a1577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea2646970667358221220dee5977a2693f04a6202db215bcb6c19eee7b94993ae966733d3658597220ef964736f6c63430008110033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "StaticMetadataService",
    constructorArgs: [_metaDataUri: AbiParameterToPrimitiveType<{"name":"_metaDataUri","type":"string"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<StaticMetadataService$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/wrapper/StaticMetadataService.sol:StaticMetadataService",
    constructorArgs: [_metaDataUri: AbiParameterToPrimitiveType<{"name":"_metaDataUri","type":"string"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<StaticMetadataService$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "StaticMetadataService",
    constructorArgs: [_metaDataUri: AbiParameterToPrimitiveType<{"name":"_metaDataUri","type":"string"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<StaticMetadataService$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/wrapper/StaticMetadataService.sol:StaticMetadataService",
    constructorArgs: [_metaDataUri: AbiParameterToPrimitiveType<{"name":"_metaDataUri","type":"string"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<StaticMetadataService$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "StaticMetadataService",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<StaticMetadataService$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/wrapper/StaticMetadataService.sol:StaticMetadataService",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<StaticMetadataService$Type["abi"]>>;
}