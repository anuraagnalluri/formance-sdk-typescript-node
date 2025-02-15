/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class AddScopeToClientRequest extends SpeakeasyBase {
  /**
   * Client ID
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=clientId",
  })
  clientId: string;

  /**
   * Scope ID
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=scopeId",
  })
  scopeId: string;
}

export class AddScopeToClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
