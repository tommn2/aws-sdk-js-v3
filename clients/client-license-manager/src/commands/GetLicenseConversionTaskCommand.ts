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
  GetLicenseConversionTaskRequest,
  GetLicenseConversionTaskRequestFilterSensitiveLog,
  GetLicenseConversionTaskResponse,
  GetLicenseConversionTaskResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetLicenseConversionTaskCommand,
  serializeAws_json1_1GetLicenseConversionTaskCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetLicenseConversionTaskCommand}.
 */
export interface GetLicenseConversionTaskCommandInput extends GetLicenseConversionTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetLicenseConversionTaskCommand}.
 */
export interface GetLicenseConversionTaskCommandOutput extends GetLicenseConversionTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the specified license type conversion task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetLicenseConversionTaskCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetLicenseConversionTaskCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new GetLicenseConversionTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetLicenseConversionTaskCommandInput - {@link GetLicenseConversionTaskCommandInput}
 * @returns {@link GetLicenseConversionTaskCommandOutput}
 * @see {@link GetLicenseConversionTaskCommandInput} for command's `input` shape.
 * @see {@link GetLicenseConversionTaskCommandOutput} for command's `response` shape.
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
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 *
 */
export class GetLicenseConversionTaskCommand extends $Command<
  GetLicenseConversionTaskCommandInput,
  GetLicenseConversionTaskCommandOutput,
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
  constructor(readonly input: GetLicenseConversionTaskCommandInput) {
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
  ): Handler<GetLicenseConversionTaskCommandInput, GetLicenseConversionTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLicenseConversionTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "GetLicenseConversionTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLicenseConversionTaskRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetLicenseConversionTaskResponseFilterSensitiveLog,
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
  private serialize(input: GetLicenseConversionTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetLicenseConversionTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLicenseConversionTaskCommandOutput> {
    return deserializeAws_json1_1GetLicenseConversionTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
