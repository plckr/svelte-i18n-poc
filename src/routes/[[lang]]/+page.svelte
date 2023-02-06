<script lang="ts">
	import { LL } from '$i18n/i18n-svelte';
	import WrapTranslation from '$lib/components/wrap-translation.svelte';
</script>

<h1>{$LL.WELCOME({ name: 'SvelteKit' })}</h1>
<p>
	<WrapTranslation message={$LL.VISIT_WEBSITE({ url: 'kit.svelte.dev' })} let:infix>
		<a href="https://kit.svelte.dev">{infix}</a>
	</WrapTranslation>
</p>
