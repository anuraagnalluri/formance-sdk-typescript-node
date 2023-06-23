/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class ResponseCursorData extends SpeakeasyBase {}

export class ResponseCursorTotal extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "relation" })
    relation?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: number;
}

export class ResponseCursor extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ResponseCursorData })
    @Expose({ name: "data" })
    @Type(() => ResponseCursorData)
    data?: ResponseCursorData[];

    @SpeakeasyMetadata()
    @Expose({ name: "hasMore" })
    hasMore?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "next" })
    next?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "pageSize" })
    pageSize?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "previous" })
    previous?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    @Type(() => ResponseCursorTotal)
    total?: ResponseCursorTotal;
}

/**
 * The payload
 */
export class ResponseData extends SpeakeasyBase {}

/**
 * Success
 */
export class Response extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "cursor" })
    @Type(() => ResponseCursor)
    cursor?: ResponseCursor;

    /**
     * The payload
     */
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => ResponseData)
    data?: ResponseData;
}