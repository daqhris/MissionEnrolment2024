// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable
import { Context$Type } from "./Context";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "hardhat/types/artifacts";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["Context"]: Context$Type;
    ["@openzeppelin/contracts/utils/Context.sol:Context"]: Context$Type;
  }

  interface ContractTypesMap {
    ["Context"]: GetContractReturnType<Context$Type["abi"]>;
    ["@openzeppelin/contracts/utils/Context.sol:Context"]: GetContractReturnType<Context$Type["abi"]>;
  }
}
