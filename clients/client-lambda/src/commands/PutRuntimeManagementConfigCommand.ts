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

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  PutRuntimeManagementConfigRequest,
  PutRuntimeManagementConfigRequestFilterSensitiveLog,
  PutRuntimeManagementConfigResponse,
  PutRuntimeManagementConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutRuntimeManagementConfigCommand,
  serializeAws_restJson1PutRuntimeManagementConfigCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link PutRuntimeManagementConfigCommand}.
 */
export interface PutRuntimeManagementConfigCommandInput extends PutRuntimeManagementConfigRequest {}
/**
 * @public
 *
 * The output of {@link PutRuntimeManagementConfigCommand}.
 */
export interface PutRuntimeManagementConfigCommandOutput extends PutRuntimeManagementConfigResponse, __MetadataBearer {}

/**
 * @public
 * <p>Sets the runtime management configuration for a function's version. For more information,
 *       see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutRuntimeManagementConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutRuntimeManagementConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new PutRuntimeManagementConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param PutRuntimeManagementConfigCommandInput - {@link PutRuntimeManagementConfigCommandInput}
 * @returns {@link PutRuntimeManagementConfigCommandOutput}
 * @see {@link PutRuntimeManagementConfigCommandInput} for command's `input` shape.
 * @see {@link PutRuntimeManagementConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 *
 */
export class PutRuntimeManagementConfigCommand extends $Command<
  PutRuntimeManagementConfigCommandInput,
  PutRuntimeManagementConfigCommandOutput,
  LambdaClientResolvedConfig
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
  constructor(readonly input: PutRuntimeManagementConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRuntimeManagementConfigCommandInput, PutRuntimeManagementConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutRuntimeManagementConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "PutRuntimeManagementConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRuntimeManagementConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutRuntimeManagementConfigResponseFilterSensitiveLog,
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
  private serialize(input: PutRuntimeManagementConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutRuntimeManagementConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutRuntimeManagementConfigCommandOutput> {
    return deserializeAws_restJson1PutRuntimeManagementConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
