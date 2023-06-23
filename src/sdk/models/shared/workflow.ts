/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WorkflowConfig } from "./workflowconfig";
import { Expose, Transform, Type } from "class-transformer";

export class Workflow extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "config" })
    @Type(() => WorkflowConfig)
    config: WorkflowConfig;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt: Date;
}