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

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import {
  ListPackageVersionsRequest,
  ListPackageVersionsRequestFilterSensitiveLog,
  ListPackageVersionsResult,
  ListPackageVersionsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListPackageVersionsCommand,
  serializeAws_restJson1ListPackageVersionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListPackageVersionsCommand}.
 */
export interface ListPackageVersionsCommandInput extends ListPackageVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPackageVersionsCommand}.
 */
export interface ListPackageVersionsCommandOutput extends ListPackageVersionsResult, __MetadataBearer {}

/**
 * @public
 * <p>
 *         Returns a list of
 *         <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionSummary.html">PackageVersionSummary</a>
 *         objects for package versions in a repository that match the request parameters. Package versions of all statuses will be returned by default when calling <code>list-package-versions</code> with no  <code>--status</code> parameter.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListPackageVersionsCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListPackageVersionsCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new ListPackageVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListPackageVersionsCommandInput - {@link ListPackageVersionsCommandInput}
 * @returns {@link ListPackageVersionsCommandOutput}
 * @see {@link ListPackageVersionsCommandInput} for command's `input` shape.
 * @see {@link ListPackageVersionsCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *         The operation did not succeed because of an unauthorized access attempt.
 *       </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The operation did not succeed because of an error that occurred inside CodeArtifact. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *       The operation did not succeed because the resource requested is not found in the service.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *       The operation did not succeed because too many requests are sent to the service.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *       The operation did not succeed because a parameter in the request was sent with an invalid value.
 *     </p>
 *
 *
 */
export class ListPackageVersionsCommand extends $Command<
  ListPackageVersionsCommandInput,
  ListPackageVersionsCommandOutput,
  CodeartifactClientResolvedConfig
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
  constructor(readonly input: ListPackageVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPackageVersionsCommandInput, ListPackageVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPackageVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "ListPackageVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPackageVersionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPackageVersionsResultFilterSensitiveLog,
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
  private serialize(input: ListPackageVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPackageVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPackageVersionsCommandOutput> {
    return deserializeAws_restJson1ListPackageVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
