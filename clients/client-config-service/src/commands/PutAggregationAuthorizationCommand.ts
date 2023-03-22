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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  PutAggregationAuthorizationRequest,
  PutAggregationAuthorizationRequestFilterSensitiveLog,
  PutAggregationAuthorizationResponse,
  PutAggregationAuthorizationResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1PutAggregationAuthorizationCommand,
  serializeAws_json1_1PutAggregationAuthorizationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link PutAggregationAuthorizationCommand}.
 */
export interface PutAggregationAuthorizationCommandInput extends PutAggregationAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link PutAggregationAuthorizationCommand}.
 */
export interface PutAggregationAuthorizationCommandOutput
  extends PutAggregationAuthorizationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Authorizes the aggregator account and region to collect data
 * 			from the source account and region. </p>
 *          <note>
 *             <p>
 *                <code>PutAggregationAuthorization</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values,
 * 			Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutAggregationAuthorizationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutAggregationAuthorizationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutAggregationAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param PutAggregationAuthorizationCommandInput - {@link PutAggregationAuthorizationCommandInput}
 * @returns {@link PutAggregationAuthorizationCommandOutput}
 * @see {@link PutAggregationAuthorizationCommandInput} for command's `input` shape.
 * @see {@link PutAggregationAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 *
 */
export class PutAggregationAuthorizationCommand extends $Command<
  PutAggregationAuthorizationCommandInput,
  PutAggregationAuthorizationCommandOutput,
  ConfigServiceClientResolvedConfig
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
  constructor(readonly input: PutAggregationAuthorizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAggregationAuthorizationCommandInput, PutAggregationAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAggregationAuthorizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutAggregationAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAggregationAuthorizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutAggregationAuthorizationResponseFilterSensitiveLog,
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
  private serialize(input: PutAggregationAuthorizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAggregationAuthorizationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutAggregationAuthorizationCommandOutput> {
    return deserializeAws_json1_1PutAggregationAuthorizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
