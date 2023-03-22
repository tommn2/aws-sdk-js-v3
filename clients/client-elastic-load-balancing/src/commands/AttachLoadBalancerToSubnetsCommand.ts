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

import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import {
  AttachLoadBalancerToSubnetsInput,
  AttachLoadBalancerToSubnetsInputFilterSensitiveLog,
  AttachLoadBalancerToSubnetsOutput,
  AttachLoadBalancerToSubnetsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryAttachLoadBalancerToSubnetsCommand,
  serializeAws_queryAttachLoadBalancerToSubnetsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link AttachLoadBalancerToSubnetsCommand}.
 */
export interface AttachLoadBalancerToSubnetsCommandInput extends AttachLoadBalancerToSubnetsInput {}
/**
 * @public
 *
 * The output of {@link AttachLoadBalancerToSubnetsCommand}.
 */
export interface AttachLoadBalancerToSubnetsCommandOutput extends AttachLoadBalancerToSubnetsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Adds one or more subnets to the set of configured subnets for the specified load balancer.</p>
 *         <p>The load balancer evenly distributes requests across all registered subnets.
 *             For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-manage-subnets.html">Add or Remove Subnets for Your Load Balancer in a VPC</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, AttachLoadBalancerToSubnetsCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, AttachLoadBalancerToSubnetsCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new AttachLoadBalancerToSubnetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param AttachLoadBalancerToSubnetsCommandInput - {@link AttachLoadBalancerToSubnetsCommandInput}
 * @returns {@link AttachLoadBalancerToSubnetsCommandOutput}
 * @see {@link AttachLoadBalancerToSubnetsCommandInput} for command's `input` shape.
 * @see {@link AttachLoadBalancerToSubnetsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link InvalidSubnetException} (client fault)
 *  <p>The specified VPC has no associated Internet gateway.</p>
 *
 * @throws {@link SubnetNotFoundException} (client fault)
 *  <p>One or more of the specified subnets do not exist.</p>
 *
 *
 * @example To attach subnets to a load balancer
 * ```javascript
 * // This example adds the specified subnet to the set of configured subnets for the specified load balancer.
 * const input = {
 *   "LoadBalancerName": "my-load-balancer",
 *   "Subnets": [
 *     "subnet-0ecac448"
 *   ]
 * };
 * const command = new AttachLoadBalancerToSubnetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Subnets": [
 *     "subnet-15aaab61",
 *     "subnet-0ecac448"
 *   ]
 * }
 * *\/
 * // example id: elb-attach-load-balancer-to-subnets-1
 * ```
 *
 */
export class AttachLoadBalancerToSubnetsCommand extends $Command<
  AttachLoadBalancerToSubnetsCommandInput,
  AttachLoadBalancerToSubnetsCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
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
  constructor(readonly input: AttachLoadBalancerToSubnetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AttachLoadBalancerToSubnetsCommandInput, AttachLoadBalancerToSubnetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AttachLoadBalancerToSubnetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "AttachLoadBalancerToSubnetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachLoadBalancerToSubnetsInputFilterSensitiveLog,
      outputFilterSensitiveLog: AttachLoadBalancerToSubnetsOutputFilterSensitiveLog,
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
  private serialize(input: AttachLoadBalancerToSubnetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAttachLoadBalancerToSubnetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AttachLoadBalancerToSubnetsCommandOutput> {
    return deserializeAws_queryAttachLoadBalancerToSubnetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
