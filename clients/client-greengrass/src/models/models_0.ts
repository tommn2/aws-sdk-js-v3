// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { GreengrassServiceException as __BaseException } from "./GreengrassServiceException";

/**
 * @public
 * Information about a Greengrass core's connectivity.
 */
export interface ConnectivityInfo {
  /**
   * The endpoint for the Greengrass core. Can be an IP address or DNS.
   */
  HostAddress?: string;

  /**
   * The ID of the connectivity information.
   */
  Id?: string;

  /**
   * Metadata for this endpoint.
   */
  Metadata?: string;

  /**
   * The port of the Greengrass core. Usually 8883.
   */
  PortNumber?: number;
}

/**
 * @public
 * Information about a connector. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
 */
export interface Connector {
  /**
   * The ARN of the connector.
   */
  ConnectorArn: string | undefined;

  /**
   * A descriptive or arbitrary ID for the connector. This value must be unique within the connector definition version. Max length is 128 characters with pattern [a-zA-Z0-9:_-]+.
   */
  Id: string | undefined;

  /**
   * The parameters or configuration that the connector uses.
   */
  Parameters?: Record<string, string>;
}

/**
 * @public
 * Information about a core.
 */
export interface Core {
  /**
   * The ARN of the certificate associated with the core.
   */
  CertificateArn: string | undefined;

  /**
   * A descriptive or arbitrary ID for the core. This value must be unique within the core definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string | undefined;

  /**
   * If true, the core's local shadow is automatically synced with the cloud.
   */
  SyncShadow?: boolean;

  /**
   * The ARN of the thing which is the core.
   */
  ThingArn: string | undefined;
}

/**
 * @public
 * Information about a definition.
 */
export interface DefinitionInformation {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * Information about a device.
 */
export interface Device {
  /**
   * The ARN of the certificate associated with the device.
   */
  CertificateArn: string | undefined;

  /**
   * A descriptive or arbitrary ID for the device. This value must be unique within the device definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string | undefined;

  /**
   * If true, the device's local shadow will be automatically synced with the cloud.
   */
  SyncShadow?: boolean;

  /**
   * The thing ARN of the device.
   */
  ThingArn: string | undefined;
}

/**
 * @public
 */
export enum EncodingType {
  binary = "binary",
  json = "json",
}

/**
 * @public
 */
export enum FunctionIsolationMode {
  GreengrassContainer = "GreengrassContainer",
  NoContainer = "NoContainer",
}

/**
 * @public
 * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
 */
export interface FunctionRunAsConfig {
  /**
   * The group ID whose permissions are used to run a Lambda function.
   */
  Gid?: number;

  /**
   * The user ID whose permissions are used to run a Lambda function.
   */
  Uid?: number;
}

/**
 * @public
 * Configuration information that specifies how a Lambda function runs.
 */
export interface FunctionExecutionConfig {
  /**
   * Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group.
   */
  IsolationMode?: FunctionIsolationMode | string;

  /**
   * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
   */
  RunAs?: FunctionRunAsConfig;
}

/**
 * @public
 */
export enum Permission {
  ro = "ro",
  rw = "rw",
}

/**
 * @public
 * A policy used by the function to access a resource.
 */
export interface ResourceAccessPolicy {
  /**
   * The permissions that the Lambda function has to the resource. Can be one of ''rw'' (read/write) or ''ro'' (read-only).
   */
  Permission?: Permission | string;

  /**
   * The ID of the resource. (This ID is assigned to the resource when you create the resource definiton.)
   */
  ResourceId: string | undefined;
}

/**
 * @public
 * The environment configuration of the function.
 */
export interface FunctionConfigurationEnvironment {
  /**
   * If true, the Lambda function is allowed to access the host's /sys folder. Use this when the Lambda function needs to read device information from /sys. This setting applies only when you run the Lambda function in a Greengrass container.
   */
  AccessSysfs?: boolean;

  /**
   * Configuration related to executing the Lambda function
   */
  Execution?: FunctionExecutionConfig;

  /**
   * A list of the resources, with their permissions, to which the Lambda function will be granted access. A Lambda function can have at most 10 resources. ResourceAccessPolicies apply only when you run the Lambda function in a Greengrass container.
   */
  ResourceAccessPolicies?: ResourceAccessPolicy[];

  /**
   * Environment variables for the Lambda function's configuration.
   */
  Variables?: Record<string, string>;
}

/**
 * @public
 * The configuration of the Lambda function.
 */
export interface FunctionConfiguration {
  /**
   * The expected encoding type of the input payload for the function. The default is ''json''.
   */
  EncodingType?: EncodingType | string;

  /**
   * The environment configuration of the function.
   */
  Environment?: FunctionConfigurationEnvironment;

  /**
   * The execution arguments.
   */
  ExecArgs?: string;

  /**
   * The name of the function executable.
   */
  Executable?: string;

  /**
   * The memory size, in KB, which the function requires. This setting is not applicable and should be cleared when you run the Lambda function without containerization.
   */
  MemorySize?: number;

  /**
   * True if the function is pinned. Pinned means the function is long-lived and starts when the core starts.
   */
  Pinned?: boolean;

  /**
   * The allowed function execution time, after which Lambda should terminate the function. This timeout still applies to pinned Lambda functions for each request.
   */
  Timeout?: number;

  /**
   * The Lambda runtime supported by Greengrass which is to be used instead of the one specified in the Lambda function.
   */
  FunctionRuntimeOverride?: string;
}

/**
 * @public
 * Information about a Lambda function.
 */
export interface Function {
  /**
   * The ARN of the Lambda function.
   */
  FunctionArn?: string;

  /**
   * The configuration of the Lambda function.
   */
  FunctionConfiguration?: FunctionConfiguration;

  /**
   * A descriptive or arbitrary ID for the function. This value must be unique within the function definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string | undefined;
}

/**
 * @public
 * Information about a certificate authority for a group.
 */
export interface GroupCertificateAuthorityProperties {
  /**
   * The ARN of the certificate authority for the group.
   */
  GroupCertificateAuthorityArn?: string;

  /**
   * The ID of the certificate authority for the group.
   */
  GroupCertificateAuthorityId?: string;
}

/**
 * @public
 * Information about a group.
 */
export interface GroupInformation {
  /**
   * The ARN of the group.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the group was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the group.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the group was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the group.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the group.
   */
  LatestVersionArn?: string;

  /**
   * The name of the group.
   */
  Name?: string;
}

/**
 * @public
 */
export enum LoggerComponent {
  GreengrassSystem = "GreengrassSystem",
  Lambda = "Lambda",
}

/**
 * @public
 */
export enum LoggerLevel {
  DEBUG = "DEBUG",
  ERROR = "ERROR",
  FATAL = "FATAL",
  INFO = "INFO",
  WARN = "WARN",
}

/**
 * @public
 */
export enum LoggerType {
  AWSCloudWatch = "AWSCloudWatch",
  FileSystem = "FileSystem",
}

/**
 * @public
 * Information about a logger
 */
export interface Logger {
  /**
   * The component that will be subject to logging.
   */
  Component: LoggerComponent | string | undefined;

  /**
   * A descriptive or arbitrary ID for the logger. This value must be unique within the logger definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string | undefined;

  /**
   * The level of the logs.
   */
  Level: LoggerLevel | string | undefined;

  /**
   * The amount of file space, in KB, to use if the local file system is used for logging purposes.
   */
  Space?: number;

  /**
   * The type of log output which will be used.
   */
  Type: LoggerType | string | undefined;
}

/**
 * @public
 * Group owner related settings for local resources.
 */
export interface GroupOwnerSetting {
  /**
   * If true, AWS IoT Greengrass automatically adds the specified Linux OS group owner of the resource to the Lambda process privileges. Thus the Lambda process will have the file access permissions of the added Linux group.
   */
  AutoAddGroupOwner?: boolean;

  /**
   * The name of the Linux OS group whose privileges will be added to the Lambda process. This field is optional.
   */
  GroupOwner?: string;
}

/**
 * @public
 * Attributes that define a local device resource.
 */
export interface LocalDeviceResourceData {
  /**
   * Group/owner related settings for local resources.
   */
  GroupOwnerSetting?: GroupOwnerSetting;

  /**
   * The local absolute path of the device resource. The source path for a device resource can refer only to a character device or block device under ''/dev''.
   */
  SourcePath?: string;
}

/**
 * @public
 * Attributes that define a local volume resource.
 */
export interface LocalVolumeResourceData {
  /**
   * The absolute local path of the resource inside the Lambda environment.
   */
  DestinationPath?: string;

  /**
   * Allows you to configure additional group privileges for the Lambda process. This field is optional.
   */
  GroupOwnerSetting?: GroupOwnerSetting;

  /**
   * The local absolute path of the volume resource on the host. The source path for a volume resource type cannot start with ''/sys''.
   */
  SourcePath?: string;
}

/**
 * @public
 * The owner setting for downloaded machine learning resources.
 */
export interface ResourceDownloadOwnerSetting {
  /**
   * The group owner of the resource. This is the name of an existing Linux OS group on the system or a GID. The group's permissions are added to the Lambda process.
   */
  GroupOwner: string | undefined;

  /**
   * The permissions that the group owner has to the resource. Valid values are ''rw'' (read/write) or ''ro'' (read-only).
   */
  GroupPermission: Permission | string | undefined;
}

/**
 * @public
 * Attributes that define an Amazon S3 machine learning resource.
 */
export interface S3MachineLearningModelResourceData {
  /**
   * The absolute local path of the resource inside the Lambda environment.
   */
  DestinationPath?: string;

  /**
   * The owner setting for downloaded machine learning resources.
   */
  OwnerSetting?: ResourceDownloadOwnerSetting;

  /**
   * The URI of the source model in an S3 bucket. The model package must be in tar.gz or .zip format.
   */
  S3Uri?: string;
}

/**
 * @public
 * Attributes that define an Amazon SageMaker machine learning resource.
 */
export interface SageMakerMachineLearningModelResourceData {
  /**
   * The absolute local path of the resource inside the Lambda environment.
   */
  DestinationPath?: string;

  /**
   * The owner setting for downloaded machine learning resources.
   */
  OwnerSetting?: ResourceDownloadOwnerSetting;

  /**
   * The ARN of the Amazon SageMaker training job that represents the source model.
   */
  SageMakerJobArn?: string;
}

/**
 * @public
 * Attributes that define a secret resource, which references a secret from AWS Secrets Manager. AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions.
 */
export interface SecretsManagerSecretResourceData {
  /**
   * The ARN of the Secrets Manager secret to make available on the core. The value of the secret's latest version (represented by the ''AWSCURRENT'' staging label) is included by default.
   */
  ARN?: string;

  /**
   * Optional. The staging labels whose values you want to make available on the core, in addition to ''AWSCURRENT''.
   */
  AdditionalStagingLabelsToDownload?: string[];
}

/**
 * @public
 * A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''.
 */
export interface ResourceDataContainer {
  /**
   * Attributes that define the local device resource.
   */
  LocalDeviceResourceData?: LocalDeviceResourceData;

  /**
   * Attributes that define the local volume resource.
   */
  LocalVolumeResourceData?: LocalVolumeResourceData;

  /**
   * Attributes that define an Amazon S3 machine learning resource.
   */
  S3MachineLearningModelResourceData?: S3MachineLearningModelResourceData;

  /**
   * Attributes that define an Amazon SageMaker machine learning resource.
   */
  SageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData;

  /**
   * Attributes that define a secret resource, which references a secret from AWS Secrets Manager.
   */
  SecretsManagerSecretResourceData?: SecretsManagerSecretResourceData;
}

/**
 * @public
 * Information about a resource.
 */
export interface Resource {
  /**
   * The resource ID, used to refer to a resource in the Lambda function configuration. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''. This must be unique within a Greengrass group.
   */
  Id: string | undefined;

  /**
   * The descriptive resource name, which is displayed on the AWS IoT Greengrass console. Max length 128 characters with pattern ''[a-zA-Z0-9:_-]+''. This must be unique within a Greengrass group.
   */
  Name: string | undefined;

  /**
   * A container of data for all resource types.
   */
  ResourceDataContainer: ResourceDataContainer | undefined;
}

/**
 * @public
 * Information about a subscription.
 */
export interface Subscription {
  /**
   * A descriptive or arbitrary ID for the subscription. This value must be unique within the subscription definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string | undefined;

  /**
   * The source of the subscription. Can be a thing ARN, a Lambda function ARN, a connector ARN, 'cloud' (which represents the AWS IoT cloud), or 'GGShadowService'.
   */
  Source: string | undefined;

  /**
   * The MQTT topic used to route the message.
   */
  Subject: string | undefined;

  /**
   * Where the message is sent to. Can be a thing ARN, a Lambda function ARN, a connector ARN, 'cloud' (which represents the AWS IoT cloud), or 'GGShadowService'.
   */
  Target: string | undefined;
}

/**
 * @public
 * Information about a version.
 */
export interface VersionInformation {
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface AssociateRoleToGroupRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The ARN of the role you wish to associate with this group. The existence of the role is not validated.
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateRoleToGroupResponse {
  /**
   * The time, in milliseconds since the epoch, when the role ARN was associated with the group.
   */
  AssociatedAt?: string;
}

/**
 * @public
 * Details about the error.
 */
export interface ErrorDetail {
  /**
   * A detailed error code.
   */
  DetailedErrorCode?: string;

  /**
   * A detailed error message.
   */
  DetailedErrorMessage?: string;
}

/**
 * @public
 * General error information.
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * Details about the error.
   */
  ErrorDetails?: ErrorDetail[];

  /**
   * A message containing information about the error.
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.ErrorDetails = opts.ErrorDetails;
    this.Message = opts.Message;
  }
}

/**
 * @public
 * General error information.
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * Details about the error.
   */
  ErrorDetails?: ErrorDetail[];

  /**
   * A message containing information about the error.
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.ErrorDetails = opts.ErrorDetails;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface AssociateServiceRoleToAccountRequest {
  /**
   * The ARN of the service role you wish to associate with your account.
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateServiceRoleToAccountResponse {
  /**
   * The time when the service role was associated with the account.
   */
  AssociatedAt?: string;
}

/**
 * @public
 * Information about a bulk deployment. You cannot start a new bulk deployment while another one is still running or in a non-terminal state.
 */
export interface BulkDeployment {
  /**
   * The ARN of the bulk deployment.
   */
  BulkDeploymentArn?: string;

  /**
   * The ID of the bulk deployment.
   */
  BulkDeploymentId?: string;

  /**
   * The time, in ISO format, when the deployment was created.
   */
  CreatedAt?: string;
}

/**
 * @public
 * Relevant metrics on input records processed during bulk deployment.
 */
export interface BulkDeploymentMetrics {
  /**
   * The total number of records that returned a non-retryable error. For example, this can occur if a group record from the input file uses an invalid format or specifies a nonexistent group version, or if the execution role doesn't grant permission to deploy a group or group version.
   */
  InvalidInputRecords?: number;

  /**
   * The total number of group records from the input file that have been processed so far, or attempted.
   */
  RecordsProcessed?: number;

  /**
   * The total number of deployment attempts that returned a retryable error. For example, a retry is triggered if the attempt to deploy a group returns a throttling error. ''StartBulkDeployment'' retries a group deployment up to five times.
   */
  RetryAttempts?: number;
}

/**
 * @public
 */
export enum DeploymentType {
  ForceResetDeployment = "ForceResetDeployment",
  NewDeployment = "NewDeployment",
  Redeployment = "Redeployment",
  ResetDeployment = "ResetDeployment",
}

/**
 * @public
 * Information about an individual group deployment in a bulk deployment operation.
 */
export interface BulkDeploymentResult {
  /**
   * The time, in ISO format, when the deployment was created.
   */
  CreatedAt?: string;

  /**
   * The ARN of the group deployment.
   */
  DeploymentArn?: string;

  /**
   * The ID of the group deployment.
   */
  DeploymentId?: string;

  /**
   * The current status of the group deployment: ''InProgress'', ''Building'', ''Success'', or ''Failure''.
   */
  DeploymentStatus?: string;

  /**
   * The type of the deployment.
   */
  DeploymentType?: DeploymentType | string;

  /**
   * Details about the error.
   */
  ErrorDetails?: ErrorDetail[];

  /**
   * The error message for a failed deployment
   */
  ErrorMessage?: string;

  /**
   * The ARN of the Greengrass group.
   */
  GroupArn?: string;
}

/**
 * @public
 */
export enum BulkDeploymentStatus {
  Completed = "Completed",
  Failed = "Failed",
  Initializing = "Initializing",
  Running = "Running",
  Stopped = "Stopped",
  Stopping = "Stopping",
}

/**
 * @public
 */
export enum ConfigurationSyncStatus {
  InSync = "InSync",
  OutOfSync = "OutOfSync",
}

/**
 * @public
 * Information about the connector definition version, which is a container for connectors.
 */
export interface ConnectorDefinitionVersion {
  /**
   * A list of references to connectors in this version, with their corresponding configuration settings.
   */
  Connectors?: Connector[];
}

/**
 * @public
 * Information about a core definition version.
 */
export interface CoreDefinitionVersion {
  /**
   * A list of cores in the core definition version.
   */
  Cores?: Core[];
}

/**
 * @public
 */
export interface CreateConnectorDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the connector definition.
   */
  InitialVersion?: ConnectorDefinitionVersion;

  /**
   * The name of the connector definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateConnectorDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 */
export interface CreateConnectorDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;

  /**
   * A list of references to connectors in this version, with their corresponding configuration settings.
   */
  Connectors?: Connector[];
}

/**
 * @public
 */
export interface CreateConnectorDefinitionVersionResponse {
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

/**
 * @public
 * Information needed to create a core definition.
 */
export interface CreateCoreDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the core definition.
   */
  InitialVersion?: CoreDefinitionVersion;

  /**
   * The name of the core definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateCoreDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 */
export interface CreateCoreDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;

  /**
   * A list of cores in the core definition version.
   */
  Cores?: Core[];
}

/**
 * @public
 */
export interface CreateCoreDefinitionVersionResponse {
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface CreateDeploymentRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the deployment if you wish to redeploy a previous deployment.
   */
  DeploymentId?: string;

  /**
   * The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.
   */
  DeploymentType: DeploymentType | string | undefined;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The ID of the group version to be deployed.
   */
  GroupVersionId?: string;
}

/**
 * @public
 */
export interface CreateDeploymentResponse {
  /**
   * The ARN of the deployment.
   */
  DeploymentArn?: string;

  /**
   * The ID of the deployment.
   */
  DeploymentId?: string;
}

/**
 * @public
 * Information about a device definition version.
 */
export interface DeviceDefinitionVersion {
  /**
   * A list of devices in the definition version.
   */
  Devices?: Device[];
}

/**
 * @public
 */
export interface CreateDeviceDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the device definition.
   */
  InitialVersion?: DeviceDefinitionVersion;

  /**
   * The name of the device definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateDeviceDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 */
export interface CreateDeviceDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;

  /**
   * A list of devices in the definition version.
   */
  Devices?: Device[];
}

/**
 * @public
 */
export interface CreateDeviceDefinitionVersionResponse {
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

/**
 * @public
 * Configuration information that specifies how a Lambda function runs.
 */
export interface FunctionDefaultExecutionConfig {
  /**
   * Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group.
   */
  IsolationMode?: FunctionIsolationMode | string;

  /**
   * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
   */
  RunAs?: FunctionRunAsConfig;
}

/**
 * @public
 * The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
 */
export interface FunctionDefaultConfig {
  /**
   * Configuration information that specifies how a Lambda function runs.
   */
  Execution?: FunctionDefaultExecutionConfig;
}

/**
 * @public
 * Information about a function definition version.
 */
export interface FunctionDefinitionVersion {
  /**
   * The default configuration that applies to all Lambda functions in this function definition version. Individual Lambda functions can override these settings.
   */
  DefaultConfig?: FunctionDefaultConfig;

  /**
   * A list of Lambda functions in this function definition version.
   */
  Functions?: Function[];
}

/**
 * @public
 */
export interface CreateFunctionDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the function definition.
   */
  InitialVersion?: FunctionDefinitionVersion;

  /**
   * The name of the function definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateFunctionDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 * Information needed to create a function definition version.
 */
export interface CreateFunctionDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The default configuration that applies to all Lambda functions in this function definition version. Individual Lambda functions can override these settings.
   */
  DefaultConfig?: FunctionDefaultConfig;

  /**
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;

  /**
   * A list of Lambda functions in this function definition version.
   */
  Functions?: Function[];
}

/**
 * @public
 */
export interface CreateFunctionDefinitionVersionResponse {
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

/**
 * @public
 * Information about a group version.
 */
export interface GroupVersion {
  /**
   * The ARN of the connector definition version for this group.
   */
  ConnectorDefinitionVersionArn?: string;

  /**
   * The ARN of the core definition version for this group.
   */
  CoreDefinitionVersionArn?: string;

  /**
   * The ARN of the device definition version for this group.
   */
  DeviceDefinitionVersionArn?: string;

  /**
   * The ARN of the function definition version for this group.
   */
  FunctionDefinitionVersionArn?: string;

  /**
   * The ARN of the logger definition version for this group.
   */
  LoggerDefinitionVersionArn?: string;

  /**
   * The ARN of the resource definition version for this group.
   */
  ResourceDefinitionVersionArn?: string;

  /**
   * The ARN of the subscription definition version for this group.
   */
  SubscriptionDefinitionVersionArn?: string;
}

/**
 * @public
 */
export interface CreateGroupRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the group.
   */
  InitialVersion?: GroupVersion;

  /**
   * The name of the group.
   */
  Name: string | undefined;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateGroupResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 */
export interface CreateGroupCertificateAuthorityRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupCertificateAuthorityResponse {
  /**
   * The ARN of the group certificate authority.
   */
  GroupCertificateAuthorityArn?: string;
}

/**
 * @public
 */
export interface CreateGroupVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ARN of the connector definition version for this group.
   */
  ConnectorDefinitionVersionArn?: string;

  /**
   * The ARN of the core definition version for this group.
   */
  CoreDefinitionVersionArn?: string;

  /**
   * The ARN of the device definition version for this group.
   */
  DeviceDefinitionVersionArn?: string;

  /**
   * The ARN of the function definition version for this group.
   */
  FunctionDefinitionVersionArn?: string;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The ARN of the logger definition version for this group.
   */
  LoggerDefinitionVersionArn?: string;

  /**
   * The ARN of the resource definition version for this group.
   */
  ResourceDefinitionVersionArn?: string;

  /**
   * The ARN of the subscription definition version for this group.
   */
  SubscriptionDefinitionVersionArn?: string;
}

/**
 * @public
 */
export interface CreateGroupVersionResponse {
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

/**
 * @public
 * Information about a logger definition version.
 */
export interface LoggerDefinitionVersion {
  /**
   * A list of loggers.
   */
  Loggers?: Logger[];
}

/**
 * @public
 */
export interface CreateLoggerDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the logger definition.
   */
  InitialVersion?: LoggerDefinitionVersion;

  /**
   * The name of the logger definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateLoggerDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 */
export interface CreateLoggerDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;

  /**
   * A list of loggers.
   */
  Loggers?: Logger[];
}

/**
 * @public
 */
export interface CreateLoggerDefinitionVersionResponse {
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

/**
 * @public
 * Information about a resource definition version.
 */
export interface ResourceDefinitionVersion {
  /**
   * A list of resources.
   */
  Resources?: Resource[];
}

/**
 * @public
 */
export interface CreateResourceDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the resource definition.
   */
  InitialVersion?: ResourceDefinitionVersion;

  /**
   * The name of the resource definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateResourceDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 */
export interface CreateResourceDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;

  /**
   * A list of resources.
   */
  Resources?: Resource[];
}

/**
 * @public
 */
export interface CreateResourceDefinitionVersionResponse {
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

/**
 * @public
 */
export enum SoftwareToUpdate {
  core = "core",
  ota_agent = "ota_agent",
}

/**
 * @public
 */
export enum UpdateAgentLogLevel {
  DEBUG = "DEBUG",
  ERROR = "ERROR",
  FATAL = "FATAL",
  INFO = "INFO",
  NONE = "NONE",
  TRACE = "TRACE",
  VERBOSE = "VERBOSE",
  WARN = "WARN",
}

/**
 * @public
 */
export enum UpdateTargetsArchitecture {
  aarch64 = "aarch64",
  armv6l = "armv6l",
  armv7l = "armv7l",
  x86_64 = "x86_64",
}

/**
 * @public
 */
export enum UpdateTargetsOperatingSystem {
  amazon_linux = "amazon_linux",
  openwrt = "openwrt",
  raspbian = "raspbian",
  ubuntu = "ubuntu",
}

/**
 * @public
 */
export interface CreateSoftwareUpdateJobRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.
   */
  S3UrlSignerRole: string | undefined;

  /**
   * The piece of software on the Greengrass core that will be updated.
   */
  SoftwareToUpdate: SoftwareToUpdate | string | undefined;

  /**
   * The minimum level of log statements that should be logged by the OTA Agent during an update.
   */
  UpdateAgentLogLevel?: UpdateAgentLogLevel | string;

  /**
   * The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.
   */
  UpdateTargets: string[] | undefined;

  /**
   * The architecture of the cores which are the targets of an update.
   */
  UpdateTargetsArchitecture: UpdateTargetsArchitecture | string | undefined;

  /**
   * The operating system of the cores which are the targets of an update.
   */
  UpdateTargetsOperatingSystem: UpdateTargetsOperatingSystem | string | undefined;
}

/**
 * @public
 */
export interface CreateSoftwareUpdateJobResponse {
  /**
   * The IoT Job ARN corresponding to this update.
   */
  IotJobArn?: string;

  /**
   * The IoT Job Id corresponding to this update.
   */
  IotJobId?: string;

  /**
   * The software version installed on the device or devices after the update.
   */
  PlatformSoftwareVersion?: string;
}

/**
 * @public
 * Information about a subscription definition version.
 */
export interface SubscriptionDefinitionVersion {
  /**
   * A list of subscriptions.
   */
  Subscriptions?: Subscription[];
}

/**
 * @public
 */
export interface CreateSubscriptionDefinitionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * Information about the initial version of the subscription definition.
   */
  InitialVersion?: SubscriptionDefinitionVersion;

  /**
   * The name of the subscription definition.
   */
  Name?: string;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSubscriptionDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 */
export interface CreateSubscriptionDefinitionVersionRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;

  /**
   * A list of subscriptions.
   */
  Subscriptions?: Subscription[];
}

/**
 * @public
 */
export interface CreateSubscriptionDefinitionVersionResponse {
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the parent definition that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface DeleteConnectorDefinitionRequest {
  /**
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorDefinitionResponse {}

/**
 * @public
 */
export interface DeleteCoreDefinitionRequest {
  /**
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCoreDefinitionResponse {}

/**
 * @public
 */
export interface DeleteDeviceDefinitionRequest {
  /**
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeviceDefinitionResponse {}

/**
 * @public
 */
export interface DeleteFunctionDefinitionRequest {
  /**
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFunctionDefinitionResponse {}

/**
 * @public
 */
export interface DeleteGroupRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupResponse {}

/**
 * @public
 */
export interface DeleteLoggerDefinitionRequest {
  /**
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLoggerDefinitionResponse {}

/**
 * @public
 */
export interface DeleteResourceDefinitionRequest {
  /**
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceDefinitionResponse {}

/**
 * @public
 */
export interface DeleteSubscriptionDefinitionRequest {
  /**
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubscriptionDefinitionResponse {}

/**
 * @public
 * Information about a deployment.
 */
export interface Deployment {
  /**
   * The time, in milliseconds since the epoch, when the deployment was created.
   */
  CreatedAt?: string;

  /**
   * The ARN of the deployment.
   */
  DeploymentArn?: string;

  /**
   * The ID of the deployment.
   */
  DeploymentId?: string;

  /**
   * The type of the deployment.
   */
  DeploymentType?: DeploymentType | string;

  /**
   * The ARN of the group for this deployment.
   */
  GroupArn?: string;
}

/**
 * @public
 */
export interface DisassociateRoleFromGroupRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateRoleFromGroupResponse {
  /**
   * The time, in milliseconds since the epoch, when the role was disassociated from the group.
   */
  DisassociatedAt?: string;
}

/**
 * @public
 */
export interface DisassociateServiceRoleFromAccountRequest {}

/**
 * @public
 */
export interface DisassociateServiceRoleFromAccountResponse {
  /**
   * The time when the service role was disassociated from the account.
   */
  DisassociatedAt?: string;
}

/**
 * @public
 */
export interface GetAssociatedRoleRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface GetAssociatedRoleResponse {
  /**
   * The time when the role was associated with the group.
   */
  AssociatedAt?: string;

  /**
   * The ARN of the role that is associated with the group.
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface GetBulkDeploymentStatusRequest {
  /**
   * The ID of the bulk deployment.
   */
  BulkDeploymentId: string | undefined;
}

/**
 * @public
 */
export interface GetBulkDeploymentStatusResponse {
  /**
   * Relevant metrics on input records processed during bulk deployment.
   */
  BulkDeploymentMetrics?: BulkDeploymentMetrics;

  /**
   * The status of the bulk deployment.
   */
  BulkDeploymentStatus?: BulkDeploymentStatus | string;

  /**
   * The time, in ISO format, when the deployment was created.
   */
  CreatedAt?: string;

  /**
   * Error details
   */
  ErrorDetails?: ErrorDetail[];

  /**
   * Error message
   */
  ErrorMessage?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetConnectivityInfoRequest {
  /**
   * The thing name.
   */
  ThingName: string | undefined;
}

/**
 * @public
 */
export interface GetConnectivityInfoResponse {
  /**
   * Connectivity info list.
   */
  ConnectivityInfo?: ConnectivityInfo[];

  /**
   * A message about the connectivity info request.
   */
  Message?: string;
}

/**
 * @public
 */
export interface GetConnectorDefinitionRequest {
  /**
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetConnectorDefinitionVersionRequest {
  /**
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;

  /**
   * The ID of the connector definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListConnectorDefinitionVersions'' requests. If the version is the last one that was associated with a connector definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  ConnectorDefinitionVersionId: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetConnectorDefinitionVersionResponse {
  /**
   * The ARN of the connector definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the connector definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the connector definition version.
   */
  Definition?: ConnectorDefinitionVersion;

  /**
   * The ID of the connector definition version.
   */
  Id?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The version of the connector definition version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface GetCoreDefinitionRequest {
  /**
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetCoreDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetCoreDefinitionVersionRequest {
  /**
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;

  /**
   * The ID of the core definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListCoreDefinitionVersions'' requests. If the version is the last one that was associated with a core definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  CoreDefinitionVersionId: string | undefined;
}

/**
 * @public
 */
export interface GetCoreDefinitionVersionResponse {
  /**
   * The ARN of the core definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the core definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the core definition version.
   */
  Definition?: CoreDefinitionVersion;

  /**
   * The ID of the core definition version.
   */
  Id?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The version of the core definition version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface GetDeploymentStatusRequest {
  /**
   * The ID of the deployment.
   */
  DeploymentId: string | undefined;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentStatusResponse {
  /**
   * The status of the deployment: ''InProgress'', ''Building'', ''Success'', or ''Failure''.
   */
  DeploymentStatus?: string;

  /**
   * The type of the deployment.
   */
  DeploymentType?: DeploymentType | string;

  /**
   * Error details
   */
  ErrorDetails?: ErrorDetail[];

  /**
   * Error message
   */
  ErrorMessage?: string;

  /**
   * The time, in milliseconds since the epoch, when the deployment status was updated.
   */
  UpdatedAt?: string;
}

/**
 * @public
 */
export interface GetDeviceDefinitionRequest {
  /**
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetDeviceDefinitionVersionRequest {
  /**
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;

  /**
   * The ID of the device definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListDeviceDefinitionVersions'' requests. If the version is the last one that was associated with a device definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  DeviceDefinitionVersionId: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetDeviceDefinitionVersionResponse {
  /**
   * The ARN of the device definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the device definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the device definition version.
   */
  Definition?: DeviceDefinitionVersion;

  /**
   * The ID of the device definition version.
   */
  Id?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The version of the device definition version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface GetFunctionDefinitionRequest {
  /**
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetFunctionDefinitionVersionRequest {
  /**
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;

  /**
   * The ID of the function definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListFunctionDefinitionVersions'' requests. If the version is the last one that was associated with a function definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  FunctionDefinitionVersionId: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetFunctionDefinitionVersionResponse {
  /**
   * The ARN of the function definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the function definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information on the definition.
   */
  Definition?: FunctionDefinitionVersion;

  /**
   * The ID of the function definition version.
   */
  Id?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The version of the function definition version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface GetGroupRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface GetGroupResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetGroupCertificateAuthorityRequest {
  /**
   * The ID of the certificate authority.
   */
  CertificateAuthorityId: string | undefined;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface GetGroupCertificateAuthorityResponse {
  /**
   * The ARN of the certificate authority for the group.
   */
  GroupCertificateAuthorityArn?: string;

  /**
   * The ID of the certificate authority for the group.
   */
  GroupCertificateAuthorityId?: string;

  /**
   * The PEM encoded certificate for the group.
   */
  PemEncodedCertificate?: string;
}

/**
 * @public
 */
export interface GetGroupCertificateConfigurationRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface GetGroupCertificateConfigurationResponse {
  /**
   * The amount of time remaining before the certificate authority expires, in milliseconds.
   */
  CertificateAuthorityExpiryInMilliseconds?: string;

  /**
   * The amount of time remaining before the certificate expires, in milliseconds.
   */
  CertificateExpiryInMilliseconds?: string;

  /**
   * The ID of the group certificate configuration.
   */
  GroupId?: string;
}

/**
 * @public
 */
export interface GetGroupVersionRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The ID of the group version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListGroupVersions'' requests. If the version is the last one that was associated with a group, the value also maps to the ''LatestVersion'' property of the corresponding ''GroupInformation'' object.
   */
  GroupVersionId: string | undefined;
}

/**
 * @public
 */
export interface GetGroupVersionResponse {
  /**
   * The ARN of the group version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the group version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the group version definition.
   */
  Definition?: GroupVersion;

  /**
   * The ID of the group that the version is associated with.
   */
  Id?: string;

  /**
   * The ID of the group version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface GetLoggerDefinitionRequest {
  /**
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetLoggerDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetLoggerDefinitionVersionRequest {
  /**
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;

  /**
   * The ID of the logger definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListLoggerDefinitionVersions'' requests. If the version is the last one that was associated with a logger definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  LoggerDefinitionVersionId: string | undefined;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetLoggerDefinitionVersionResponse {
  /**
   * The ARN of the logger definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the logger definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the logger definition version.
   */
  Definition?: LoggerDefinitionVersion;

  /**
   * The ID of the logger definition version.
   */
  Id?: string;

  /**
   * The version of the logger definition version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface GetResourceDefinitionRequest {
  /**
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetResourceDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetResourceDefinitionVersionRequest {
  /**
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;

  /**
   * The ID of the resource definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListResourceDefinitionVersions'' requests. If the version is the last one that was associated with a resource definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  ResourceDefinitionVersionId: string | undefined;
}

/**
 * @public
 */
export interface GetResourceDefinitionVersionResponse {
  /**
   * Arn of the resource definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the resource definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the definition.
   */
  Definition?: ResourceDefinitionVersion;

  /**
   * The ID of the resource definition version.
   */
  Id?: string;

  /**
   * The version of the resource definition version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface GetServiceRoleForAccountRequest {}

/**
 * @public
 */
export interface GetServiceRoleForAccountResponse {
  /**
   * The time when the service role was associated with the account.
   */
  AssociatedAt?: string;

  /**
   * The ARN of the role which is associated with the account.
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface GetSubscriptionDefinitionRequest {
  /**
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionDefinitionResponse {
  /**
   * The ARN of the definition.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the definition.
   */
  Id?: string;

  /**
   * The time, in milliseconds since the epoch, when the definition was last updated.
   */
  LastUpdatedTimestamp?: string;

  /**
   * The ID of the latest version associated with the definition.
   */
  LatestVersion?: string;

  /**
   * The ARN of the latest version associated with the definition.
   */
  LatestVersionArn?: string;

  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetSubscriptionDefinitionVersionRequest {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;

  /**
   * The ID of the subscription definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListSubscriptionDefinitionVersions'' requests. If the version is the last one that was associated with a subscription definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
   */
  SubscriptionDefinitionVersionId: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionDefinitionVersionResponse {
  /**
   * The ARN of the subscription definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the subscription definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the subscription definition version.
   */
  Definition?: SubscriptionDefinitionVersion;

  /**
   * The ID of the subscription definition version.
   */
  Id?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The version of the subscription definition version.
   */
  Version?: string;
}

/**
 * @public
 */
export interface GetThingRuntimeConfigurationRequest {
  /**
   * The thing name.
   */
  ThingName: string | undefined;
}

/**
 * @public
 */
export enum Telemetry {
  Off = "Off",
  On = "On",
}

/**
 * @public
 * Configuration settings for running telemetry.
 */
export interface TelemetryConfiguration {
  /**
   * Synchronization status of the device reported configuration with the desired configuration.
   */
  ConfigurationSyncStatus?: ConfigurationSyncStatus | string;

  /**
   * Configure telemetry to be on or off.
   */
  Telemetry: Telemetry | string | undefined;
}

/**
 * @public
 * Runtime configuration for a thing.
 */
export interface RuntimeConfiguration {
  /**
   * Configuration for telemetry service.
   */
  TelemetryConfiguration?: TelemetryConfiguration;
}

/**
 * @public
 */
export interface GetThingRuntimeConfigurationResponse {
  /**
   * Runtime configuration for a thing.
   */
  RuntimeConfiguration?: RuntimeConfiguration;
}

/**
 * @public
 */
export interface ListBulkDeploymentDetailedReportsRequest {
  /**
   * The ID of the bulk deployment.
   */
  BulkDeploymentId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListBulkDeploymentDetailedReportsResponse {
  /**
   * A list of the individual group deployments in the bulk deployment operation.
   */
  Deployments?: BulkDeploymentResult[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListBulkDeploymentsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListBulkDeploymentsResponse {
  /**
   * A list of bulk deployments.
   */
  BulkDeployments?: BulkDeployment[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConnectorDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConnectorDefinitionsResponse {
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConnectorDefinitionVersionsRequest {
  /**
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConnectorDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

/**
 * @public
 */
export interface ListCoreDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCoreDefinitionsResponse {
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCoreDefinitionVersionsRequest {
  /**
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCoreDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

/**
 * @public
 */
export interface ListDeploymentsRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDeploymentsResponse {
  /**
   * A list of deployments for the requested groups.
   */
  Deployments?: Deployment[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDeviceDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDeviceDefinitionsResponse {
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDeviceDefinitionVersionsRequest {
  /**
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDeviceDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

/**
 * @public
 */
export interface ListFunctionDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFunctionDefinitionsResponse {
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFunctionDefinitionVersionsRequest {
  /**
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFunctionDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

/**
 * @public
 */
export interface ListGroupCertificateAuthoritiesRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface ListGroupCertificateAuthoritiesResponse {
  /**
   * A list of certificate authorities associated with the group.
   */
  GroupCertificateAuthorities?: GroupCertificateAuthorityProperties[];
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * Information about a group.
   */
  Groups?: GroupInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGroupVersionsRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGroupVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

/**
 * @public
 */
export interface ListLoggerDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLoggerDefinitionsResponse {
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLoggerDefinitionVersionsRequest {
  /**
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLoggerDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

/**
 * @public
 */
export interface ListResourceDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListResourceDefinitionsResponse {
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListResourceDefinitionVersionsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface ListResourceDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

/**
 * @public
 */
export interface ListSubscriptionDefinitionsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSubscriptionDefinitionsResponse {
  /**
   * Information about a definition.
   */
  Definitions?: DefinitionInformation[];

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSubscriptionDefinitionVersionsRequest {
  /**
   * The maximum number of results to be returned per request.
   */
  MaxResults?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionDefinitionVersionsResponse {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: VersionInformation[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The key-value pair for the resource tag.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * Information needed to reset deployments.
 */
export interface ResetDeploymentsRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * If true, performs a best-effort only core reset.
   */
  Force?: boolean;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface ResetDeploymentsResponse {
  /**
   * The ARN of the deployment.
   */
  DeploymentArn?: string;

  /**
   * The ID of the deployment.
   */
  DeploymentId?: string;
}

/**
 * @public
 */
export interface StartBulkDeploymentRequest {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The ARN of the execution role to associate with the bulk deployment operation. This IAM role must allow the ''greengrass:CreateDeployment'' action for all group versions that are listed in the input file. This IAM role must have access to the S3 bucket containing the input file.
   */
  ExecutionRoleArn: string | undefined;

  /**
   * The URI of the input file contained in the S3 bucket. The execution role must have ''getObject'' permissions on this bucket to access the input file. The input file is a JSON-serialized, line delimited file with UTF-8 encoding that provides a list of group and version IDs and the deployment type. This file must be less than 100 MB. Currently, AWS IoT Greengrass supports only ''NewDeployment'' deployment types.
   */
  InputFileUri: string | undefined;

  /**
   * Tag(s) to add to the new resource.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartBulkDeploymentResponse {
  /**
   * The ARN of the bulk deployment.
   */
  BulkDeploymentArn?: string;

  /**
   * The ID of the bulk deployment.
   */
  BulkDeploymentId?: string;
}

/**
 * @public
 */
export interface StopBulkDeploymentRequest {
  /**
   * The ID of the bulk deployment.
   */
  BulkDeploymentId: string | undefined;
}

/**
 * @public
 */
export interface StopBulkDeploymentResponse {}

/**
 * @public
 * A map of the key-value pairs for the resource tag.
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  ResourceArn: string | undefined;

  /**
   * The key-value pair for the resource tag.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  ResourceArn: string | undefined;

  /**
   * An array of tag keys to delete
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 * Connectivity information.
 */
export interface UpdateConnectivityInfoRequest {
  /**
   * A list of connectivity info.
   */
  ConnectivityInfo?: ConnectivityInfo[];

  /**
   * The thing name.
   */
  ThingName: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectivityInfoResponse {
  /**
   * A message about the connectivity info update request.
   */
  Message?: string;

  /**
   * The new version of the connectivity info.
   */
  Version?: string;
}

/**
 * @public
 */
export interface UpdateConnectorDefinitionRequest {
  /**
   * The ID of the connector definition.
   */
  ConnectorDefinitionId: string | undefined;

  /**
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 */
export interface UpdateConnectorDefinitionResponse {}

/**
 * @public
 */
export interface UpdateCoreDefinitionRequest {
  /**
   * The ID of the core definition.
   */
  CoreDefinitionId: string | undefined;

  /**
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 */
export interface UpdateCoreDefinitionResponse {}

/**
 * @public
 */
export interface UpdateDeviceDefinitionRequest {
  /**
   * The ID of the device definition.
   */
  DeviceDefinitionId: string | undefined;

  /**
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 */
export interface UpdateDeviceDefinitionResponse {}

/**
 * @public
 */
export interface UpdateFunctionDefinitionRequest {
  /**
   * The ID of the Lambda function definition.
   */
  FunctionDefinitionId: string | undefined;

  /**
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 */
export interface UpdateFunctionDefinitionResponse {}

/**
 * @public
 */
export interface UpdateGroupRequest {
  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;

  /**
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 */
export interface UpdateGroupResponse {}

/**
 * @public
 */
export interface UpdateGroupCertificateConfigurationRequest {
  /**
   * The amount of time remaining before the certificate expires, in milliseconds.
   */
  CertificateExpiryInMilliseconds?: string;

  /**
   * The ID of the Greengrass group.
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface UpdateGroupCertificateConfigurationResponse {
  /**
   * The amount of time remaining before the certificate authority expires, in milliseconds.
   */
  CertificateAuthorityExpiryInMilliseconds?: string;

  /**
   * The amount of time remaining before the certificate expires, in milliseconds.
   */
  CertificateExpiryInMilliseconds?: string;

  /**
   * The ID of the group certificate configuration.
   */
  GroupId?: string;
}

/**
 * @public
 */
export interface UpdateLoggerDefinitionRequest {
  /**
   * The ID of the logger definition.
   */
  LoggerDefinitionId: string | undefined;

  /**
   * The name of the definition.
   */
  Name?: string;
}

/**
 * @public
 */
export interface UpdateLoggerDefinitionResponse {}

/**
 * @public
 */
export interface UpdateResourceDefinitionRequest {
  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * The ID of the resource definition.
   */
  ResourceDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateResourceDefinitionResponse {}

/**
 * @public
 */
export interface UpdateSubscriptionDefinitionRequest {
  /**
   * The name of the definition.
   */
  Name?: string;

  /**
   * The ID of the subscription definition.
   */
  SubscriptionDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionDefinitionResponse {}

/**
 * @public
 * Configuration settings for running telemetry.
 */
export interface TelemetryConfigurationUpdate {
  /**
   * Configure telemetry to be on or off.
   */
  Telemetry: Telemetry | string | undefined;
}

/**
 * @public
 */
export interface UpdateThingRuntimeConfigurationRequest {
  /**
   * Configuration for telemetry service.
   */
  TelemetryConfiguration?: TelemetryConfigurationUpdate;

  /**
   * The thing name.
   */
  ThingName: string | undefined;
}

/**
 * @public
 */
export interface UpdateThingRuntimeConfigurationResponse {}

/**
 * @internal
 */
export const ConnectivityInfoFilterSensitiveLog = (obj: ConnectivityInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectorFilterSensitiveLog = (obj: Connector): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CoreFilterSensitiveLog = (obj: Core): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefinitionInformationFilterSensitiveLog = (obj: DefinitionInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceFilterSensitiveLog = (obj: Device): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FunctionRunAsConfigFilterSensitiveLog = (obj: FunctionRunAsConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FunctionExecutionConfigFilterSensitiveLog = (obj: FunctionExecutionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceAccessPolicyFilterSensitiveLog = (obj: ResourceAccessPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FunctionConfigurationEnvironmentFilterSensitiveLog = (obj: FunctionConfigurationEnvironment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FunctionConfigurationFilterSensitiveLog = (obj: FunctionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FunctionFilterSensitiveLog = (obj: Function): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupCertificateAuthorityPropertiesFilterSensitiveLog = (
  obj: GroupCertificateAuthorityProperties
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupInformationFilterSensitiveLog = (obj: GroupInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoggerFilterSensitiveLog = (obj: Logger): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupOwnerSettingFilterSensitiveLog = (obj: GroupOwnerSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LocalDeviceResourceDataFilterSensitiveLog = (obj: LocalDeviceResourceData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LocalVolumeResourceDataFilterSensitiveLog = (obj: LocalVolumeResourceData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceDownloadOwnerSettingFilterSensitiveLog = (obj: ResourceDownloadOwnerSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3MachineLearningModelResourceDataFilterSensitiveLog = (obj: S3MachineLearningModelResourceData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SageMakerMachineLearningModelResourceDataFilterSensitiveLog = (
  obj: SageMakerMachineLearningModelResourceData
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecretsManagerSecretResourceDataFilterSensitiveLog = (obj: SecretsManagerSecretResourceData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceDataContainerFilterSensitiveLog = (obj: ResourceDataContainer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceFilterSensitiveLog = (obj: Resource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubscriptionFilterSensitiveLog = (obj: Subscription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VersionInformationFilterSensitiveLog = (obj: VersionInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateRoleToGroupRequestFilterSensitiveLog = (obj: AssociateRoleToGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateRoleToGroupResponseFilterSensitiveLog = (obj: AssociateRoleToGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ErrorDetailFilterSensitiveLog = (obj: ErrorDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateServiceRoleToAccountRequestFilterSensitiveLog = (
  obj: AssociateServiceRoleToAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateServiceRoleToAccountResponseFilterSensitiveLog = (
  obj: AssociateServiceRoleToAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BulkDeploymentFilterSensitiveLog = (obj: BulkDeployment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BulkDeploymentMetricsFilterSensitiveLog = (obj: BulkDeploymentMetrics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BulkDeploymentResultFilterSensitiveLog = (obj: BulkDeploymentResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectorDefinitionVersionFilterSensitiveLog = (obj: ConnectorDefinitionVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CoreDefinitionVersionFilterSensitiveLog = (obj: CoreDefinitionVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectorDefinitionRequestFilterSensitiveLog = (obj: CreateConnectorDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectorDefinitionResponseFilterSensitiveLog = (obj: CreateConnectorDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectorDefinitionVersionRequestFilterSensitiveLog = (
  obj: CreateConnectorDefinitionVersionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectorDefinitionVersionResponseFilterSensitiveLog = (
  obj: CreateConnectorDefinitionVersionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCoreDefinitionRequestFilterSensitiveLog = (obj: CreateCoreDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCoreDefinitionResponseFilterSensitiveLog = (obj: CreateCoreDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCoreDefinitionVersionRequestFilterSensitiveLog = (obj: CreateCoreDefinitionVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCoreDefinitionVersionResponseFilterSensitiveLog = (
  obj: CreateCoreDefinitionVersionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDeploymentRequestFilterSensitiveLog = (obj: CreateDeploymentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDeploymentResponseFilterSensitiveLog = (obj: CreateDeploymentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceDefinitionVersionFilterSensitiveLog = (obj: DeviceDefinitionVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDeviceDefinitionRequestFilterSensitiveLog = (obj: CreateDeviceDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDeviceDefinitionResponseFilterSensitiveLog = (obj: CreateDeviceDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDeviceDefinitionVersionRequestFilterSensitiveLog = (
  obj: CreateDeviceDefinitionVersionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDeviceDefinitionVersionResponseFilterSensitiveLog = (
  obj: CreateDeviceDefinitionVersionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FunctionDefaultExecutionConfigFilterSensitiveLog = (obj: FunctionDefaultExecutionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FunctionDefaultConfigFilterSensitiveLog = (obj: FunctionDefaultConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FunctionDefinitionVersionFilterSensitiveLog = (obj: FunctionDefinitionVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFunctionDefinitionRequestFilterSensitiveLog = (obj: CreateFunctionDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFunctionDefinitionResponseFilterSensitiveLog = (obj: CreateFunctionDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFunctionDefinitionVersionRequestFilterSensitiveLog = (
  obj: CreateFunctionDefinitionVersionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFunctionDefinitionVersionResponseFilterSensitiveLog = (
  obj: CreateFunctionDefinitionVersionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupVersionFilterSensitiveLog = (obj: GroupVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGroupRequestFilterSensitiveLog = (obj: CreateGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGroupResponseFilterSensitiveLog = (obj: CreateGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGroupCertificateAuthorityRequestFilterSensitiveLog = (
  obj: CreateGroupCertificateAuthorityRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGroupCertificateAuthorityResponseFilterSensitiveLog = (
  obj: CreateGroupCertificateAuthorityResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGroupVersionRequestFilterSensitiveLog = (obj: CreateGroupVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGroupVersionResponseFilterSensitiveLog = (obj: CreateGroupVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoggerDefinitionVersionFilterSensitiveLog = (obj: LoggerDefinitionVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLoggerDefinitionRequestFilterSensitiveLog = (obj: CreateLoggerDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLoggerDefinitionResponseFilterSensitiveLog = (obj: CreateLoggerDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLoggerDefinitionVersionRequestFilterSensitiveLog = (
  obj: CreateLoggerDefinitionVersionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLoggerDefinitionVersionResponseFilterSensitiveLog = (
  obj: CreateLoggerDefinitionVersionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceDefinitionVersionFilterSensitiveLog = (obj: ResourceDefinitionVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResourceDefinitionRequestFilterSensitiveLog = (obj: CreateResourceDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResourceDefinitionResponseFilterSensitiveLog = (obj: CreateResourceDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResourceDefinitionVersionRequestFilterSensitiveLog = (
  obj: CreateResourceDefinitionVersionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResourceDefinitionVersionResponseFilterSensitiveLog = (
  obj: CreateResourceDefinitionVersionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSoftwareUpdateJobRequestFilterSensitiveLog = (obj: CreateSoftwareUpdateJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSoftwareUpdateJobResponseFilterSensitiveLog = (obj: CreateSoftwareUpdateJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubscriptionDefinitionVersionFilterSensitiveLog = (obj: SubscriptionDefinitionVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSubscriptionDefinitionRequestFilterSensitiveLog = (
  obj: CreateSubscriptionDefinitionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSubscriptionDefinitionResponseFilterSensitiveLog = (
  obj: CreateSubscriptionDefinitionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSubscriptionDefinitionVersionRequestFilterSensitiveLog = (
  obj: CreateSubscriptionDefinitionVersionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSubscriptionDefinitionVersionResponseFilterSensitiveLog = (
  obj: CreateSubscriptionDefinitionVersionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConnectorDefinitionRequestFilterSensitiveLog = (obj: DeleteConnectorDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConnectorDefinitionResponseFilterSensitiveLog = (obj: DeleteConnectorDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCoreDefinitionRequestFilterSensitiveLog = (obj: DeleteCoreDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCoreDefinitionResponseFilterSensitiveLog = (obj: DeleteCoreDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDeviceDefinitionRequestFilterSensitiveLog = (obj: DeleteDeviceDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDeviceDefinitionResponseFilterSensitiveLog = (obj: DeleteDeviceDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFunctionDefinitionRequestFilterSensitiveLog = (obj: DeleteFunctionDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFunctionDefinitionResponseFilterSensitiveLog = (obj: DeleteFunctionDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGroupRequestFilterSensitiveLog = (obj: DeleteGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGroupResponseFilterSensitiveLog = (obj: DeleteGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLoggerDefinitionRequestFilterSensitiveLog = (obj: DeleteLoggerDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLoggerDefinitionResponseFilterSensitiveLog = (obj: DeleteLoggerDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourceDefinitionRequestFilterSensitiveLog = (obj: DeleteResourceDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourceDefinitionResponseFilterSensitiveLog = (obj: DeleteResourceDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSubscriptionDefinitionRequestFilterSensitiveLog = (
  obj: DeleteSubscriptionDefinitionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSubscriptionDefinitionResponseFilterSensitiveLog = (
  obj: DeleteSubscriptionDefinitionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeploymentFilterSensitiveLog = (obj: Deployment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateRoleFromGroupRequestFilterSensitiveLog = (obj: DisassociateRoleFromGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateRoleFromGroupResponseFilterSensitiveLog = (obj: DisassociateRoleFromGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateServiceRoleFromAccountRequestFilterSensitiveLog = (
  obj: DisassociateServiceRoleFromAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateServiceRoleFromAccountResponseFilterSensitiveLog = (
  obj: DisassociateServiceRoleFromAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssociatedRoleRequestFilterSensitiveLog = (obj: GetAssociatedRoleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssociatedRoleResponseFilterSensitiveLog = (obj: GetAssociatedRoleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBulkDeploymentStatusRequestFilterSensitiveLog = (obj: GetBulkDeploymentStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBulkDeploymentStatusResponseFilterSensitiveLog = (obj: GetBulkDeploymentStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConnectivityInfoRequestFilterSensitiveLog = (obj: GetConnectivityInfoRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConnectivityInfoResponseFilterSensitiveLog = (obj: GetConnectivityInfoResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConnectorDefinitionRequestFilterSensitiveLog = (obj: GetConnectorDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConnectorDefinitionResponseFilterSensitiveLog = (obj: GetConnectorDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConnectorDefinitionVersionRequestFilterSensitiveLog = (
  obj: GetConnectorDefinitionVersionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConnectorDefinitionVersionResponseFilterSensitiveLog = (
  obj: GetConnectorDefinitionVersionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCoreDefinitionRequestFilterSensitiveLog = (obj: GetCoreDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCoreDefinitionResponseFilterSensitiveLog = (obj: GetCoreDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCoreDefinitionVersionRequestFilterSensitiveLog = (obj: GetCoreDefinitionVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCoreDefinitionVersionResponseFilterSensitiveLog = (obj: GetCoreDefinitionVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeploymentStatusRequestFilterSensitiveLog = (obj: GetDeploymentStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeploymentStatusResponseFilterSensitiveLog = (obj: GetDeploymentStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeviceDefinitionRequestFilterSensitiveLog = (obj: GetDeviceDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeviceDefinitionResponseFilterSensitiveLog = (obj: GetDeviceDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeviceDefinitionVersionRequestFilterSensitiveLog = (obj: GetDeviceDefinitionVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeviceDefinitionVersionResponseFilterSensitiveLog = (obj: GetDeviceDefinitionVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFunctionDefinitionRequestFilterSensitiveLog = (obj: GetFunctionDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFunctionDefinitionResponseFilterSensitiveLog = (obj: GetFunctionDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFunctionDefinitionVersionRequestFilterSensitiveLog = (
  obj: GetFunctionDefinitionVersionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFunctionDefinitionVersionResponseFilterSensitiveLog = (
  obj: GetFunctionDefinitionVersionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupRequestFilterSensitiveLog = (obj: GetGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupResponseFilterSensitiveLog = (obj: GetGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupCertificateAuthorityRequestFilterSensitiveLog = (
  obj: GetGroupCertificateAuthorityRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupCertificateAuthorityResponseFilterSensitiveLog = (
  obj: GetGroupCertificateAuthorityResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupCertificateConfigurationRequestFilterSensitiveLog = (
  obj: GetGroupCertificateConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupCertificateConfigurationResponseFilterSensitiveLog = (
  obj: GetGroupCertificateConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupVersionRequestFilterSensitiveLog = (obj: GetGroupVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupVersionResponseFilterSensitiveLog = (obj: GetGroupVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLoggerDefinitionRequestFilterSensitiveLog = (obj: GetLoggerDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLoggerDefinitionResponseFilterSensitiveLog = (obj: GetLoggerDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLoggerDefinitionVersionRequestFilterSensitiveLog = (obj: GetLoggerDefinitionVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLoggerDefinitionVersionResponseFilterSensitiveLog = (obj: GetLoggerDefinitionVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourceDefinitionRequestFilterSensitiveLog = (obj: GetResourceDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourceDefinitionResponseFilterSensitiveLog = (obj: GetResourceDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourceDefinitionVersionRequestFilterSensitiveLog = (
  obj: GetResourceDefinitionVersionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourceDefinitionVersionResponseFilterSensitiveLog = (
  obj: GetResourceDefinitionVersionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServiceRoleForAccountRequestFilterSensitiveLog = (obj: GetServiceRoleForAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServiceRoleForAccountResponseFilterSensitiveLog = (obj: GetServiceRoleForAccountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSubscriptionDefinitionRequestFilterSensitiveLog = (obj: GetSubscriptionDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSubscriptionDefinitionResponseFilterSensitiveLog = (obj: GetSubscriptionDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSubscriptionDefinitionVersionRequestFilterSensitiveLog = (
  obj: GetSubscriptionDefinitionVersionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSubscriptionDefinitionVersionResponseFilterSensitiveLog = (
  obj: GetSubscriptionDefinitionVersionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetThingRuntimeConfigurationRequestFilterSensitiveLog = (
  obj: GetThingRuntimeConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TelemetryConfigurationFilterSensitiveLog = (obj: TelemetryConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuntimeConfigurationFilterSensitiveLog = (obj: RuntimeConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetThingRuntimeConfigurationResponseFilterSensitiveLog = (
  obj: GetThingRuntimeConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBulkDeploymentDetailedReportsRequestFilterSensitiveLog = (
  obj: ListBulkDeploymentDetailedReportsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBulkDeploymentDetailedReportsResponseFilterSensitiveLog = (
  obj: ListBulkDeploymentDetailedReportsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBulkDeploymentsRequestFilterSensitiveLog = (obj: ListBulkDeploymentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBulkDeploymentsResponseFilterSensitiveLog = (obj: ListBulkDeploymentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConnectorDefinitionsRequestFilterSensitiveLog = (obj: ListConnectorDefinitionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConnectorDefinitionsResponseFilterSensitiveLog = (obj: ListConnectorDefinitionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConnectorDefinitionVersionsRequestFilterSensitiveLog = (
  obj: ListConnectorDefinitionVersionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConnectorDefinitionVersionsResponseFilterSensitiveLog = (
  obj: ListConnectorDefinitionVersionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCoreDefinitionsRequestFilterSensitiveLog = (obj: ListCoreDefinitionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCoreDefinitionsResponseFilterSensitiveLog = (obj: ListCoreDefinitionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCoreDefinitionVersionsRequestFilterSensitiveLog = (obj: ListCoreDefinitionVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCoreDefinitionVersionsResponseFilterSensitiveLog = (obj: ListCoreDefinitionVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeploymentsRequestFilterSensitiveLog = (obj: ListDeploymentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeploymentsResponseFilterSensitiveLog = (obj: ListDeploymentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeviceDefinitionsRequestFilterSensitiveLog = (obj: ListDeviceDefinitionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeviceDefinitionsResponseFilterSensitiveLog = (obj: ListDeviceDefinitionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeviceDefinitionVersionsRequestFilterSensitiveLog = (
  obj: ListDeviceDefinitionVersionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeviceDefinitionVersionsResponseFilterSensitiveLog = (
  obj: ListDeviceDefinitionVersionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFunctionDefinitionsRequestFilterSensitiveLog = (obj: ListFunctionDefinitionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFunctionDefinitionsResponseFilterSensitiveLog = (obj: ListFunctionDefinitionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFunctionDefinitionVersionsRequestFilterSensitiveLog = (
  obj: ListFunctionDefinitionVersionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFunctionDefinitionVersionsResponseFilterSensitiveLog = (
  obj: ListFunctionDefinitionVersionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGroupCertificateAuthoritiesRequestFilterSensitiveLog = (
  obj: ListGroupCertificateAuthoritiesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGroupCertificateAuthoritiesResponseFilterSensitiveLog = (
  obj: ListGroupCertificateAuthoritiesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGroupsRequestFilterSensitiveLog = (obj: ListGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGroupsResponseFilterSensitiveLog = (obj: ListGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGroupVersionsRequestFilterSensitiveLog = (obj: ListGroupVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGroupVersionsResponseFilterSensitiveLog = (obj: ListGroupVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLoggerDefinitionsRequestFilterSensitiveLog = (obj: ListLoggerDefinitionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLoggerDefinitionsResponseFilterSensitiveLog = (obj: ListLoggerDefinitionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLoggerDefinitionVersionsRequestFilterSensitiveLog = (
  obj: ListLoggerDefinitionVersionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLoggerDefinitionVersionsResponseFilterSensitiveLog = (
  obj: ListLoggerDefinitionVersionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceDefinitionsRequestFilterSensitiveLog = (obj: ListResourceDefinitionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceDefinitionsResponseFilterSensitiveLog = (obj: ListResourceDefinitionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceDefinitionVersionsRequestFilterSensitiveLog = (
  obj: ListResourceDefinitionVersionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceDefinitionVersionsResponseFilterSensitiveLog = (
  obj: ListResourceDefinitionVersionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSubscriptionDefinitionsRequestFilterSensitiveLog = (obj: ListSubscriptionDefinitionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSubscriptionDefinitionsResponseFilterSensitiveLog = (
  obj: ListSubscriptionDefinitionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSubscriptionDefinitionVersionsRequestFilterSensitiveLog = (
  obj: ListSubscriptionDefinitionVersionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSubscriptionDefinitionVersionsResponseFilterSensitiveLog = (
  obj: ListSubscriptionDefinitionVersionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetDeploymentsRequestFilterSensitiveLog = (obj: ResetDeploymentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetDeploymentsResponseFilterSensitiveLog = (obj: ResetDeploymentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartBulkDeploymentRequestFilterSensitiveLog = (obj: StartBulkDeploymentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartBulkDeploymentResponseFilterSensitiveLog = (obj: StartBulkDeploymentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopBulkDeploymentRequestFilterSensitiveLog = (obj: StopBulkDeploymentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopBulkDeploymentResponseFilterSensitiveLog = (obj: StopBulkDeploymentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectivityInfoRequestFilterSensitiveLog = (obj: UpdateConnectivityInfoRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectivityInfoResponseFilterSensitiveLog = (obj: UpdateConnectivityInfoResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectorDefinitionRequestFilterSensitiveLog = (obj: UpdateConnectorDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectorDefinitionResponseFilterSensitiveLog = (obj: UpdateConnectorDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCoreDefinitionRequestFilterSensitiveLog = (obj: UpdateCoreDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCoreDefinitionResponseFilterSensitiveLog = (obj: UpdateCoreDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDeviceDefinitionRequestFilterSensitiveLog = (obj: UpdateDeviceDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDeviceDefinitionResponseFilterSensitiveLog = (obj: UpdateDeviceDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFunctionDefinitionRequestFilterSensitiveLog = (obj: UpdateFunctionDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFunctionDefinitionResponseFilterSensitiveLog = (obj: UpdateFunctionDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGroupRequestFilterSensitiveLog = (obj: UpdateGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGroupResponseFilterSensitiveLog = (obj: UpdateGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGroupCertificateConfigurationRequestFilterSensitiveLog = (
  obj: UpdateGroupCertificateConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGroupCertificateConfigurationResponseFilterSensitiveLog = (
  obj: UpdateGroupCertificateConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLoggerDefinitionRequestFilterSensitiveLog = (obj: UpdateLoggerDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLoggerDefinitionResponseFilterSensitiveLog = (obj: UpdateLoggerDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResourceDefinitionRequestFilterSensitiveLog = (obj: UpdateResourceDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResourceDefinitionResponseFilterSensitiveLog = (obj: UpdateResourceDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSubscriptionDefinitionRequestFilterSensitiveLog = (
  obj: UpdateSubscriptionDefinitionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSubscriptionDefinitionResponseFilterSensitiveLog = (
  obj: UpdateSubscriptionDefinitionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TelemetryConfigurationUpdateFilterSensitiveLog = (obj: TelemetryConfigurationUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateThingRuntimeConfigurationRequestFilterSensitiveLog = (
  obj: UpdateThingRuntimeConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateThingRuntimeConfigurationResponseFilterSensitiveLog = (
  obj: UpdateThingRuntimeConfigurationResponse
): any => ({
  ...obj,
});
