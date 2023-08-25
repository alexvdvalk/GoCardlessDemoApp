import type { LayoutServerLoad } from "../$types";
import constants from "gocardless-nodejs/constants";
import gocardless from "gocardless-nodejs";
import { redirect } from "@sveltejs/kit";

export const load = (async ({ cookies }) => {
  const token = cookies.get("token");
  if (!token) throw redirect(302, "/gc");
  const client = gocardless(token, constants.Environments.Sandbox);

  // const billingRequest = await client.billingRequests.create({
  //   payment_request: {
  //     description: "First Payment",
  //     amount: "500",
  //     currency: "GBP",
  //   },
  //   mandate_request: {
  //     scheme: "bacs",
  //   },
  // });

  const billingRequests = await client.billingRequests.list();

  return {
    billingRequests,
  };
}) satisfies LayoutServerLoad;
