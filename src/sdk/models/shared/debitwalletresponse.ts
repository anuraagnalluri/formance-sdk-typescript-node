/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Hold } from "./hold";
import { Expose, Type } from "class-transformer";

/**
 * Wallet successfully debited as a pending hold
 */
export class DebitWalletResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => Hold)
  data: Hold;
}
