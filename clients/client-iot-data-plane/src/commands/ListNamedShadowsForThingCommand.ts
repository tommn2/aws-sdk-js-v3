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

import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import {
  ListNamedShadowsForThingRequest,
  ListNamedShadowsForThingRequestFilterSensitiveLog,
  ListNamedShadowsForThingResponse,
  ListNamedShadowsForThingResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListNamedShadowsForThingCommand,
  serializeAws_restJson1ListNamedShadowsForThingCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListNamedShadowsForThingCommand}.
 */
export interface ListNamedShadowsForThingCommandInput extends ListNamedShadowsForThingRequest {}
/**
 * @public
 *
 * The output of {@link ListNamedShadowsForThingCommand}.
 */
export interface ListNamedShadowsForThingCommandOutput extends ListNamedShadowsForThingResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the shadows for the specified thing.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListNamedShadowsForThing</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, ListNamedShadowsForThingCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, ListNamedShadowsForThingCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * const client = new IoTDataPlaneClient(config);
 * const command = new ListNamedShadowsForThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListNamedShadowsForThingCommandInput - {@link ListNamedShadowsForThingCommandInput}
 * @returns {@link ListNamedShadowsForThingCommandOutput}
 * @see {@link ListNamedShadowsForThingCommandInput} for command's `input` shape.
 * @see {@link ListNamedShadowsForThingCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for IoTDataPlaneClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>The specified combination of HTTP verb and URI is not supported.</p>
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
export class ListNamedShadowsForThingCommand extends $Command<
  ListNamedShadowsForThingCommandInput,
  ListNamedShadowsForThingCommandOutput,
  IoTDataPlaneClientResolvedConfig
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
  constructor(readonly input: ListNamedShadowsForThingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTDataPlaneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListNamedShadowsForThingCommandInput, ListNamedShadowsForThingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListNamedShadowsForThingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTDataPlaneClient";
    const commandName = "ListNamedShadowsForThingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListNamedShadowsForThingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListNamedShadowsForThingResponseFilterSensitiveLog,
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
  private serialize(input: ListNamedShadowsForThingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListNamedShadowsForThingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNamedShadowsForThingCommandOutput> {
    return deserializeAws_restJson1ListNamedShadowsForThingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
