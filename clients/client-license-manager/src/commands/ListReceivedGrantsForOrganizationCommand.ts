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

import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import {
  ListReceivedGrantsForOrganizationRequest,
  ListReceivedGrantsForOrganizationRequestFilterSensitiveLog,
  ListReceivedGrantsForOrganizationResponse,
  ListReceivedGrantsForOrganizationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListReceivedGrantsForOrganizationCommand,
  serializeAws_json1_1ListReceivedGrantsForOrganizationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListReceivedGrantsForOrganizationCommand}.
 */
export interface ListReceivedGrantsForOrganizationCommandInput extends ListReceivedGrantsForOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link ListReceivedGrantsForOrganizationCommand}.
 */
export interface ListReceivedGrantsForOrganizationCommandOutput
  extends ListReceivedGrantsForOrganizationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the grants received for all accounts in the organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListReceivedGrantsForOrganizationCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListReceivedGrantsForOrganizationCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListReceivedGrantsForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListReceivedGrantsForOrganizationCommandInput - {@link ListReceivedGrantsForOrganizationCommandInput}
 * @returns {@link ListReceivedGrantsForOrganizationCommandOutput}
 * @see {@link ListReceivedGrantsForOrganizationCommandInput} for command's `input` shape.
 * @see {@link ListReceivedGrantsForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 *
 */
export class ListReceivedGrantsForOrganizationCommand extends $Command<
  ListReceivedGrantsForOrganizationCommandInput,
  ListReceivedGrantsForOrganizationCommandOutput,
  LicenseManagerClientResolvedConfig
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
  constructor(readonly input: ListReceivedGrantsForOrganizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReceivedGrantsForOrganizationCommandInput, ListReceivedGrantsForOrganizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListReceivedGrantsForOrganizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "ListReceivedGrantsForOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReceivedGrantsForOrganizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListReceivedGrantsForOrganizationResponseFilterSensitiveLog,
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
    input: ListReceivedGrantsForOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListReceivedGrantsForOrganizationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListReceivedGrantsForOrganizationCommandOutput> {
    return deserializeAws_json1_1ListReceivedGrantsForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
