import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { env } from "$env/dynamic/private";
import { PUBLIC_GCCIENTID } from "$env/static/public";

export const load = (async ({ cookies, url, fetch }) => {
  const code = url.searchParams.get("code");

  if (!code) return;

  const accessTokenUrl =
    "https://connect-sandbox.gocardless.com/oauth/access_token";
  const redirectUrl = `${url.origin}/gc/callback`;

  const clientID = PUBLIC_GCCIENTID;
  const secret = env.SECRET_GCSECRET;

  console.log(clientID, secret);

  const form = new FormData();
  form.append("redirect_uri", redirectUrl);
  form.append("client_id", clientID);
  form.append("client_secret", secret);
  form.append("grant_type", "authorization_code");
  form.append("code", code);

  let u = `${accessTokenUrl}`;
  console.log(u);

  // return { url: u };
  const a = await fetch(u, { method: "POST", body: form });
  let j = await a.json();
  console.log("jjj", j);

  if (j.error) {
    throw redirect(302, "/gc");
  }

  cookies.set("token", j.access_token);

  return { token: j };
}) satisfies PageServerLoad;
