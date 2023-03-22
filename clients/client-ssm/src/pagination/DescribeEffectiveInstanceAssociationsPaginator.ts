// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeEffectiveInstanceAssociationsCommand,
  DescribeEffectiveInstanceAssociationsCommandInput,
  DescribeEffectiveInstanceAssociationsCommandOutput,
} from "../commands/DescribeEffectiveInstanceAssociationsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeEffectiveInstanceAssociationsCommandInput,
  ...args: any
): Promise<DescribeEffectiveInstanceAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEffectiveInstanceAssociationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeEffectiveInstanceAssociations(
  config: SSMPaginationConfiguration,
  input: DescribeEffectiveInstanceAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEffectiveInstanceAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEffectiveInstanceAssociationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
