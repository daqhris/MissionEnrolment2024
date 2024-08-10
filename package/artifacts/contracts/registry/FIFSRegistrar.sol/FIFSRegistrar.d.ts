// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { AbiParameterToPrimitiveType, GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface FIFSRegistrar$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "FIFSRegistrar",
  "sourceName": "contracts/registry/FIFSRegistrar.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract ENS",
          "name": "ensAddr",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "node",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "label",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "register",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060405161036038038061036083398101604081905261002f91610058565b600080546001600160a01b0319166001600160a01b039390931692909217909155600155610092565b6000806040838503121561006b57600080fd5b82516001600160a01b038116811461008257600080fd5b6020939093015192949293505050565b6102bf806100a16000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063d22057a914610030575b600080fd5b61004361003e36600461021c565b610045565b005b6000805460015460408051602080820193909352808201879052815180820383018152606082019283905280519301929092207f02571be300000000000000000000000000000000000000000000000000000000909152606482015284929173ffffffffffffffffffffffffffffffffffffffff16906302571be390608401602060405180830381865afa1580156100e1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610105919061024c565b905073ffffffffffffffffffffffffffffffffffffffff8116158061013f575073ffffffffffffffffffffffffffffffffffffffff811633145b61014857600080fd5b6000546001546040517f06ab592300000000000000000000000000000000000000000000000000000000815260048101919091526024810186905273ffffffffffffffffffffffffffffffffffffffff8581166044830152909116906306ab5923906064016020604051808303816000875af11580156101cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f09190610270565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461021957600080fd5b50565b6000806040838503121561022f57600080fd5b823591506020830135610241816101f7565b809150509250929050565b60006020828403121561025e57600080fd5b8151610269816101f7565b9392505050565b60006020828403121561028257600080fd5b505191905056fea2646970667358221220b84e1bbde93151fbbdb054f2e85eb68e65051bf2bdceb2275e247c8591fa5a7764736f6c63430008110033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061002b5760003560e01c8063d22057a914610030575b600080fd5b61004361003e36600461021c565b610045565b005b6000805460015460408051602080820193909352808201879052815180820383018152606082019283905280519301929092207f02571be300000000000000000000000000000000000000000000000000000000909152606482015284929173ffffffffffffffffffffffffffffffffffffffff16906302571be390608401602060405180830381865afa1580156100e1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610105919061024c565b905073ffffffffffffffffffffffffffffffffffffffff8116158061013f575073ffffffffffffffffffffffffffffffffffffffff811633145b61014857600080fd5b6000546001546040517f06ab592300000000000000000000000000000000000000000000000000000000815260048101919091526024810186905273ffffffffffffffffffffffffffffffffffffffff8581166044830152909116906306ab5923906064016020604051808303816000875af11580156101cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f09190610270565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461021957600080fd5b50565b6000806040838503121561022f57600080fd5b823591506020830135610241816101f7565b809150509250929050565b60006020828403121561025e57600080fd5b8151610269816101f7565b9392505050565b60006020828403121561028257600080fd5b505191905056fea2646970667358221220b84e1bbde93151fbbdb054f2e85eb68e65051bf2bdceb2275e247c8591fa5a7764736f6c63430008110033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "FIFSRegistrar",
    constructorArgs: [ensAddr: AbiParameterToPrimitiveType<{"name":"ensAddr","type":"address"}>, node: AbiParameterToPrimitiveType<{"name":"node","type":"bytes32"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<FIFSRegistrar$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/registry/FIFSRegistrar.sol:FIFSRegistrar",
    constructorArgs: [ensAddr: AbiParameterToPrimitiveType<{"name":"ensAddr","type":"address"}>, node: AbiParameterToPrimitiveType<{"name":"node","type":"bytes32"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<FIFSRegistrar$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "FIFSRegistrar",
    constructorArgs: [ensAddr: AbiParameterToPrimitiveType<{"name":"ensAddr","type":"address"}>, node: AbiParameterToPrimitiveType<{"name":"node","type":"bytes32"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<FIFSRegistrar$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/registry/FIFSRegistrar.sol:FIFSRegistrar",
    constructorArgs: [ensAddr: AbiParameterToPrimitiveType<{"name":"ensAddr","type":"address"}>, node: AbiParameterToPrimitiveType<{"name":"node","type":"bytes32"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<FIFSRegistrar$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "FIFSRegistrar",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<FIFSRegistrar$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/registry/FIFSRegistrar.sol:FIFSRegistrar",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<FIFSRegistrar$Type["abi"]>>;
}
