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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  CreateFieldLevelEncryptionConfigRequest,
  CreateFieldLevelEncryptionConfigRequestFilterSensitiveLog,
  CreateFieldLevelEncryptionConfigResult,
  CreateFieldLevelEncryptionConfigResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommand,
  serializeAws_restXmlCreateFieldLevelEncryptionConfigCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 *
 * The input for {@link CreateFieldLevelEncryptionConfigCommand}.
 */
export interface CreateFieldLevelEncryptionConfigCommandInput extends CreateFieldLevelEncryptionConfigRequest {}
/**
 * @public
 *
 * The output of {@link CreateFieldLevelEncryptionConfigCommand}.
 */
export interface CreateFieldLevelEncryptionConfigCommandOutput
  extends CreateFieldLevelEncryptionConfigResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Create a new field-level encryption configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateFieldLevelEncryptionConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateFieldLevelEncryptionConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateFieldLevelEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateFieldLevelEncryptionConfigCommandInput - {@link CreateFieldLevelEncryptionConfigCommandInput}
 * @returns {@link CreateFieldLevelEncryptionConfigCommandOutput}
 * @see {@link CreateFieldLevelEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link CreateFieldLevelEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link FieldLevelEncryptionConfigAlreadyExists} (client fault)
 *  <p>The specified configuration for field-level encryption already exists.</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't
 * 			match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchFieldLevelEncryptionProfile} (client fault)
 *  <p>The specified profile for field-level encryption doesn't exist.</p>
 *
 * @throws {@link QueryArgProfileEmpty} (client fault)
 *  <p>No profile specified for the field-level encryption query argument.</p>
 *
 * @throws {@link TooManyFieldLevelEncryptionConfigs} (client fault)
 *  <p>The maximum number of configurations for field-level encryption have been
 * 			created.</p>
 *
 * @throws {@link TooManyFieldLevelEncryptionContentTypeProfiles} (client fault)
 *  <p>The maximum number of content type profiles for field-level encryption have been
 * 			created.</p>
 *
 * @throws {@link TooManyFieldLevelEncryptionQueryArgProfiles} (client fault)
 *  <p>The maximum number of query arg profiles for field-level encryption have been
 * 			created.</p>
 *
 *
 */
export class CreateFieldLevelEncryptionConfigCommand extends $Command<
  CreateFieldLevelEncryptionConfigCommandInput,
  CreateFieldLevelEncryptionConfigCommandOutput,
  CloudFrontClientResolvedConfig
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
  constructor(readonly input: CreateFieldLevelEncryptionConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFieldLevelEncryptionConfigCommandInput, CreateFieldLevelEncryptionConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFieldLevelEncryptionConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateFieldLevelEncryptionConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFieldLevelEncryptionConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateFieldLevelEncryptionConfigResultFilterSensitiveLog,
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
    input: CreateFieldLevelEncryptionConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateFieldLevelEncryptionConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateFieldLevelEncryptionConfigCommandOutput> {
    return deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
