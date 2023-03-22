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
  CreateSessionRequest,
  CreateSessionRequestFilterSensitiveLog,
  CreateSessionResponse,
  CreateSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateSessionCommand,
  serializeAws_restJson1CreateSessionCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 *
 * The input for {@link CreateSessionCommand}.
 */
export interface CreateSessionCommandInput extends CreateSessionRequest {}
/**
 * @public
 *
 * The output of {@link CreateSessionCommand}.
 */
export interface CreateSessionCommandOutput extends CreateSessionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a session. A session is a contextual container used for generating
 *       recommendations. Amazon Connect creates a new Wisdom session for each contact on which
 *       Wisdom is enabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, CreateSessionCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, CreateSessionCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const command = new CreateSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateSessionCommandInput - {@link CreateSessionCommandInput}
 * @returns {@link CreateSessionCommandOutput}
 * @see {@link CreateSessionCommandInput} for command's `input` shape.
 * @see {@link CreateSessionCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *       resource. For example, if you're using a <code>Create</code> API (such as
 *         <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the
 *       same name) is being created or mutated.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 *
 */
export class CreateSessionCommand extends $Command<
  CreateSessionCommandInput,
  CreateSessionCommandOutput,
  WisdomClientResolvedConfig
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
  constructor(readonly input: CreateSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WisdomClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSessionCommandInput, CreateSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateSessionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WisdomClient";
    const commandName = "CreateSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSessionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSessionResponseFilterSensitiveLog,
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
  private serialize(input: CreateSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSessionCommandOutput> {
    return deserializeAws_restJson1CreateSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
