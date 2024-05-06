import injectUI, { isAlreadyInjected } from '../lib/inject-ui';
import { isEnabled } from '../lib/is-enabled';
import { Store } from '../store';

//export function checkSite(): boolean {
//	return !!document.querySelector('#stream_pagelet');
//}

export function eradicate(store: Store) {
	function eradicateRetry() {
		const settings = store.getState().settings;
		if (settings == null || !isEnabled(settings)) {
			return;
		}

		// Remove notification text from document.title (i.e. '(7)' in '(7) Facebook')
		if (document.title !== 'Facebook') {
			document.title = 'Facebook';
		}

		const navibar = 
			document.querySelector('ul.xuk3077.x78zum5.x1iyjqo2.xl56j7k.x1p8ty84.x1na7pl.x88anuq');

		// console.log(navibar);
		if (navibar != null && navibar.parentNode != null) {
			navibar.parentNode.removeChild(navibar);
		}

		const sidebar = 
			document.querySelector('div.x78zum5.xdt5ytf.x1iyjqo2.x1us19tq');
		// console.log(sidebar);

		if (sidebar != null && sidebar.parentNode != null) {
			sidebar.parentNode.removeChild(sidebar);
		}

		// Don't do anything if the FB UI hasn't loaded yet
		const feed =
			document.querySelector('div.xh8yej3.x1gslohp#watch_feed') || // For watch
			document.querySelector('div[aria-label=Gaming][role=main]') || // For gaming feed
			document.querySelector('div.x9f619.x1n2onr6.x1ja2u2z.x2lah0s.x1qjc9v5.x78zum5.x1q0g3np.x1a02dak.xl56j7k.x9otpla.x1n0m28w.x1wsgfga.xp7jhwk') || // For group feed
			document.querySelector('div.x1xfsgkm.xqmdsaz.x1mtsufr.x1w9j1nh.x1t9mz0v') || // For marketplace feed
			document.querySelector('div.x1hc1fzr.x1unhpq9.x6o7n8i'); // For new fb layout (Q4 2022)

		// console.log(feed)
		if (feed == null) {
			return;
		}

		const container = feed.parentNode;
		// console.log("Container:", container);
	
		
		if (container != null) {
			container.removeChild(feed);
		}

		// Add News Feed Eradicator quote/info panel
		if (container && !isAlreadyInjected()) {
			injectUI(container, store);
		}
	}

	// This delay ensures that the elements have been created by Facebook's
	// scripts before we attempt to replace them
	
	setInterval(eradicateRetry, 1000);
}
