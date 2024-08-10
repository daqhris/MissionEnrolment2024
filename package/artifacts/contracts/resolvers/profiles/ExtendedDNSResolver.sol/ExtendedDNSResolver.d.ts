// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface ExtendedDNSResolver$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "ExtendedDNSResolver",
  "sourceName": "contracts/resolvers/profiles/ExtendedDNSResolver.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "addr",
          "type": "bytes"
        }
      ],
      "name": "InvalidAddressFormat",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotImplemented",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "context",
          "type": "bytes"
        }
      ],
      "name": "resolve",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "pure",
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
  "bytecode": "0x608060405234801561001057600080fd5b5061134e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b5780638ef98a7e1461008d575b600080fd5b610078610049366004610ec7565b6001600160e01b0319167f8ef98a7e000000000000000000000000000000000000000000000000000000001490565b60405190151581526020015b60405180910390f35b6100a061009b366004610f41565b6100ad565b6040516100849190610fff565b606060006100bb8587611032565b90507fc4c4a822000000000000000000000000000000000000000000000000000000006001600160e01b0319821601610100576100f884846101b6565b9150506101ac565b7f0e3481fa000000000000000000000000000000000000000000000000000000006001600160e01b031982160161013d576100f886868686610292565b7fa62e2bc4000000000000000000000000000000000000000000000000000000006001600160e01b031982160161017a576100f8868686866103ed565b6040517fd623472500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9695505050505050565b6060600061022e84848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505060408051808201909152600681527f615b36305d3d0000000000000000000000000000000000000000000000000000602082015291506104659050565b9050805160000361024057905061028c565b60008061025a6002845185610a7e9092919063ffffffff16565b91509150806102875782604051630f79e00960e21b815260040161027e9190610fff565b60405180910390fd5b509150505b92915050565b606060006102a38560048189611062565b8101906102b0919061108c565b9150506060816380000000166000146103375761033085858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061030c92505050637fffffff8516610c26565b60405160200161031c91906110ae565b604051602081830303815290604052610465565b905061038f565b61038c85858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061037c9250869150610c269050565b60405160200161031c91906110ff565b90505b80516000036103a15791506103e59050565b6000806103bb6002845185610a7e9092919063ffffffff16565b91509150806103df5782604051630f79e00960e21b815260040161027e9190610fff565b50925050505b949350505050565b606060006103fe8560048189611062565b81019061040b9190611166565b915050600061045a85858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505060405161031c9250869150602001611221565b979650505050505050565b8151606090600090815b81811015610a6557826104b557845161049090879083908890600090610cc6565b156104ac5784516104a1908261126f565b90506003925061046f565b6001925061046f565b60018303610574575b8181101561056f578581815181106104d8576104d8611282565b01602001516001600160f81b031916603d60f81b03610507576006925061050060018261126f565b905061046f565b85818151811061051957610519611282565b01602001516001600160f81b0319167f5b000000000000000000000000000000000000000000000000000000000000000361055d576002925061050060018261126f565b8061056781611298565b9150506104be565b61046f565b60028303610625575b8181101561056f5785818151811061059757610597611282565b01602001516001600160f81b0319167f5d000000000000000000000000000000000000000000000000000000000000000361061357600692506105db60018261126f565b90508581815181106105ef576105ef611282565b01602001516001600160f81b031916603d60f81b0361056f5761050060018261126f565b8061061d81611298565b91505061057d565b600383036106705785818151811061063f5761063f611282565b01602001516001600160f81b031916602760f81b03610667576004925061050060018261126f565b6005925061046f565b6004830361081557806000805b8484101561080d57801561070c5788848151811061069d5761069d611282565b01602001516001600160f81b031916896106b7848661126f565b815181106106c7576106c7611282565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535061070160018361126f565b9150600090506107fb565b88848151811061071e5761071e611282565b01602001516001600160f81b031916601760fa1b0361073f575060016107fb565b88848151811061075157610751611282565b01602001516001600160f81b031916602760f81b0361078257610775898484610ce9565b965050505050505061028c565b88848151811061079457610794611282565b01602001516001600160f81b031916896107ae848661126f565b815181106107be576107be611282565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506107f860018361126f565b91505b8361080581611298565b94505061067d565b50505061046f565b6005830361089357805b828210156108855786828151811061083957610839611282565b01602001516001600160f81b031916600160fd1b03610873576108688161086081856112b1565b899190610ce9565b94505050505061028c565b8161087d81611298565b92505061081f565b6108688161086081866112b1565b600683036108de578581815181106108ad576108ad611282565b01602001516001600160f81b031916602760f81b036108d5576007925061050060018261126f565b6008925061046f565b600783036109c95760005b828210156109c35780156108ff575060006109b1565b86828151811061091157610911611282565b01602001516001600160f81b031916601760fa1b03610932575060016109b1565b86828151811061094457610944611282565b01602001516001600160f81b031916602760f81b036109b15761096860018361126f565b91505b86828151811061097d5761097d611282565b01602001516001600160f81b031916600160fd1b036109a8576109a160018361126f565b915061096b565b600093506109c3565b816109bb81611298565b9250506108e9565b5061046f565b600883146109d9576109d96112c4565b8181101561056f578581815181106109f3576109f3611282565b01602001516001600160f81b031916600160fd1b03610a53575b858181518110610a1f57610a1f611282565b01602001516001600160f81b031916600160fd1b03610a4a57610a4360018261126f565b9050610a0d565b6000925061046f565b80610a5d81611298565b9150506109d9565b5050604080516020810190915260008152949350505050565b6060600080610a8d85856112b1565b9050610a9a6002826112f0565b600103610b03576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e76616c696420737472696e67206c656e6774680000000000000000000000604482015260640161027e565b610b0e600282611304565b67ffffffffffffffff811115610b2657610b26611150565b6040519080825280601f01601f191660200182016040528015610b50576020820181803683370190505b509250600191508551841115610b6557600080fd5b610bb6565b6000603a8210602f83111615610b825750602f190190565b60478210604083111615610b9857506036190190565b60678210606083111615610bae57506056190190565b5060ff919050565b60208601855b85811015610c1b57610bd38183015160001a610b6a565b610be56001830184015160001a610b6a565b60ff811460ff83141715610bfe57600095505050610c1b565b60049190911b178060028984030487016020015350600201610bbc565b505050935093915050565b60606000610c3383610d6b565b600101905060008167ffffffffffffffff811115610c5357610c53611150565b6040519080825280601f01601f191660200182016040528015610c7d576020820181803683370190505b5090508181016020015b600019017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8504945084610c8757509392505050565b6000610cd3848484610e4d565b610cde878785610e4d565b149695505050505050565b8251606090610cf8838561126f565b1115610d0357600080fd5b60008267ffffffffffffffff811115610d1e57610d1e611150565b6040519080825280601f01601f191660200182016040528015610d48576020820181803683370190505b50905060208082019086860101610d60828287610e71565b509095945050505050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310610db4577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310610de0576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610dfe57662386f26fc10000830492506010015b6305f5e1008310610e16576305f5e100830492506008015b6127108310610e2a57612710830492506004015b60648310610e3c576064830492506002015b600a831061028c5760010192915050565b8251600090610e5c838561126f565b1115610e6757600080fd5b5091016020012090565b60208110610ea95781518352610e8860208461126f565b9250610e9560208361126f565b9150610ea26020826112b1565b9050610e71565b905182516020929092036101000a6000190180199091169116179052565b600060208284031215610ed957600080fd5b81356001600160e01b031981168114610ef157600080fd5b9392505050565b60008083601f840112610f0a57600080fd5b50813567ffffffffffffffff811115610f2257600080fd5b602083019150836020828501011115610f3a57600080fd5b9250929050565b60008060008060008060608789031215610f5a57600080fd5b863567ffffffffffffffff80821115610f7257600080fd5b610f7e8a838b01610ef8565b90985096506020890135915080821115610f9757600080fd5b610fa38a838b01610ef8565b90965094506040890135915080821115610fbc57600080fd5b50610fc989828a01610ef8565b979a9699509497509295939492505050565b60005b83811015610ff6578181015183820152602001610fde565b50506000910152565b602081526000825180602084015261101e816040850160208701610fdb565b601f01601f19169190910160400192915050565b6001600160e01b0319813581811691600485101561105a5780818660040360031b1b83161692505b505092915050565b6000808585111561107257600080fd5b8386111561107f57600080fd5b5050820193919092039150565b6000806040838503121561109f57600080fd5b50508035926020909101359150565b7f615b6500000000000000000000000000000000000000000000000000000000008152600082516110e6816003850160208701610fdb565b615d3d60f01b6003939091019283015250600501919050565b7f615b000000000000000000000000000000000000000000000000000000000000815260008251611137816002850160208701610fdb565b615d3d60f01b6002939091019283015250600401919050565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561117957600080fd5b82359150602083013567ffffffffffffffff8082111561119857600080fd5b818501915085601f8301126111ac57600080fd5b8135818111156111be576111be611150565b604051601f8201601f19908116603f011681019083821181831017156111e6576111e6611150565b816040528281528860208487010111156111ff57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b7f745b000000000000000000000000000000000000000000000000000000000000815260008251611137816002850160208701610fdb565b634e487b7160e01b600052601160045260246000fd5b8082018082111561028c5761028c611259565b634e487b7160e01b600052603260045260246000fd5b6000600182016112aa576112aa611259565b5060010190565b8181038181111561028c5761028c611259565b634e487b7160e01b600052600160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b6000826112ff576112ff6112da565b500690565b600082611313576113136112da565b50049056fea26469706673582212203572cfc5fcb1ebedbb66aca92142c81b01bd1363a5a1c1b46d18a861668d369764736f6c63430008110033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b5780638ef98a7e1461008d575b600080fd5b610078610049366004610ec7565b6001600160e01b0319167f8ef98a7e000000000000000000000000000000000000000000000000000000001490565b60405190151581526020015b60405180910390f35b6100a061009b366004610f41565b6100ad565b6040516100849190610fff565b606060006100bb8587611032565b90507fc4c4a822000000000000000000000000000000000000000000000000000000006001600160e01b0319821601610100576100f884846101b6565b9150506101ac565b7f0e3481fa000000000000000000000000000000000000000000000000000000006001600160e01b031982160161013d576100f886868686610292565b7fa62e2bc4000000000000000000000000000000000000000000000000000000006001600160e01b031982160161017a576100f8868686866103ed565b6040517fd623472500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9695505050505050565b6060600061022e84848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505060408051808201909152600681527f615b36305d3d0000000000000000000000000000000000000000000000000000602082015291506104659050565b9050805160000361024057905061028c565b60008061025a6002845185610a7e9092919063ffffffff16565b91509150806102875782604051630f79e00960e21b815260040161027e9190610fff565b60405180910390fd5b509150505b92915050565b606060006102a38560048189611062565b8101906102b0919061108c565b9150506060816380000000166000146103375761033085858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061030c92505050637fffffff8516610c26565b60405160200161031c91906110ae565b604051602081830303815290604052610465565b905061038f565b61038c85858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061037c9250869150610c269050565b60405160200161031c91906110ff565b90505b80516000036103a15791506103e59050565b6000806103bb6002845185610a7e9092919063ffffffff16565b91509150806103df5782604051630f79e00960e21b815260040161027e9190610fff565b50925050505b949350505050565b606060006103fe8560048189611062565b81019061040b9190611166565b915050600061045a85858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505060405161031c9250869150602001611221565b979650505050505050565b8151606090600090815b81811015610a6557826104b557845161049090879083908890600090610cc6565b156104ac5784516104a1908261126f565b90506003925061046f565b6001925061046f565b60018303610574575b8181101561056f578581815181106104d8576104d8611282565b01602001516001600160f81b031916603d60f81b03610507576006925061050060018261126f565b905061046f565b85818151811061051957610519611282565b01602001516001600160f81b0319167f5b000000000000000000000000000000000000000000000000000000000000000361055d576002925061050060018261126f565b8061056781611298565b9150506104be565b61046f565b60028303610625575b8181101561056f5785818151811061059757610597611282565b01602001516001600160f81b0319167f5d000000000000000000000000000000000000000000000000000000000000000361061357600692506105db60018261126f565b90508581815181106105ef576105ef611282565b01602001516001600160f81b031916603d60f81b0361056f5761050060018261126f565b8061061d81611298565b91505061057d565b600383036106705785818151811061063f5761063f611282565b01602001516001600160f81b031916602760f81b03610667576004925061050060018261126f565b6005925061046f565b6004830361081557806000805b8484101561080d57801561070c5788848151811061069d5761069d611282565b01602001516001600160f81b031916896106b7848661126f565b815181106106c7576106c7611282565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535061070160018361126f565b9150600090506107fb565b88848151811061071e5761071e611282565b01602001516001600160f81b031916601760fa1b0361073f575060016107fb565b88848151811061075157610751611282565b01602001516001600160f81b031916602760f81b0361078257610775898484610ce9565b965050505050505061028c565b88848151811061079457610794611282565b01602001516001600160f81b031916896107ae848661126f565b815181106107be576107be611282565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506107f860018361126f565b91505b8361080581611298565b94505061067d565b50505061046f565b6005830361089357805b828210156108855786828151811061083957610839611282565b01602001516001600160f81b031916600160fd1b03610873576108688161086081856112b1565b899190610ce9565b94505050505061028c565b8161087d81611298565b92505061081f565b6108688161086081866112b1565b600683036108de578581815181106108ad576108ad611282565b01602001516001600160f81b031916602760f81b036108d5576007925061050060018261126f565b6008925061046f565b600783036109c95760005b828210156109c35780156108ff575060006109b1565b86828151811061091157610911611282565b01602001516001600160f81b031916601760fa1b03610932575060016109b1565b86828151811061094457610944611282565b01602001516001600160f81b031916602760f81b036109b15761096860018361126f565b91505b86828151811061097d5761097d611282565b01602001516001600160f81b031916600160fd1b036109a8576109a160018361126f565b915061096b565b600093506109c3565b816109bb81611298565b9250506108e9565b5061046f565b600883146109d9576109d96112c4565b8181101561056f578581815181106109f3576109f3611282565b01602001516001600160f81b031916600160fd1b03610a53575b858181518110610a1f57610a1f611282565b01602001516001600160f81b031916600160fd1b03610a4a57610a4360018261126f565b9050610a0d565b6000925061046f565b80610a5d81611298565b9150506109d9565b5050604080516020810190915260008152949350505050565b6060600080610a8d85856112b1565b9050610a9a6002826112f0565b600103610b03576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e76616c696420737472696e67206c656e6774680000000000000000000000604482015260640161027e565b610b0e600282611304565b67ffffffffffffffff811115610b2657610b26611150565b6040519080825280601f01601f191660200182016040528015610b50576020820181803683370190505b509250600191508551841115610b6557600080fd5b610bb6565b6000603a8210602f83111615610b825750602f190190565b60478210604083111615610b9857506036190190565b60678210606083111615610bae57506056190190565b5060ff919050565b60208601855b85811015610c1b57610bd38183015160001a610b6a565b610be56001830184015160001a610b6a565b60ff811460ff83141715610bfe57600095505050610c1b565b60049190911b178060028984030487016020015350600201610bbc565b505050935093915050565b60606000610c3383610d6b565b600101905060008167ffffffffffffffff811115610c5357610c53611150565b6040519080825280601f01601f191660200182016040528015610c7d576020820181803683370190505b5090508181016020015b600019017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8504945084610c8757509392505050565b6000610cd3848484610e4d565b610cde878785610e4d565b149695505050505050565b8251606090610cf8838561126f565b1115610d0357600080fd5b60008267ffffffffffffffff811115610d1e57610d1e611150565b6040519080825280601f01601f191660200182016040528015610d48576020820181803683370190505b50905060208082019086860101610d60828287610e71565b509095945050505050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310610db4577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310610de0576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610dfe57662386f26fc10000830492506010015b6305f5e1008310610e16576305f5e100830492506008015b6127108310610e2a57612710830492506004015b60648310610e3c576064830492506002015b600a831061028c5760010192915050565b8251600090610e5c838561126f565b1115610e6757600080fd5b5091016020012090565b60208110610ea95781518352610e8860208461126f565b9250610e9560208361126f565b9150610ea26020826112b1565b9050610e71565b905182516020929092036101000a6000190180199091169116179052565b600060208284031215610ed957600080fd5b81356001600160e01b031981168114610ef157600080fd5b9392505050565b60008083601f840112610f0a57600080fd5b50813567ffffffffffffffff811115610f2257600080fd5b602083019150836020828501011115610f3a57600080fd5b9250929050565b60008060008060008060608789031215610f5a57600080fd5b863567ffffffffffffffff80821115610f7257600080fd5b610f7e8a838b01610ef8565b90985096506020890135915080821115610f9757600080fd5b610fa38a838b01610ef8565b90965094506040890135915080821115610fbc57600080fd5b50610fc989828a01610ef8565b979a9699509497509295939492505050565b60005b83811015610ff6578181015183820152602001610fde565b50506000910152565b602081526000825180602084015261101e816040850160208701610fdb565b601f01601f19169190910160400192915050565b6001600160e01b0319813581811691600485101561105a5780818660040360031b1b83161692505b505092915050565b6000808585111561107257600080fd5b8386111561107f57600080fd5b5050820193919092039150565b6000806040838503121561109f57600080fd5b50508035926020909101359150565b7f615b6500000000000000000000000000000000000000000000000000000000008152600082516110e6816003850160208701610fdb565b615d3d60f01b6003939091019283015250600501919050565b7f615b000000000000000000000000000000000000000000000000000000000000815260008251611137816002850160208701610fdb565b615d3d60f01b6002939091019283015250600401919050565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561117957600080fd5b82359150602083013567ffffffffffffffff8082111561119857600080fd5b818501915085601f8301126111ac57600080fd5b8135818111156111be576111be611150565b604051601f8201601f19908116603f011681019083821181831017156111e6576111e6611150565b816040528281528860208487010111156111ff57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b7f745b000000000000000000000000000000000000000000000000000000000000815260008251611137816002850160208701610fdb565b634e487b7160e01b600052601160045260246000fd5b8082018082111561028c5761028c611259565b634e487b7160e01b600052603260045260246000fd5b6000600182016112aa576112aa611259565b5060010190565b8181038181111561028c5761028c611259565b634e487b7160e01b600052600160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b6000826112ff576112ff6112da565b500690565b600082611313576113136112da565b50049056fea26469706673582212203572cfc5fcb1ebedbb66aca92142c81b01bd1363a5a1c1b46d18a861668d369764736f6c63430008110033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "ExtendedDNSResolver",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ExtendedDNSResolver$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/resolvers/profiles/ExtendedDNSResolver.sol:ExtendedDNSResolver",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ExtendedDNSResolver$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "ExtendedDNSResolver",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ExtendedDNSResolver$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/resolvers/profiles/ExtendedDNSResolver.sol:ExtendedDNSResolver",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ExtendedDNSResolver$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "ExtendedDNSResolver",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ExtendedDNSResolver$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/resolvers/profiles/ExtendedDNSResolver.sol:ExtendedDNSResolver",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ExtendedDNSResolver$Type["abi"]>>;
}
