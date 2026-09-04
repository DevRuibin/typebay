// TypeBay runs no analytics or tracking (upstream injected a Google
// Analytics/gtag snippet here). Kept as no-ops so importers compile.
export async function log(
  _eventName: string,
  _params?: Record<string, string>,
): Promise<void> {
  return Promise.resolve();
}

export function activateAnalytics(): void {
  // no-op
}
