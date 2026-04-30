import {
	buildFaqSchema,
	buildOrganizationSchema,
	buildWebApplicationSchema,
} from "@/lib/structuredData";
import Script from "next/script";

export default function SchemaMarkup() {
	const schemas = [
		buildOrganizationSchema(),
		buildWebApplicationSchema(),
		buildFaqSchema(),
	];

	return (
		<>
			{schemas.map((schema, index) => (
				<Script
					key={schema["@type"]}
					id={`schema-markup-${index}`}
					type="application/ld+json"
				>
					{JSON.stringify(schema)}
				</Script>
			))}
		</>
	);
}
