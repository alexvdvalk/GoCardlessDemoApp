import { getServerAuthToken } from "@cord-sdk/server";
import type { PageServerLoad } from "./$types";
import { PUBLIC_CORD_KEY, PUBLIC_CORD_SECRET } from "$env/static/public";

export const load = (async ({ fetch }) => {
  const token = getServerAuthToken(PUBLIC_CORD_KEY, PUBLIC_CORD_SECRET);
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  const threads = await fetch("https://api.cord.com/v1/threads/", {
    headers: myHeaders,
  });
  const threadsOut: CordThread[] = await threads.json();
  return { threads: threadsOut };
}) satisfies PageServerLoad;

interface CordThread {
  id: string;
  organizationID: string;
  total: number;
  resolved: boolean;
  resolvedTimestamp?: any;
  participants: Participant[];
  repliers: string[];
  name: string;
  url: string;
  location: Location;
  metadata: Metadata;
  typing: any[];
}

interface Metadata {}

interface Location {
  location: string;
}

interface Participant {
  lastSeenTimestamp: string;
  userID: string;
}
