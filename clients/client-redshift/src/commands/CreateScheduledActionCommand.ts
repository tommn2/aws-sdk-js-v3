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
  CreateScheduledActionMessage,
  CreateScheduledActionMessageFilterSensitiveLog,
  ScheduledAction,
  ScheduledActionFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateScheduledActionCommand,
  serializeAws_queryCreateScheduledActionCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 *
 * The input for {@link CreateScheduledActionCommand}.
 */
export interface CreateScheduledActionCommandInput extends CreateScheduledActionMessage {}
/**
 * @public
 *
 * The output of {@link CreateScheduledActionCommand}.
 */
export interface CreateScheduledActionCommandOutput extends ScheduledAction, __MetadataBearer {}

/**
 * @public
 * <p>Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action.
 *             For example, you can create a schedule of when to run the <code>ResizeCluster</code> API operation.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateScheduledActionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateScheduledActionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateScheduledActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateScheduledActionCommandInput - {@link CreateScheduledActionCommandInput}
 * @returns {@link CreateScheduledActionCommandOutput}
 * @see {@link CreateScheduledActionCommandInput} for command's `input` shape.
 * @see {@link CreateScheduledActionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidScheduledActionFault} (client fault)
 *  <p>The scheduled action is not valid. </p>
 *
 * @throws {@link InvalidScheduleFault} (client fault)
 *  <p>The schedule you submitted isn't valid.</p>
 *
 * @throws {@link ScheduledActionAlreadyExistsFault} (client fault)
 *  <p>The scheduled action already exists. </p>
 *
 * @throws {@link ScheduledActionQuotaExceededFault} (client fault)
 *  <p>The quota for scheduled actions exceeded. </p>
 *
 * @throws {@link ScheduledActionTypeUnsupportedFault} (client fault)
 *  <p>The action type specified for a scheduled action is not supported. </p>
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *  <p>Your account is not authorized to perform the requested operation.</p>
 *
 *
 */
export class CreateScheduledActionCommand extends $Command<
  CreateScheduledActionCommandInput,
  CreateScheduledActionCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: CreateScheduledActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateScheduledActionCommandInput, CreateScheduledActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateScheduledActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "CreateScheduledActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateScheduledActionMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ScheduledActionFilterSensitiveLog,
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
  private serialize(input: CreateScheduledActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateScheduledActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateScheduledActionCommandOutput> {
    return deserializeAws_queryCreateScheduledActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
