<script lang="ts">
  export let threadId: string;
  import { cordSdk } from "$lib/store";
</script>

{#if threadId && $cordSdk}
  <div class="card m-4 rounded-md">
    <cord-thread thread-id={threadId} />
  </div>
{/if}
