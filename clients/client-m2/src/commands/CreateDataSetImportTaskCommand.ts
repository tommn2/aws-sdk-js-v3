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

import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import {
  CreateDataSetImportTaskRequest,
  CreateDataSetImportTaskRequestFilterSensitiveLog,
  CreateDataSetImportTaskResponse,
  CreateDataSetImportTaskResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateDataSetImportTaskCommand,
  serializeAws_restJson1CreateDataSetImportTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateDataSetImportTaskCommand}.
 */
export interface CreateDataSetImportTaskCommandInput extends CreateDataSetImportTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataSetImportTaskCommand}.
 */
export interface CreateDataSetImportTaskCommandOutput extends CreateDataSetImportTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts a data set import task for a specific application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, CreateDataSetImportTaskCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, CreateDataSetImportTaskCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const command = new CreateDataSetImportTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateDataSetImportTaskCommandInput - {@link CreateDataSetImportTaskCommandInput}
 * @returns {@link CreateDataSetImportTaskCommandOutput}
 * @see {@link CreateDataSetImportTaskCommandInput} for command's `input` shape.
 * @see {@link CreateDataSetImportTaskCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The parameters provided in the request conflict with existing resources.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>One or more quotas for Amazon Web Services Mainframe Modernization exceeds the limit.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 *
 */
export class CreateDataSetImportTaskCommand extends $Command<
  CreateDataSetImportTaskCommandInput,
  CreateDataSetImportTaskCommandOutput,
  M2ClientResolvedConfig
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
  constructor(readonly input: CreateDataSetImportTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: M2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDataSetImportTaskCommandInput, CreateDataSetImportTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDataSetImportTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "M2Client";
    const commandName = "CreateDataSetImportTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDataSetImportTaskRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDataSetImportTaskResponseFilterSensitiveLog,
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
  private serialize(input: CreateDataSetImportTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDataSetImportTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataSetImportTaskCommandOutput> {
    return deserializeAws_restJson1CreateDataSetImportTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
