/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ActivityConfirmHold } from "./activityconfirmhold";
import { ActivityCreateTransaction } from "./activitycreatetransaction";
import { ActivityCreditWallet } from "./activitycreditwallet";
import { ActivityDebitWallet } from "./activitydebitwallet";
import { ActivityGetAccount } from "./activitygetaccount";
import { ActivityGetPayment } from "./activitygetpayment";
import { ActivityGetWallet } from "./activitygetwallet";
import { ActivityRevertTransaction } from "./activityreverttransaction";
import { ActivityStripeTransfer } from "./activitystripetransfer";
import { ActivityVoidHold } from "./activityvoidhold";
import { Expose, Type } from "class-transformer";

export class WorkflowInstanceHistoryStageInput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ConfirmHold" })
  @Type(() => ActivityConfirmHold)
  confirmHold?: ActivityConfirmHold;

  @SpeakeasyMetadata()
  @Expose({ name: "CreateTransaction" })
  @Type(() => ActivityCreateTransaction)
  createTransaction?: ActivityCreateTransaction;

  @SpeakeasyMetadata()
  @Expose({ name: "CreditWallet" })
  @Type(() => ActivityCreditWallet)
  creditWallet?: ActivityCreditWallet;

  @SpeakeasyMetadata()
  @Expose({ name: "DebitWallet" })
  @Type(() => ActivityDebitWallet)
  debitWallet?: ActivityDebitWallet;

  @SpeakeasyMetadata()
  @Expose({ name: "GetAccount" })
  @Type(() => ActivityGetAccount)
  getAccount?: ActivityGetAccount;

  @SpeakeasyMetadata()
  @Expose({ name: "GetPayment" })
  @Type(() => ActivityGetPayment)
  getPayment?: ActivityGetPayment;

  @SpeakeasyMetadata()
  @Expose({ name: "GetWallet" })
  @Type(() => ActivityGetWallet)
  getWallet?: ActivityGetWallet;

  @SpeakeasyMetadata()
  @Expose({ name: "RevertTransaction" })
  @Type(() => ActivityRevertTransaction)
  revertTransaction?: ActivityRevertTransaction;

  @SpeakeasyMetadata()
  @Expose({ name: "StripeTransfer" })
  @Type(() => ActivityStripeTransfer)
  stripeTransfer?: ActivityStripeTransfer;

  @SpeakeasyMetadata()
  @Expose({ name: "VoidHold" })
  @Type(() => ActivityVoidHold)
  voidHold?: ActivityVoidHold;
}
