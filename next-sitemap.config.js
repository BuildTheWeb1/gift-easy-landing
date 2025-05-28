/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: "https://gift-easy.com", // Update this with your actual domain when available
	generateRobotsTxt: true,
	generateIndexSitemap: false,
	robotsTxtOptions: {
		additionalSitemaps: ["https://gift-easy.com/sitemap.xml"],
		policies: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
	},
	outDir: "public",
	priority: 0.7, // Default priority
	changefreq: "weekly", // Default change frequency
	exclude: ["/api/*"], // Exclude API routes
};
