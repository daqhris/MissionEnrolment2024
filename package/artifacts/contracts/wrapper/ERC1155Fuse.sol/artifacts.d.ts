// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { ERC1155Fuse$Type } from "./ERC1155Fuse";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["ERC1155Fuse"]: ERC1155Fuse$Type;
    ["contracts/wrapper/ERC1155Fuse.sol:ERC1155Fuse"]: ERC1155Fuse$Type;
  }

  interface ContractTypesMap {
    ["ERC1155Fuse"]: GetContractReturnType<ERC1155Fuse$Type["abi"]>;
    ["contracts/wrapper/ERC1155Fuse.sol:ERC1155Fuse"]: GetContractReturnType<ERC1155Fuse$Type["abi"]>;
  }
}