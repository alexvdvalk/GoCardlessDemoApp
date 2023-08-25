<script lang="ts">
  import { getDrawerStore } from "@skeletonlabs/skeleton";

  const drawerStore = getDrawerStore();
  function drawerClose(): void {
    drawerStore.close();
  }
</script>

<nav class="list-nav p-4">
  <ul>
    <li>
      <a href="/gc/home" on:click={drawerClose}>New Billing Request</a>
    </li>
    <li>
      <a href="/gc/home/billrequests" on:click={drawerClose}
        >View All Requests</a
      >
    </li>
  </ul>
</nav>
