import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ cookies }) => {
  if (!cookies.get("token")) throw redirect(302, "/gc");
  return {};
}) satisfies LayoutServerLoad;
