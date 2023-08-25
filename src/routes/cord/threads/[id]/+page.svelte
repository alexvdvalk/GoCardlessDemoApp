<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: console.log(data);

  $: console.log(data);
</script>

<div class="table-container">
  <!-- Native Table Element -->
  <table class="table table-hover">
    <thead>
      <tr>
        <th>ID</th>
        <th>Author</th>
        <th>Message</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {#each data.messages as message (message.id)}
        <tr>
          <td>{message.id}</td>
          <td>{message.authorID}</td>
          <td>{message.plaintext}</td>
          <td>{new Date(message.createdTimestamp).toLocaleString()}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
