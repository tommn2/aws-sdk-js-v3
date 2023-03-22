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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  GetEffectivePoliciesRequest,
  GetEffectivePoliciesRequestFilterSensitiveLog,
  GetEffectivePoliciesResponse,
  GetEffectivePoliciesResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1GetEffectivePoliciesCommand,
  serializeAws_restJson1GetEffectivePoliciesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetEffectivePoliciesCommand}.
 */
export interface GetEffectivePoliciesCommandInput extends GetEffectivePoliciesRequest {}
/**
 * @public
 *
 * The output of {@link GetEffectivePoliciesCommand}.
 */
export interface GetEffectivePoliciesCommandOutput extends GetEffectivePoliciesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of the policies that have an effect on the authorization behavior of the
 *          specified device when it connects to the IoT device gateway.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetEffectivePolicies</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetEffectivePoliciesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetEffectivePoliciesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetEffectivePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetEffectivePoliciesCommandInput - {@link GetEffectivePoliciesCommandInput}
 * @returns {@link GetEffectivePoliciesCommandOutput}
 * @see {@link GetEffectivePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetEffectivePoliciesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 *
 */
export class GetEffectivePoliciesCommand extends $Command<
  GetEffectivePoliciesCommandInput,
  GetEffectivePoliciesCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: GetEffectivePoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEffectivePoliciesCommandInput, GetEffectivePoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEffectivePoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "GetEffectivePoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEffectivePoliciesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetEffectivePoliciesResponseFilterSensitiveLog,
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
  private serialize(input: GetEffectivePoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetEffectivePoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEffectivePoliciesCommandOutput> {
    return deserializeAws_restJson1GetEffectivePoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
