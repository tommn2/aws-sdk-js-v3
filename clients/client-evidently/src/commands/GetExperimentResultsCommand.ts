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

import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import {
  GetExperimentResultsRequest,
  GetExperimentResultsRequestFilterSensitiveLog,
  GetExperimentResultsResponse,
  GetExperimentResultsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetExperimentResultsCommand,
  serializeAws_restJson1GetExperimentResultsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetExperimentResultsCommand}.
 */
export interface GetExperimentResultsCommandInput extends GetExperimentResultsRequest {}
/**
 * @public
 *
 * The output of {@link GetExperimentResultsCommand}.
 */
export interface GetExperimentResultsCommandOutput extends GetExperimentResultsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the results of a running or completed experiment. No results are available until
 *        there have been 100 events for each variation and at least 10 minutes have passed since the start of the experiment.
 *        To increase the statistical power, Evidently performs an additional offline p-value analysis at the end of the experiment.
 *        Offline p-value analysis can detect statistical significance in some cases where the anytime p-values used during
 *        the experiment do not find statistical significance.</p>
 *          <p>Experiment
 *        results are available up to 63 days after the start of the experiment. They are not available after that because
 *        of CloudWatch data retention policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, GetExperimentResultsCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, GetExperimentResultsCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const command = new GetExperimentResultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetExperimentResultsCommandInput - {@link GetExperimentResultsCommandInput}
 * @returns {@link GetExperimentResultsCommandOutput}
 * @see {@link GetExperimentResultsCommandInput} for command's `input` shape.
 * @see {@link GetExperimentResultsCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 *
 */
export class GetExperimentResultsCommand extends $Command<
  GetExperimentResultsCommandInput,
  GetExperimentResultsCommandOutput,
  EvidentlyClientResolvedConfig
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
  constructor(readonly input: GetExperimentResultsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EvidentlyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetExperimentResultsCommandInput, GetExperimentResultsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetExperimentResultsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "GetExperimentResultsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetExperimentResultsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetExperimentResultsResponseFilterSensitiveLog,
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
  private serialize(input: GetExperimentResultsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetExperimentResultsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExperimentResultsCommandOutput> {
    return deserializeAws_restJson1GetExperimentResultsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
