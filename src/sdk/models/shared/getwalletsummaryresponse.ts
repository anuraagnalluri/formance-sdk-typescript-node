/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BalanceWithAssets } from "./balancewithassets";
import { Expose, Type } from "class-transformer";

/**
 * Wallet summary
 */
export class GetWalletSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "availableFunds" })
  availableFunds: Record<string, number>;

  @SpeakeasyMetadata({ elemType: BalanceWithAssets })
  @Expose({ name: "balances" })
  @Type(() => BalanceWithAssets)
  balances: BalanceWithAssets[];

  @SpeakeasyMetadata()
  @Expose({ name: "expirableFunds" })
  expirableFunds: Record<string, number>;

  @SpeakeasyMetadata()
  @Expose({ name: "expiredFunds" })
  expiredFunds: Record<string, number>;

  @SpeakeasyMetadata()
  @Expose({ name: "holdFunds" })
  holdFunds: Record<string, number>;
}
