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

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import {
  UpdateProfileJobRequest,
  UpdateProfileJobRequestFilterSensitiveLog,
  UpdateProfileJobResponse,
  UpdateProfileJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateProfileJobCommand,
  serializeAws_restJson1UpdateProfileJobCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateProfileJobCommand}.
 */
export interface UpdateProfileJobCommandInput extends UpdateProfileJobRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProfileJobCommand}.
 */
export interface UpdateProfileJobCommandOutput extends UpdateProfileJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the definition of an existing profile job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, UpdateProfileJobCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, UpdateProfileJobCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new UpdateProfileJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateProfileJobCommandInput - {@link UpdateProfileJobCommandInput}
 * @returns {@link UpdateProfileJobCommandOutput}
 * @see {@link UpdateProfileJobCommandInput} for command's `input` shape.
 * @see {@link UpdateProfileJobCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the specified resource was denied.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 *
 */
export class UpdateProfileJobCommand extends $Command<
  UpdateProfileJobCommandInput,
  UpdateProfileJobCommandOutput,
  DataBrewClientResolvedConfig
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
  constructor(readonly input: UpdateProfileJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateProfileJobCommandInput, UpdateProfileJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateProfileJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "UpdateProfileJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateProfileJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateProfileJobResponseFilterSensitiveLog,
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
  private serialize(input: UpdateProfileJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateProfileJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateProfileJobCommandOutput> {
    return deserializeAws_restJson1UpdateProfileJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
