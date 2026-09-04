// TypeBay shows no advertisements. This module keeps the upstream export
// surface as inert values/no-ops so remaining importers compile and behave.
export let adBlock = false;
export let cookieBlocker = false;

export async function checkAdblock(): Promise<void> {
  return Promise.resolve();
}

export async function checkCookieblocker(): Promise<void> {
  return Promise.resolve();
}

export async function reinstate(): Promise<boolean> {
  return false;
}

export async function renderResult(): Promise<void> {
  return Promise.resolve();
}

export function updateFooterAndVerticalAds(_visible: boolean): void {
  // no-op
}

export function showConsentPopup(): void {
  // no-op
}

export function destroyResult(): void {
  // no-op
}
