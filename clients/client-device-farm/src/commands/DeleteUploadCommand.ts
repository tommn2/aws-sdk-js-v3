// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import {
  DeleteUploadRequest,
  DeleteUploadRequestFilterSensitiveLog,
  DeleteUploadResult,
  DeleteUploadResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteUploadCommand,
  serializeAws_json1_1DeleteUploadCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DeleteUploadCommand}.
 */
export interface DeleteUploadCommandInput extends DeleteUploadRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUploadCommand}.
 */
export interface DeleteUploadCommandOutput extends DeleteUploadResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes an upload given the upload ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteUploadCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteUploadCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new DeleteUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteUploadCommandInput - {@link DeleteUploadCommandInput}
 * @returns {@link DeleteUploadCommandOutput}
 * @see {@link DeleteUploadCommandInput} for command's `input` shape.
 * @see {@link DeleteUploadCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 *
 * @example To delete a specific upload
 * ```javascript
 * // The following example deletes a specific upload.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:upload:EXAMPLE-GUID-123-456"
 * };
 * const command = new DeleteUploadCommand(input);
 * await client.send(command);
 * // example id: deleteupload-example-1470868363942
 * ```
 *
 */
export class DeleteUploadCommand extends $Command<
  DeleteUploadCommandInput,
  DeleteUploadCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DeleteUploadCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteUploadCommandInput, DeleteUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteUploadCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "DeleteUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteUploadRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteUploadResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteUploadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteUploadCommandOutput> {
    return deserializeAws_json1_1DeleteUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
