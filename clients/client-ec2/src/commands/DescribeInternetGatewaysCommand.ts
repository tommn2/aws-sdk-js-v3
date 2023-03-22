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
  DescribeInternetGatewaysRequest,
  DescribeInternetGatewaysRequestFilterSensitiveLog,
  DescribeInternetGatewaysResult,
  DescribeInternetGatewaysResultFilterSensitiveLog,
} from "../models/models_4";
import {
  deserializeAws_ec2DescribeInternetGatewaysCommand,
  serializeAws_ec2DescribeInternetGatewaysCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DescribeInternetGatewaysCommand}.
 */
export interface DescribeInternetGatewaysCommandInput extends DescribeInternetGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInternetGatewaysCommand}.
 */
export interface DescribeInternetGatewaysCommandOutput extends DescribeInternetGatewaysResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more of your internet gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInternetGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInternetGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInternetGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeInternetGatewaysCommandInput - {@link DescribeInternetGatewaysCommandInput}
 * @returns {@link DescribeInternetGatewaysCommandOutput}
 * @see {@link DescribeInternetGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeInternetGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To describe the Internet gateway for a VPC
 * ```javascript
 * // This example describes the Internet gateway for the specified VPC.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "attachment.vpc-id",
 *       "Values": [
 *         "vpc-a01106c2"
 *       ]
 *     }
 *   ]
 * };
 * const command = new DescribeInternetGatewaysCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InternetGateways": [
 *     {
 *       "Attachments": [
 *         {
 *           "State": "available",
 *           "VpcId": "vpc-a01106c2"
 *         }
 *       ],
 *       "InternetGatewayId": "igw-c0a643a9",
 *       "Tags": []
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-internet-gateways-1
 * ```
 *
 */
export class DescribeInternetGatewaysCommand extends $Command<
  DescribeInternetGatewaysCommandInput,
  DescribeInternetGatewaysCommandOutput,
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
  constructor(readonly input: DescribeInternetGatewaysCommandInput) {
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
  ): Handler<DescribeInternetGatewaysCommandInput, DescribeInternetGatewaysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInternetGatewaysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeInternetGatewaysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInternetGatewaysRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeInternetGatewaysResultFilterSensitiveLog,
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
  private serialize(input: DescribeInternetGatewaysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeInternetGatewaysCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInternetGatewaysCommandOutput> {
    return deserializeAws_ec2DescribeInternetGatewaysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
