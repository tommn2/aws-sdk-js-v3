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
  DescribeVerifiedAccessInstancesRequest,
  DescribeVerifiedAccessInstancesRequestFilterSensitiveLog,
  DescribeVerifiedAccessInstancesResult,
  DescribeVerifiedAccessInstancesResultFilterSensitiveLog,
} from "../models/models_4";
import {
  deserializeAws_ec2DescribeVerifiedAccessInstancesCommand,
  serializeAws_ec2DescribeVerifiedAccessInstancesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DescribeVerifiedAccessInstancesCommand}.
 */
export interface DescribeVerifiedAccessInstancesCommandInput extends DescribeVerifiedAccessInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVerifiedAccessInstancesCommand}.
 */
export interface DescribeVerifiedAccessInstancesCommandOutput
  extends DescribeVerifiedAccessInstancesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describe Verified Access instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVerifiedAccessInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVerifiedAccessInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVerifiedAccessInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeVerifiedAccessInstancesCommandInput - {@link DescribeVerifiedAccessInstancesCommandInput}
 * @returns {@link DescribeVerifiedAccessInstancesCommandOutput}
 * @see {@link DescribeVerifiedAccessInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeVerifiedAccessInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class DescribeVerifiedAccessInstancesCommand extends $Command<
  DescribeVerifiedAccessInstancesCommandInput,
  DescribeVerifiedAccessInstancesCommandOutput,
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
  constructor(readonly input: DescribeVerifiedAccessInstancesCommandInput) {
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
  ): Handler<DescribeVerifiedAccessInstancesCommandInput, DescribeVerifiedAccessInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVerifiedAccessInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVerifiedAccessInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVerifiedAccessInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeVerifiedAccessInstancesResultFilterSensitiveLog,
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
    input: DescribeVerifiedAccessInstancesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeVerifiedAccessInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVerifiedAccessInstancesCommandOutput> {
    return deserializeAws_ec2DescribeVerifiedAccessInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
