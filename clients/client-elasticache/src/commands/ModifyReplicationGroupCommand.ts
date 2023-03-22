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

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import {
  ModifyReplicationGroupMessage,
  ModifyReplicationGroupMessageFilterSensitiveLog,
  ModifyReplicationGroupResult,
  ModifyReplicationGroupResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryModifyReplicationGroupCommand,
  serializeAws_queryModifyReplicationGroupCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link ModifyReplicationGroupCommand}.
 */
export interface ModifyReplicationGroupCommandInput extends ModifyReplicationGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyReplicationGroupCommand}.
 */
export interface ModifyReplicationGroupCommandOutput extends ModifyReplicationGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the settings for a replication group.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html">Scaling for Amazon ElastiCache for Redis (cluster mode enabled)</a>
 *                     in the ElastiCache User Guide</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html">ModifyReplicationGroupShardConfiguration</a>
 *                     in the ElastiCache API Reference</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ModifyReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ModifyReplicationGroupCommandInput - {@link ModifyReplicationGroupCommandInput}
 * @returns {@link ModifyReplicationGroupCommandOutput}
 * @see {@link ModifyReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheClusterNotFoundFault} (client fault)
 *  <p>The requested cluster ID does not refer to an existing cluster.</p>
 *
 * @throws {@link CacheParameterGroupNotFoundFault} (client fault)
 *  <p>The requested cache parameter group name does not refer to an existing cache parameter group.</p>
 *
 * @throws {@link CacheSecurityGroupNotFoundFault} (client fault)
 *  <p>The requested cache security group name does not refer to an existing cache security group.</p>
 *
 * @throws {@link InsufficientCacheClusterCapacityFault} (client fault)
 *  <p>The requested cache node type is not available in the specified Availability Zone.
 *             For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ErrorMessages.html#ErrorMessages.INSUFFICIENT_CACHE_CLUSTER_CAPACITY">InsufficientCacheClusterCapacity</a> in the ElastiCache User Guide.</p>
 *
 * @throws {@link InvalidCacheClusterStateFault} (client fault)
 *  <p>The requested cluster is not in the <code>available</code> state.</p>
 *
 * @throws {@link InvalidCacheSecurityGroupStateFault} (client fault)
 *  <p>The current state of the cache security group does not allow deletion.</p>
 *
 * @throws {@link InvalidKMSKeyFault} (client fault)
 *  <p>The KMS key supplied is not valid.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidReplicationGroupStateFault} (client fault)
 *  <p>The requested replication group is not in the <code>available</code> state.</p>
 *
 * @throws {@link InvalidUserGroupStateFault} (client fault)
 *  <p>The user group is not in an active state.</p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p>The VPC network is in an invalid state.</p>
 *
 * @throws {@link NodeQuotaForClusterExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of cache nodes in a single cluster.</p>
 *
 * @throws {@link NodeQuotaForCustomerExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of cache nodes per customer.</p>
 *
 * @throws {@link ReplicationGroupNotFoundFault} (client fault)
 *  <p>The specified replication group does not exist.</p>
 *
 * @throws {@link UserGroupNotFoundFault} (client fault)
 *  <p>The user group was not found or does not exist</p>
 *
 *
 * @example ModifyReplicationGroup
 * ```javascript
 * //
 * const input = {
 *   "ApplyImmediately": true,
 *   "ReplicationGroupDescription": "Modified replication group",
 *   "ReplicationGroupId": "my-redis-rg",
 *   "SnapshotRetentionLimit": 30,
 *   "SnapshottingClusterId": "my-redis-rg-001"
 * };
 * const command = new ModifyReplicationGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ReplicationGroup": {
 *     "AutomaticFailover": "enabled",
 *     "Description": "Modified replication group",
 *     "MemberClusters": [
 *       "my-redis-rg-001",
 *       "my-redis-rg-002",
 *       "my-redis-rg-003"
 *     ],
 *     "NodeGroups": [
 *       {
 *         "NodeGroupId": "0001",
 *         "NodeGroupMembers": [
 *           {
 *             "CacheClusterId": "my-redis-rg-001",
 *             "CacheNodeId": "0001",
 *             "CurrentRole": "primary",
 *             "PreferredAvailabilityZone": "us-east-1b",
 *             "ReadEndpoint": {
 *               "Address": "my-redis-rg-001.abcdef.0001.use1.cache.amazonaws.com",
 *               "Port": 6379
 *             }
 *           },
 *           {
 *             "CacheClusterId": "my-redis-rg-002",
 *             "CacheNodeId": "0001",
 *             "CurrentRole": "replica",
 *             "PreferredAvailabilityZone": "us-east-1a",
 *             "ReadEndpoint": {
 *               "Address": "my-redis-rg-002.abcdef.0001.use1.cache.amazonaws.com",
 *               "Port": 6379
 *             }
 *           },
 *           {
 *             "CacheClusterId": "my-redis-rg-003",
 *             "CacheNodeId": "0001",
 *             "CurrentRole": "replica",
 *             "PreferredAvailabilityZone": "us-east-1c",
 *             "ReadEndpoint": {
 *               "Address": "my-redis-rg-003.abcdef.0001.use1.cache.amazonaws.com",
 *               "Port": 6379
 *             }
 *           }
 *         ],
 *         "PrimaryEndpoint": {
 *           "Address": "my-redis-rg.abcdef.ng.0001.use1.cache.amazonaws.com",
 *           "Port": 6379
 *         },
 *         "Status": "available"
 *       }
 *     ],
 *     "PendingModifiedValues": {},
 *     "ReplicationGroupId": "my-redis-rg",
 *     "SnapshottingClusterId": "my-redis-rg-002",
 *     "Status": "available"
 *   }
 * }
 * *\/
 * // example id: modifyreplicationgroup-1483039689581
 * ```
 *
 */
export class ModifyReplicationGroupCommand extends $Command<
  ModifyReplicationGroupCommandInput,
  ModifyReplicationGroupCommandOutput,
  ElastiCacheClientResolvedConfig
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
  constructor(readonly input: ModifyReplicationGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyReplicationGroupCommandInput, ModifyReplicationGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyReplicationGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "ModifyReplicationGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyReplicationGroupMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyReplicationGroupResultFilterSensitiveLog,
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
  private serialize(input: ModifyReplicationGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyReplicationGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyReplicationGroupCommandOutput> {
    return deserializeAws_queryModifyReplicationGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
