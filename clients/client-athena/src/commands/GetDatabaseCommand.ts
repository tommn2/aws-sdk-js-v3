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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import {
  GetDatabaseInput,
  GetDatabaseInputFilterSensitiveLog,
  GetDatabaseOutput,
  GetDatabaseOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetDatabaseCommand,
  serializeAws_json1_1GetDatabaseCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetDatabaseCommand}.
 */
export interface GetDatabaseCommandInput extends GetDatabaseInput {}
/**
 * @public
 *
 * The output of {@link GetDatabaseCommand}.
 */
export interface GetDatabaseCommandOutput extends GetDatabaseOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a database object for the specified database and data catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetDatabaseCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetDatabaseCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new GetDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetDatabaseCommandInput - {@link GetDatabaseCommandInput}
 * @returns {@link GetDatabaseCommandOutput}
 * @see {@link GetDatabaseCommandInput} for command's `input` shape.
 * @see {@link GetDatabaseCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link MetadataException} (client fault)
 *  <p>An exception that Athena received when it called a custom metastore.
 *             Occurs if the error is not caused by user input (<code>InvalidRequestException</code>)
 *             or from the Athena platform (<code>InternalServerException</code>). For
 *             example, if a user-created Lambda function is missing permissions, the
 *                 Lambda
 *             <code>4XX</code> exception is returned in a <code>MetadataException</code>.</p>
 *
 *
 */
export class GetDatabaseCommand extends $Command<
  GetDatabaseCommandInput,
  GetDatabaseCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: GetDatabaseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDatabaseCommandInput, GetDatabaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetDatabaseCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "GetDatabaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDatabaseInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetDatabaseOutputFilterSensitiveLog,
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
  private serialize(input: GetDatabaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDatabaseCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDatabaseCommandOutput> {
    return deserializeAws_json1_1GetDatabaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
