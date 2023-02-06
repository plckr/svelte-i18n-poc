import type { LayoutLoad } from './$types';
import { loadLocaleAsync } from '$i18n/i18n-util.async';
import { setLocale } from '$i18n/i18n-svelte';
import { detectLocale, baseLocale } from '$i18n/i18n-util';
import { redirect } from '@sveltejs/kit';

export const load = (async (event) => {
	// Detect the locale
	const locale = detectLocale(() => [event.params.lang ?? '']);

	if (event.url.pathname.startsWith(`/${baseLocale}`)) {
		throw redirect(301, event.url.pathname.replace(`/${baseLocale}`, '/'));
	}
	// Load it
	await loadLocaleAsync(locale);
	// Set it
	setLocale(locale);

	return event.data;
}) satisfies LayoutLoad;
