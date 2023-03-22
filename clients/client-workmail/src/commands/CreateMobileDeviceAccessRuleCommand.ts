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
  CreateMobileDeviceAccessRuleRequest,
  CreateMobileDeviceAccessRuleRequestFilterSensitiveLog,
  CreateMobileDeviceAccessRuleResponse,
  CreateMobileDeviceAccessRuleResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateMobileDeviceAccessRuleCommand,
  serializeAws_json1_1CreateMobileDeviceAccessRuleCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 *
 * The input for {@link CreateMobileDeviceAccessRuleCommand}.
 */
export interface CreateMobileDeviceAccessRuleCommandInput extends CreateMobileDeviceAccessRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateMobileDeviceAccessRuleCommand}.
 */
export interface CreateMobileDeviceAccessRuleCommandOutput
  extends CreateMobileDeviceAccessRuleResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a new mobile device access rule for the specified WorkMail organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CreateMobileDeviceAccessRuleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CreateMobileDeviceAccessRuleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new CreateMobileDeviceAccessRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateMobileDeviceAccessRuleCommandInput - {@link CreateMobileDeviceAccessRuleCommandInput}
 * @returns {@link CreateMobileDeviceAccessRuleCommandOutput}
 * @see {@link CreateMobileDeviceAccessRuleCommandInput} for command's `input` shape.
 * @see {@link CreateMobileDeviceAccessRuleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeds the limit of the resource.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 *
 */
export class CreateMobileDeviceAccessRuleCommand extends $Command<
  CreateMobileDeviceAccessRuleCommandInput,
  CreateMobileDeviceAccessRuleCommandOutput,
  WorkMailClientResolvedConfig
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
  constructor(readonly input: CreateMobileDeviceAccessRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMobileDeviceAccessRuleCommandInput, CreateMobileDeviceAccessRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMobileDeviceAccessRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "CreateMobileDeviceAccessRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMobileDeviceAccessRuleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMobileDeviceAccessRuleResponseFilterSensitiveLog,
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
  private serialize(input: CreateMobileDeviceAccessRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateMobileDeviceAccessRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMobileDeviceAccessRuleCommandOutput> {
    return deserializeAws_json1_1CreateMobileDeviceAccessRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
