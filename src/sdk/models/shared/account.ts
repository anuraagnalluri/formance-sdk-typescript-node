/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class AccountMetadata extends SpeakeasyBase {}

export class Account extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    address: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => AccountMetadata)
    metadata?: AccountMetadata;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;
}
