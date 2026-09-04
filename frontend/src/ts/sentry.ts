// TypeBay: error reporting (Sentry) is removed — the site runs no third-party
// tracking or telemetry. This module keeps the upstream API surface as no-ops
// so remaining importers compile.
let debug = false;

export async function activateSentry(): Promise<void> {
  console.debug("Sentry is disabled on TypeBay");
}

export async function setUser(_uid: string, _name: string): Promise<void> {
  // no-op
}

export async function clearUser(): Promise<void> {
  // no-op
}

export async function captureException(_error: Error): Promise<void> {
  // no-op
}

export function toggleDebug(): void {
  debug = !debug;
  console.debug("Sentry debug mode:", debug);
}
