<script lang="ts">
  import { page } from "$app/stores";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<ul>
  {#each Object.keys(data.token) as row}
    <li>{row}: {data.token[row]}</li>
  {/each}
</ul>
