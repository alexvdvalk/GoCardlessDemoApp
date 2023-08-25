<script lang="ts">
  import { cordSdk } from "$lib/store";
  import { AppBar } from "@skeletonlabs/skeleton";
</script>

<AppBar>
  <svelte:fragment slot="lead">
    <div class="flex gap-5">
      <a class="btn variant-filled" href="/">Home</a>
      <a class="btn variant-filled" href="/threads">Threads</a>
    </div>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    {#if $cordSdk}
      <button
        class="btn variant-filled"
        on:click={() => {
          $cordSdk = null;
        }}>Log out</button
      >
      <cord-page-presence />
    {/if}
  </svelte:fragment>
</AppBar>

<style>
  cord-page-presence {
    border: 1px #ccc solid;
    border-radius: 12px;
  }
</style>
