<script lang="ts">
  import { enhance } from "$app/forms";
  import { cordSdk } from "$lib/store";
</script>

{#if !$cordSdk}
  <div class="flex justify-center">
    <form
      method="POST"
      class="card m-4 p-4 w-full md:w-1/2 lg:w-1/3"
      use:enhance
    >
      <label class="label">
        <input
          class="input"
          name="username"
          type="text"
          placeholder="Username"
        />
      </label>
      <div class="flex justify-center pt-2">
        <button type="submit" class="btn variant-filled-surface w-48"
          >Login</button
        >
      </div>
    </form>
  </div>
{/if}
