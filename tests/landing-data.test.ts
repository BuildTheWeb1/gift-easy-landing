import assert from "node:assert/strict";
import test from "node:test";
import {
	demoScenarios,
	occasionLinks,
	primaryCtaHref,
} from "../src/app/data/landingPageData";

test("every demo scenario shows at least two concrete gift examples", () => {
	for (const scenario of demoScenarios) {
		assert.ok(scenario.input.length > 30);
		assert.match(scenario.appHref, /^https:\/\/app\.gift-easy\.com\/\?/);
		assert.ok(scenario.results.length >= 2);

		for (const result of scenario.results) {
			assert.ok(result.title.length > 3);
			assert.ok(result.hook.length > 20);
			assert.equal(result.href, scenario.appHref);
		}
	}
});

test("occasion links point into the app flow", () => {
	assert.ok(occasionLinks.length >= 12);

	for (const item of occasionLinks) {
		assert.match(item.href, /^https:\/\/app\.gift-easy\.com\/\?/);
		assert.ok(item.occasion.length > 0);
	}
});
