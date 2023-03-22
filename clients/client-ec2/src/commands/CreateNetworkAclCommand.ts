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
  CreateNetworkAclRequest,
  CreateNetworkAclRequestFilterSensitiveLog,
  CreateNetworkAclResult,
  CreateNetworkAclResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_ec2CreateNetworkAclCommand,
  serializeAws_ec2CreateNetworkAclCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link CreateNetworkAclCommand}.
 */
export interface CreateNetworkAclCommandInput extends CreateNetworkAclRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkAclCommand}.
 */
export interface CreateNetworkAclCommandOutput extends CreateNetworkAclResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a network ACL in a VPC. Network ACLs provide an optional layer of security (in addition to security groups) for the instances in your VPC.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the
 * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkAclCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkAclCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateNetworkAclCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateNetworkAclCommandInput - {@link CreateNetworkAclCommandInput}
 * @returns {@link CreateNetworkAclCommandOutput}
 * @see {@link CreateNetworkAclCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkAclCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To create a network ACL
 * ```javascript
 * // This example creates a network ACL for the specified VPC.
 * const input = {
 *   "VpcId": "vpc-a01106c2"
 * };
 * const command = new CreateNetworkAclCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NetworkAcl": {
 *     "Associations": [],
 *     "Entries": [
 *       {
 *         "CidrBlock": "0.0.0.0/0",
 *         "Egress": true,
 *         "Protocol": "-1",
 *         "RuleAction": "deny",
 *         "RuleNumber": 32767
 *       },
 *       {
 *         "CidrBlock": "0.0.0.0/0",
 *         "Egress": false,
 *         "Protocol": "-1",
 *         "RuleAction": "deny",
 *         "RuleNumber": 32767
 *       }
 *     ],
 *     "IsDefault": false,
 *     "NetworkAclId": "acl-5fb85d36",
 *     "Tags": [],
 *     "VpcId": "vpc-a01106c2"
 *   }
 * }
 * *\/
 * // example id: ec2-create-network-acl-1
 * ```
 *
 */
export class CreateNetworkAclCommand extends $Command<
  CreateNetworkAclCommandInput,
  CreateNetworkAclCommandOutput,
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
  constructor(readonly input: CreateNetworkAclCommandInput) {
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
  ): Handler<CreateNetworkAclCommandInput, CreateNetworkAclCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNetworkAclCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateNetworkAclCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNetworkAclRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateNetworkAclResultFilterSensitiveLog,
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
  private serialize(input: CreateNetworkAclCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateNetworkAclCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNetworkAclCommandOutput> {
    return deserializeAws_ec2CreateNetworkAclCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
