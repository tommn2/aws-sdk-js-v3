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

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import {
  DisassociatePricingRulesInput,
  DisassociatePricingRulesInputFilterSensitiveLog,
  DisassociatePricingRulesOutput,
  DisassociatePricingRulesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociatePricingRulesCommand,
  serializeAws_restJson1DisassociatePricingRulesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DisassociatePricingRulesCommand}.
 */
export interface DisassociatePricingRulesCommandInput extends DisassociatePricingRulesInput {}
/**
 * @public
 *
 * The output of {@link DisassociatePricingRulesCommand}.
 */
export interface DisassociatePricingRulesCommandOutput extends DisassociatePricingRulesOutput, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Disassociates a list of pricing rules from a pricing plan.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, DisassociatePricingRulesCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, DisassociatePricingRulesCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const command = new DisassociatePricingRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DisassociatePricingRulesCommandInput - {@link DisassociatePricingRulesCommandInput}
 * @returns {@link DisassociatePricingRulesCommandOutput}
 * @see {@link DisassociatePricingRulesCommandInput} for command's `input` shape.
 * @see {@link DisassociatePricingRulesCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
 *     </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can cause an inconsistent state by updating or deleting a resource.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't match with the constraints specified by Amazon Web Services services.</p>
 *
 *
 */
export class DisassociatePricingRulesCommand extends $Command<
  DisassociatePricingRulesCommandInput,
  DisassociatePricingRulesCommandOutput,
  BillingconductorClientResolvedConfig
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
  constructor(readonly input: DisassociatePricingRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BillingconductorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociatePricingRulesCommandInput, DisassociatePricingRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociatePricingRulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "DisassociatePricingRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociatePricingRulesInputFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociatePricingRulesOutputFilterSensitiveLog,
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
  private serialize(input: DisassociatePricingRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociatePricingRulesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociatePricingRulesCommandOutput> {
    return deserializeAws_restJson1DisassociatePricingRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
