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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  GetTransitGatewayMulticastDomainAssociationsRequest,
  GetTransitGatewayMulticastDomainAssociationsRequestFilterSensitiveLog,
  GetTransitGatewayMulticastDomainAssociationsResult,
  GetTransitGatewayMulticastDomainAssociationsResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2GetTransitGatewayMulticastDomainAssociationsCommand,
  serializeAws_ec2GetTransitGatewayMulticastDomainAssociationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link GetTransitGatewayMulticastDomainAssociationsCommand}.
 */
export interface GetTransitGatewayMulticastDomainAssociationsCommandInput
  extends GetTransitGatewayMulticastDomainAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayMulticastDomainAssociationsCommand}.
 */
export interface GetTransitGatewayMulticastDomainAssociationsCommandOutput
  extends GetTransitGatewayMulticastDomainAssociationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the associations for the transit gateway multicast domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayMulticastDomainAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayMulticastDomainAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetTransitGatewayMulticastDomainAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetTransitGatewayMulticastDomainAssociationsCommandInput - {@link GetTransitGatewayMulticastDomainAssociationsCommandInput}
 * @returns {@link GetTransitGatewayMulticastDomainAssociationsCommandOutput}
 * @see {@link GetTransitGatewayMulticastDomainAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayMulticastDomainAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class GetTransitGatewayMulticastDomainAssociationsCommand extends $Command<
  GetTransitGatewayMulticastDomainAssociationsCommandInput,
  GetTransitGatewayMulticastDomainAssociationsCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: GetTransitGatewayMulticastDomainAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetTransitGatewayMulticastDomainAssociationsCommandInput,
    GetTransitGatewayMulticastDomainAssociationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetTransitGatewayMulticastDomainAssociationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetTransitGatewayMulticastDomainAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTransitGatewayMulticastDomainAssociationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetTransitGatewayMulticastDomainAssociationsResultFilterSensitiveLog,
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
  private serialize(
    input: GetTransitGatewayMulticastDomainAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2GetTransitGatewayMulticastDomainAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTransitGatewayMulticastDomainAssociationsCommandOutput> {
    return deserializeAws_ec2GetTransitGatewayMulticastDomainAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
