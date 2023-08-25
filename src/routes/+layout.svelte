<script>
  import "../app.postcss";

  import { navigating } from "$app/stores";
  import GcNav from "./gc/home/GCNav.svelte";
  import NavLinks from "./gc/home/NavLinks.svelte";
  import { AppShell, ProgressRadial } from "@skeletonlabs/skeleton";
  import { initializeStores, Drawer } from "@skeletonlabs/skeleton";

  initializeStores();
</script>

<!-- <Drawer>(contents)</Drawer> -->

<Drawer>
  <h2 class="p-4">Navigation</h2>
  <hr />
  <NavLinks />
</Drawer>

{#if $navigating}
  <div class="w-full h-full flex justify-center items-center">
    <ProgressRadial
      stroke={100}
      meter="stroke-primary-500"
      track="stroke-primary-500/30"
    />
  </div>
{:else}
  <AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-48">
    <svelte:fragment slot="sidebarLeft">
      <NavLinks />
    </svelte:fragment>
    <svelte:fragment slot="header">
      <!-- <TheHeader /> -->
      <GcNav />
    </svelte:fragment>
    <slot />
  </AppShell>
{/if}
