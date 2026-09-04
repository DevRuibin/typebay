// TypeBay shows no video ads. Kept as inert exports for importers.
export async function show(): Promise<void> {
  return Promise.resolve();
}

export function egVideoListener(_options: Record<string, string>): void {
  // no-op
}
