<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  export let form;

  // $: console.log("data", data);
  $: console.log("form", form);
</script>

<!-- {JSON.stringify(data.billingRequests.)} -->
<!-- <ul>
  {#each data.billingRequests.billing_requests as rate}
    <li>
      {JSON.stringify(rate)}
    </li>
  {/each}
</ul>
 -->
<div class="flex flex-col gap-5">
  {#if form}
    <div class="card p-4 shadow-xl">
      <p>Request {form.billingRequest.id} created!</p>
      <a
        class="anchor"
        href={form.billingRequestFlow.authorisation_url}
        target="_blank">Go to Payment</a
      >
    </div>
  {/if}

  <div class="card p-4 shadow-xl">
    <form method="post" class="flex flex-col gap-4">
      <label class="label">
        <span>Description</span>
        <input
          class="input"
          type="text"
          name="description"
          placeholder="Description"
        />
      </label>
      <label class="label">
        <span>Currency</span>
        <select class="select" name="currency">
          <option value="GBP">GBP</option>
        </select>
      </label>
      <label class="label">
        <span>Amount in pence</span>
        <input class="input" type="number" name="amount" placeholder="Amount" />
      </label>
      <div class="flex justify-end">
        <button type="submit" class="btn variant-filled"
          >Create Billing Request</button
        >
      </div>
    </form>
  </div>
</div>
