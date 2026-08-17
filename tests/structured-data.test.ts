import assert from "node:assert/strict";
import test from "node:test";
import { faqItems } from "../src/app/data/faqData";
import {
	buildFaqSchema,
	buildOrganizationSchema,
	buildWebApplicationSchema,
} from "../src/lib/structuredData";

test("FAQ schema stays aligned with faqItems", () => {
	const schema = buildFaqSchema();

	assert.equal(schema["@type"], "FAQPage");
	assert.equal(schema.mainEntity.length, faqItems.length);
	assert.deepEqual(
		schema.mainEntity.map((item) => item.name),
		faqItems.map((item) => item.question),
	);
});

test("web application schema keeps the free-first-recommendation positioning", () => {
	const schema = buildWebApplicationSchema();

	assert.equal(schema["@type"], "WebApplication");
	assert.equal(schema.offers.price, "0");
	assert.ok(
		schema.featureList.includes("First recommendation free, no signup required"),
	);
});

test("organization schema points at the landing domain", () => {
	const schema = buildOrganizationSchema();

	assert.equal(schema.name, "GiftEasy");
	assert.equal(schema.url, "https://gift-easy.com");
	assert.match(schema.logo, /^https:\/\/gift-easy\.com\//);
});
