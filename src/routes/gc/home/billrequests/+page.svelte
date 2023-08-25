<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: console.log(data);
</script>

<div class="table-container">
  <!-- Native Table Element -->
  <table class="table table-hover">
    <thead>
      <tr>
        <th>ID</th>
        <th>Date</th>
        <th>Status</th>
        <th>Currency</th>
        <th>Amount</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {#each data.billingRequests.billing_requests as row (row.id)}
        <tr>
          <td>{row.id}</td>
          <td>{new Date(row.created_at).toLocaleDateString()}</td>
          <td>{row.status}</td>
          <td>{row.mandate_request.currency}</td>
          <td>{row.payment_request.amount / 100}</td>
          <td>{row.payment_request.description}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
