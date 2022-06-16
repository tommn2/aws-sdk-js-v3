// smithy-typescript generated code
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
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { DeleteCollectorRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteFleetAdvisorCollectorCommand,
  serializeAws_json1_1DeleteFleetAdvisorCollectorCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteFleetAdvisorCollectorCommandInput extends DeleteCollectorRequest {}
export interface DeleteFleetAdvisorCollectorCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified Fleet Advisor collector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteFleetAdvisorCollectorCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteFleetAdvisorCollectorCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DeleteFleetAdvisorCollectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFleetAdvisorCollectorCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetAdvisorCollectorCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 */
export class DeleteFleetAdvisorCollectorCommand extends $Command<
  DeleteFleetAdvisorCollectorCommandInput,
  DeleteFleetAdvisorCollectorCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFleetAdvisorCollectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFleetAdvisorCollectorCommandInput, DeleteFleetAdvisorCollectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DeleteFleetAdvisorCollectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCollectorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFleetAdvisorCollectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteFleetAdvisorCollectorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteFleetAdvisorCollectorCommandOutput> {
    return deserializeAws_json1_1DeleteFleetAdvisorCollectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}