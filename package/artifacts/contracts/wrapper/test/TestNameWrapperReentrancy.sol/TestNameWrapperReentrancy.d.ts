// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { AbiParameterToPrimitiveType, GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface TestNameWrapperReentrancy$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "TestNameWrapperReentrancy",
  "sourceName": "contracts/wrapper/test/TestNameWrapperReentrancy.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "contract INameWrapper",
          "name": "_nameWrapper",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_parentNode",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_labelHash",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "claimToOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC1155BatchReceived",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC1155Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506040516106c23803806106c283398101604081905261002f91610085565b600180546001600160a01b039586166001600160a01b03199182161790915560008054949095169316929092179092556002919091556003556100cd565b6001600160a01b038116811461008257600080fd5b50565b6000806000806080858703121561009b57600080fd5b84516100a68161006d565b60208601519094506100b78161006d565b6040860151606090960151949790965092505050565b6105e6806100dc6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806301ffc9a714610051578063905783c614610079578063bc197c8114610083578063f23a6e61146100d4575b600080fd5b61006461005f3660046102d0565b6100e7565b60405190151581526020015b60405180910390f35b610081610150565b005b6100bb61009136600461040a565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b6040516001600160e01b03199091168152602001610070565b6100bb6100e236600461050a565b610203565b60006001600160e01b031982167f4e2312e000000000000000000000000000000000000000000000000000000000148061014a57507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b92915050565b6000805460018054600480546040517ff242432a000000000000000000000000000000000000000000000000000000008152309281019290925273ffffffffffffffffffffffffffffffffffffffff92831660248301526044820152606481019290925260a0608483015260a482019390935291169063f242432a9060c401600060405180830381600087803b1580156101e957600080fd5b505af11580156101fd573d6000803e3d6000fd5b50505050565b6004848155600080546002546003546001546040517fd8c9921a00000000000000000000000000000000000000000000000000000000815295860192909252602485015273ffffffffffffffffffffffffffffffffffffffff9081166044850152919291169063d8c9921a90606401600060405180830381600087803b15801561028c57600080fd5b505af11580156102a0573d6000803e3d6000fd5b507ff23a6e61000000000000000000000000000000000000000000000000000000009a9950505050505050505050565b6000602082840312156102e257600080fd5b81356001600160e01b0319811681146102fa57600080fd5b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461032557600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156103825761038261032a565b604052919050565b600082601f83011261039b57600080fd5b8135602067ffffffffffffffff8211156103b7576103b761032a565b8160051b6103c6828201610359565b92835284810182019282810190878511156103e057600080fd5b83870192505b848310156103ff578235825291830191908301906103e6565b979650505050505050565b600080600080600060a0868803121561042257600080fd5b61042b86610301565b9450602061043a818801610301565b9450604087013567ffffffffffffffff8082111561045757600080fd5b6104638a838b0161038a565b9550606089013591508082111561047957600080fd5b6104858a838b0161038a565b9450608089013591508082111561049b57600080fd5b818901915089601f8301126104af57600080fd5b8135818111156104c1576104c161032a565b6104d3601f8201601f19168501610359565b91508082528a848285010111156104e957600080fd5b80848401858401376000848284010152508093505050509295509295909350565b60008060008060008060a0878903121561052357600080fd5b61052c87610301565b955061053a60208801610301565b94506040870135935060608701359250608087013567ffffffffffffffff8082111561056557600080fd5b818901915089601f83011261057957600080fd5b81358181111561058857600080fd5b8a602082850101111561059a57600080fd5b602083019450809350505050929550929550929556fea26469706673582212207077cff1db33c80bb5398a4c5a505f08b79741a5baebf44c0cdb27d54534754a64736f6c63430008110033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806301ffc9a714610051578063905783c614610079578063bc197c8114610083578063f23a6e61146100d4575b600080fd5b61006461005f3660046102d0565b6100e7565b60405190151581526020015b60405180910390f35b610081610150565b005b6100bb61009136600461040a565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b6040516001600160e01b03199091168152602001610070565b6100bb6100e236600461050a565b610203565b60006001600160e01b031982167f4e2312e000000000000000000000000000000000000000000000000000000000148061014a57507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b92915050565b6000805460018054600480546040517ff242432a000000000000000000000000000000000000000000000000000000008152309281019290925273ffffffffffffffffffffffffffffffffffffffff92831660248301526044820152606481019290925260a0608483015260a482019390935291169063f242432a9060c401600060405180830381600087803b1580156101e957600080fd5b505af11580156101fd573d6000803e3d6000fd5b50505050565b6004848155600080546002546003546001546040517fd8c9921a00000000000000000000000000000000000000000000000000000000815295860192909252602485015273ffffffffffffffffffffffffffffffffffffffff9081166044850152919291169063d8c9921a90606401600060405180830381600087803b15801561028c57600080fd5b505af11580156102a0573d6000803e3d6000fd5b507ff23a6e61000000000000000000000000000000000000000000000000000000009a9950505050505050505050565b6000602082840312156102e257600080fd5b81356001600160e01b0319811681146102fa57600080fd5b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461032557600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156103825761038261032a565b604052919050565b600082601f83011261039b57600080fd5b8135602067ffffffffffffffff8211156103b7576103b761032a565b8160051b6103c6828201610359565b92835284810182019282810190878511156103e057600080fd5b83870192505b848310156103ff578235825291830191908301906103e6565b979650505050505050565b600080600080600060a0868803121561042257600080fd5b61042b86610301565b9450602061043a818801610301565b9450604087013567ffffffffffffffff8082111561045757600080fd5b6104638a838b0161038a565b9550606089013591508082111561047957600080fd5b6104858a838b0161038a565b9450608089013591508082111561049b57600080fd5b818901915089601f8301126104af57600080fd5b8135818111156104c1576104c161032a565b6104d3601f8201601f19168501610359565b91508082528a848285010111156104e957600080fd5b80848401858401376000848284010152508093505050509295509295909350565b60008060008060008060a0878903121561052357600080fd5b61052c87610301565b955061053a60208801610301565b94506040870135935060608701359250608087013567ffffffffffffffff8082111561056557600080fd5b818901915089601f83011261057957600080fd5b81358181111561058857600080fd5b8a602082850101111561059a57600080fd5b602083019450809350505050929550929550929556fea26469706673582212207077cff1db33c80bb5398a4c5a505f08b79741a5baebf44c0cdb27d54534754a64736f6c63430008110033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "TestNameWrapperReentrancy",
    constructorArgs: [_owner: AbiParameterToPrimitiveType<{"name":"_owner","type":"address"}>, _nameWrapper: AbiParameterToPrimitiveType<{"name":"_nameWrapper","type":"address"}>, _parentNode: AbiParameterToPrimitiveType<{"name":"_parentNode","type":"bytes32"}>, _labelHash: AbiParameterToPrimitiveType<{"name":"_labelHash","type":"bytes32"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<TestNameWrapperReentrancy$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/wrapper/test/TestNameWrapperReentrancy.sol:TestNameWrapperReentrancy",
    constructorArgs: [_owner: AbiParameterToPrimitiveType<{"name":"_owner","type":"address"}>, _nameWrapper: AbiParameterToPrimitiveType<{"name":"_nameWrapper","type":"address"}>, _parentNode: AbiParameterToPrimitiveType<{"name":"_parentNode","type":"bytes32"}>, _labelHash: AbiParameterToPrimitiveType<{"name":"_labelHash","type":"bytes32"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<TestNameWrapperReentrancy$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "TestNameWrapperReentrancy",
    constructorArgs: [_owner: AbiParameterToPrimitiveType<{"name":"_owner","type":"address"}>, _nameWrapper: AbiParameterToPrimitiveType<{"name":"_nameWrapper","type":"address"}>, _parentNode: AbiParameterToPrimitiveType<{"name":"_parentNode","type":"bytes32"}>, _labelHash: AbiParameterToPrimitiveType<{"name":"_labelHash","type":"bytes32"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<TestNameWrapperReentrancy$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/wrapper/test/TestNameWrapperReentrancy.sol:TestNameWrapperReentrancy",
    constructorArgs: [_owner: AbiParameterToPrimitiveType<{"name":"_owner","type":"address"}>, _nameWrapper: AbiParameterToPrimitiveType<{"name":"_nameWrapper","type":"address"}>, _parentNode: AbiParameterToPrimitiveType<{"name":"_parentNode","type":"bytes32"}>, _labelHash: AbiParameterToPrimitiveType<{"name":"_labelHash","type":"bytes32"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<TestNameWrapperReentrancy$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "TestNameWrapperReentrancy",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<TestNameWrapperReentrancy$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/wrapper/test/TestNameWrapperReentrancy.sol:TestNameWrapperReentrancy",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<TestNameWrapperReentrancy$Type["abi"]>>;
}
