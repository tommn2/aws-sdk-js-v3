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
  ModifyVpcEndpointServicePayerResponsibilityRequest,
  ModifyVpcEndpointServicePayerResponsibilityRequestFilterSensitiveLog,
  ModifyVpcEndpointServicePayerResponsibilityResult,
  ModifyVpcEndpointServicePayerResponsibilityResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2ModifyVpcEndpointServicePayerResponsibilityCommand,
  serializeAws_ec2ModifyVpcEndpointServicePayerResponsibilityCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link ModifyVpcEndpointServicePayerResponsibilityCommand}.
 */
export interface ModifyVpcEndpointServicePayerResponsibilityCommandInput
  extends ModifyVpcEndpointServicePayerResponsibilityRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpcEndpointServicePayerResponsibilityCommand}.
 */
export interface ModifyVpcEndpointServicePayerResponsibilityCommandOutput
  extends ModifyVpcEndpointServicePayerResponsibilityResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the payer responsibility for your VPC endpoint service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointServicePayerResponsibilityCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEndpointServicePayerResponsibilityCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpcEndpointServicePayerResponsibilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ModifyVpcEndpointServicePayerResponsibilityCommandInput - {@link ModifyVpcEndpointServicePayerResponsibilityCommandInput}
 * @returns {@link ModifyVpcEndpointServicePayerResponsibilityCommandOutput}
 * @see {@link ModifyVpcEndpointServicePayerResponsibilityCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEndpointServicePayerResponsibilityCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class ModifyVpcEndpointServicePayerResponsibilityCommand extends $Command<
  ModifyVpcEndpointServicePayerResponsibilityCommandInput,
  ModifyVpcEndpointServicePayerResponsibilityCommandOutput,
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
  constructor(readonly input: ModifyVpcEndpointServicePayerResponsibilityCommandInput) {
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
    ModifyVpcEndpointServicePayerResponsibilityCommandInput,
    ModifyVpcEndpointServicePayerResponsibilityCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ModifyVpcEndpointServicePayerResponsibilityCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpcEndpointServicePayerResponsibilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVpcEndpointServicePayerResponsibilityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyVpcEndpointServicePayerResponsibilityResultFilterSensitiveLog,
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
    input: ModifyVpcEndpointServicePayerResponsibilityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVpcEndpointServicePayerResponsibilityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVpcEndpointServicePayerResponsibilityCommandOutput> {
    return deserializeAws_ec2ModifyVpcEndpointServicePayerResponsibilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
