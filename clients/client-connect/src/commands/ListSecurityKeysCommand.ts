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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  ListSecurityKeysRequest,
  ListSecurityKeysRequestFilterSensitiveLog,
  ListSecurityKeysResponse,
  ListSecurityKeysResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListSecurityKeysCommand,
  serializeAws_restJson1ListSecurityKeysCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListSecurityKeysCommand}.
 */
export interface ListSecurityKeysCommandInput extends ListSecurityKeysRequest {}
/**
 * @public
 *
 * The output of {@link ListSecurityKeysCommand}.
 */
export interface ListSecurityKeysCommandOutput extends ListSecurityKeysResponse, __MetadataBearer {}

/**
 * @public
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of all security keys associated with the instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListSecurityKeysCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListSecurityKeysCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListSecurityKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListSecurityKeysCommandInput - {@link ListSecurityKeysCommandInput}
 * @returns {@link ListSecurityKeysCommandOutput}
 * @see {@link ListSecurityKeysCommandInput} for command's `input` shape.
 * @see {@link ListSecurityKeysCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 *
 */
export class ListSecurityKeysCommand extends $Command<
  ListSecurityKeysCommandInput,
  ListSecurityKeysCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: ListSecurityKeysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSecurityKeysCommandInput, ListSecurityKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSecurityKeysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListSecurityKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSecurityKeysRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSecurityKeysResponseFilterSensitiveLog,
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
  private serialize(input: ListSecurityKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSecurityKeysCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSecurityKeysCommandOutput> {
    return deserializeAws_restJson1ListSecurityKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
