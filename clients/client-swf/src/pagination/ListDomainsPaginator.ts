// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { SWFClient } from "../SWFClient";
import { SWFPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SWFClient,
  input: ListDomainsCommandInput,
  ...args: any
): Promise<ListDomainsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDomainsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDomains(
  config: SWFPaginationConfiguration,
  input: ListDomainsCommandInput,
  ...additionalArguments: any
): Paginator<ListDomainsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextPageToken
  let token: typeof input.nextPageToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDomainsCommandOutput;
  while (hasNext) {
    input.nextPageToken = token;
    input["maximumPageSize"] = config.pageSize;
    if (config.client instanceof SWFClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SWF | SWFClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextPageToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
