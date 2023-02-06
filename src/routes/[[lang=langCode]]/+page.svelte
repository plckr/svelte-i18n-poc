<script lang="ts">
	import { goto } from '$app/navigation';
	import { LL, locale } from '$i18n/i18n-svelte';
	import { locales } from '$i18n/i18n-util';
	import WrapTranslation from '$lib/components/wrap-translation.svelte';

	const onLangChange = (evt: Event) => {
		const { value } = evt.target as HTMLSelectElement;
		if (value) {
			goto(`/${value}`);
		}
	};
</script>

<h1>{$LL.WELCOME({ name: 'SvelteKit' })}</h1>
<p>
	<WrapTranslation message={$LL.VISIT_WEBSITE({ url: 'kit.svelte.dev' })} let:infix>
		<a href="https://kit.svelte.dev">{infix}</a>
	</WrapTranslation>
</p>

<select on:change={onLangChange}>
	{#each locales as loc}
		<option value={loc} selected={$locale === loc}>
			{loc.toUpperCase()}
		</option>
	{/each}
</select>
