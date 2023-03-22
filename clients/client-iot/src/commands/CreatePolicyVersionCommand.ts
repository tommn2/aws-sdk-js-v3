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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  CreatePolicyVersionRequest,
  CreatePolicyVersionRequestFilterSensitiveLog,
  CreatePolicyVersionResponse,
  CreatePolicyVersionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreatePolicyVersionCommand,
  serializeAws_restJson1CreatePolicyVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreatePolicyVersionCommand}.
 */
export interface CreatePolicyVersionCommandInput extends CreatePolicyVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreatePolicyVersionCommand}.
 */
export interface CreatePolicyVersionCommandOutput extends CreatePolicyVersionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new version of the specified IoT policy. To update a policy, create a
 *          new policy version. A managed policy can have up to five versions. If the policy has five
 *          versions, you must use <a>DeletePolicyVersion</a> to delete an existing version
 *          before you create a new one.</p>
 *          <p>Optionally, you can set the new version as the policy's default version. The default
 *          version is the operative version (that is, the version that is in effect for the
 *          certificates to which the policy is attached).</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePolicyVersion</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreatePolicyVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreatePolicyVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreatePolicyVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreatePolicyVersionCommandInput - {@link CreatePolicyVersionCommandInput}
 * @returns {@link CreatePolicyVersionCommandOutput}
 * @see {@link CreatePolicyVersionCommandInput} for command's `input` shape.
 * @see {@link CreatePolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link MalformedPolicyException} (client fault)
 *  <p>The policy documentation is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link VersionsLimitExceededException} (client fault)
 *  <p>The number of policy versions exceeds the limit.</p>
 *
 *
 */
export class CreatePolicyVersionCommand extends $Command<
  CreatePolicyVersionCommandInput,
  CreatePolicyVersionCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: CreatePolicyVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePolicyVersionCommandInput, CreatePolicyVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePolicyVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreatePolicyVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePolicyVersionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreatePolicyVersionResponseFilterSensitiveLog,
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
  private serialize(input: CreatePolicyVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreatePolicyVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePolicyVersionCommandOutput> {
    return deserializeAws_restJson1CreatePolicyVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
