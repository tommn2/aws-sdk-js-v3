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

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { ListWorkflowsRequest, ListWorkflowsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListWorkflowsCommand,
  serializeAws_restJson1ListWorkflowsCommand,
} from "../protocols/Aws_restJson1";

export interface ListWorkflowsCommandInput extends ListWorkflowsRequest {}
export interface ListWorkflowsCommandOutput extends ListWorkflowsResponse, __MetadataBearer {}

/**
 * <p>Query to list all workflows.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListWorkflowsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListWorkflowsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new ListWorkflowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkflowsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowsCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 */
export class ListWorkflowsCommand extends $Command<
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
  CustomerProfilesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListWorkflowsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWorkflowsCommandInput, ListWorkflowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "ListWorkflowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListWorkflowsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListWorkflowsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListWorkflowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListWorkflowsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWorkflowsCommandOutput> {
    return deserializeAws_restJson1ListWorkflowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}