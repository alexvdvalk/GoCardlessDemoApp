<script lang="ts">
  import CordAuthForm from "$lib/components/CordAuthForm.svelte";
  import CordSdk from "$lib/components/CordSDK.svelte";
  import CordThread from "$lib/components/CordThread.svelte";
  export let form;
</script>

<CordSdk clientAuthToken={form?.key}>
  <CordAuthForm />
  <CordThread threadId="first" />
  <CordThread threadId="second" />
</CordSdk>
