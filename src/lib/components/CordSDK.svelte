<script lang="ts">
  import { cordSdk } from "$lib/store";

  export let clientAuthToken: string | undefined;

  $: if (clientAuthToken) initCord(clientAuthToken);

  const initCord = (token: string | undefined) => {
    if (!token) return;
    (window as any).CordSDK.init({
      client_auth_token: token,
    });
    $cordSdk = (window as any).CordSDK;
  };
</script>

<slot />
