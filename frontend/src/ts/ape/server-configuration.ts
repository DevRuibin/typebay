import { Configuration } from "@monkeytype/schemas/configuration";
import { promiseWithResolvers } from "../utils/misc";
import { queryClient } from "../queries";
import { getServerConfigurationQueryOptions } from "../queries/server-configuration";

const { promise: configurationPromise, resolve } =
  promiseWithResolvers<boolean>();

export { configurationPromise };

export function get(): Configuration | undefined {
  return queryClient.getQueryData(
    getServerConfigurationQueryOptions().queryKey,
  );
}

// TypeBay runs without a backend — there is no server configuration to
// sync. Resolve immediately so any code awaiting the promise can proceed.
export async function sync(): Promise<void> {
  resolve(true);
}
