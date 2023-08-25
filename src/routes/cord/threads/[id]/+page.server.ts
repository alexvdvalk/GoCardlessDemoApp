import { getServerAuthToken } from "@cord-sdk/server";
import type { PageServerLoad } from "./$types";
import { env } from "$env/dynamic/public";

export const load = (async ({ fetch, params }) => {
  const token = getServerAuthToken(env.PUBLIC_CORD_KEY, env.PUBLIC_CORD_SECRET);
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  const threads = await fetch(
    `https://api.cord.com/v1/threads/${params.id}/messages`,
    {
      headers: myHeaders,
    }
  );
  const threadsOut: CordMessage[] = await threads.json();
  return { messages: threadsOut };
}) satisfies PageServerLoad;

interface CordMessage {
  id: string;
  organizationID: string;
  threadID: string;
  authorID: string;
  url: string;
  content: Content[];
  plaintext: string;
  createdTimestamp: string;
  updatedTimestamp?: any;
  deletedTimestamp?: any;
  type: string;
  iconURL?: any;
  metadata: Metadata;
  extraClassnames: string;
  attachments: Attachment[];
  reactions: any[];
}

interface Attachment {
  id: string;
  type: string;
  name: string;
  url: string;
  mimeType: string;
  size: number;
  uploadStatus: string;
}

interface Metadata {}

interface Content {
  type: string;
  children: Child[];
}

interface Child {
  text: string;
}
