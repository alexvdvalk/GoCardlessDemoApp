import gocardless from "gocardless-nodejs";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import constants from "gocardless-nodejs/constants";

export const load = (async () => {
  return {};
}) satisfies PageServerLoad;

import type { Actions } from "./$types";

export const actions = {
  default: async (event) => {
    const token = event.cookies.get("token");
    if (!token) throw redirect(302, "/gc");

    const client = gocardless(token, constants.Environments.Sandbox);

    const data = await event.request.formData();

    const value = Object.fromEntries(data.entries());

    const payload = {
      description: value.description,
      amount: value.amount,
      currency: value.currency,
    };
    console.log("Payload", payload);

    const billingRequest = await client.billingRequests.create({
      payment_request: payload,
      mandate_request: {
        scheme: "bacs",
      },
    });

    const billingRequestFlow = await client.billingRequestFlows.create({
      redirect_uri: "https://gocardless.com/",
      exit_uri: "https://gocardless.com/",
      prefilled_customer: {
        given_name: "Frank",
        family_name: "Osborne",
        email: "frank.osborne@acmeplc.com",
      },
      links: {
        billing_request: billingRequest.id,
      },
    });

    return { billingRequest, billingRequestFlow };
  },
} satisfies Actions;
