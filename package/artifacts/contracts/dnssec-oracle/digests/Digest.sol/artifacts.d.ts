// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { Digest$Type } from "./Digest";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["Digest"]: Digest$Type;
    ["contracts/dnssec-oracle/digests/Digest.sol:Digest"]: Digest$Type;
  }

  interface ContractTypesMap {
    ["Digest"]: GetContractReturnType<Digest$Type["abi"]>;
    ["contracts/dnssec-oracle/digests/Digest.sol:Digest"]: GetContractReturnType<Digest$Type["abi"]>;
  }
}