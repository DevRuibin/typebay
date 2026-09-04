// TypeBay is a fully client-side, account-free typing test.
// All authentication/backend code from upstream has been removed.
// This module keeps the upstream API surface so importers compile, but
// never initializes Firebase: the app always runs as an anonymous guest.
import type { AuthProvider, User, UserCredential } from "firebase/auth";
import { promiseWithResolvers } from "./utils/misc";
import { setUserId, setUserVerified } from "./states/core";

export type { User };

const { promise: authPromise, resolve: resolveAuthPromise } =
  promiseWithResolvers();

type ReadyCallback = (success: boolean, user: User | null) => Promise<void>;

export async function init(callback: ReadyCallback): Promise<void> {
  // No authentication backend — the app always runs in guest mode.
  setUserState(null);
  await callback(false, null);
  resolveAuthPromise();
}

export function getAuthenticatedUser(): User | null {
  return null;
}

export function isAuthAvailable(): boolean {
  return false;
}

export async function signOut(): Promise<void> {
  return Promise.resolve();
}

export function setUserState(
  options: {
    uid: string;
    emailVerified: boolean;
  } | null,
): void {
  if (options === null) {
    setUserId(null);
    setUserVerified(false);
  } else {
    setUserId(options.uid);
    setUserVerified(options.emailVerified);
  }
}

async function unavailable(): Promise<never> {
  throw new Error("Authentication is not available");
}

export async function signInWithEmailAndPassword(
  _email: string,
  _password: string,
  _rememberMe: boolean,
): Promise<UserCredential> {
  return unavailable();
}

export async function signInWithPopup(
  _provider: AuthProvider,
  _rememberMe: boolean,
): Promise<void> {
  return unavailable();
}

export async function createUserWithEmailAndPassword(
  _email: string,
  _password: string,
): Promise<UserCredential> {
  return unavailable();
}

export async function getIdToken(): Promise<string | null> {
  return null;
}

export function resetIgnoreAuthCallback(): void {
  // no-op
}

export { authPromise };
