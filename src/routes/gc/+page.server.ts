import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ cookies }) => {
  if (cookies.get("token")) throw redirect(302, "/gc/home");

  return {};
}) satisfies PageServerLoad;
