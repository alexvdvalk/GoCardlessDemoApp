import type { PageServerLoad } from "./$types";
import type { Actions } from "./$types";
import { getClientAuthToken } from "@cord-sdk/server";
import { PUBLIC_CORD_KEY, PUBLIC_CORD_SECRET } from "$env/static/public";

export const load = (async () => {
  return {};
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const username = data.get("username");
    if (username && typeof username === "string") {
      return { key: getKey(username) };
    }
  },
} satisfies Actions;

const getKey = (username: string) => {
  return getClientAuthToken(PUBLIC_CORD_KEY, PUBLIC_CORD_SECRET, {
    // The user ID can be any identifier that makes sense to your application.
    // As long as it's unique per-user, Cord can use it to represent your user.
    user_id: username,

    // Same as above. An organization ID can be any unique string. Organizations
    // are groups of users.
    organization_id: "starpotterdunewars",

    // By supplying the  `user_details` object, you can create the user in
    // Cord's backend on-the-fly. No need to pre-sync your users.
    user_details: {
      email: username,
      name: username,
    },

    // By supplying the `organization_details` object, just like the user,
    // Cord will create the organization on-the-fly.
    organization_details: {
      name: "starpotterdunewars",
    },
  });
};
