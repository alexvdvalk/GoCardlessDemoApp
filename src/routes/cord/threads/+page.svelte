<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="table-container">
  <!-- Native Table Element -->
  <table class="table table-hover">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Organization</th>
        <th>Total</th>
        <th>#Participants</th>
      </tr>
    </thead>
    <tbody>
      {#each data.threads as row, i}
        <tr>
          <td> <a class="anchor" href={`/threads/${row.id}`}>{row.id}</a></td>
          <td>{row.name}</td>
          <td>{row.organizationID}</td>
          <td>{row.total}</td>
          <td>{row.participants.length}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
