import type { ClientSession } from "@/types";

const CLIENT_KEY = "alea_club_client";

export function readClient(): ClientSession | null {
  try {
    const raw = localStorage.getItem(CLIENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ClientSession;
    if (!parsed || typeof parsed.nombre !== "string") return null;
    return {
      ...parsed,
      citas: parsed.citas ?? [],
      promos: parsed.promos ?? [],
    };
  } catch {
    return null;
  }
}

export function writeClient(client: ClientSession): void {
  localStorage.setItem(CLIENT_KEY, JSON.stringify(client));
}

export function clearClient(): void {
  localStorage.removeItem(CLIENT_KEY);
}