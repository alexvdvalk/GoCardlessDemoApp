<script lang="ts">
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<div class="container p-8 mx-auto">
  <slot />
</div>
