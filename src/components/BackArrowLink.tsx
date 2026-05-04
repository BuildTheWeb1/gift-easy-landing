"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { MouseEvent } from "react";

type BackArrowLinkProps = {
	fallbackHref?: string;
	label?: string;
};

export function BackArrowLink({
	fallbackHref = "/",
	label = "Back",
}: BackArrowLinkProps) {
	const router = useRouter();

	const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
		if (typeof window !== "undefined" && window.history.length > 1) {
			event.preventDefault();
			router.back();
		}
	};

	return (
		<Link
			href={fallbackHref}
			onClick={handleClick}
			className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 py-2 pr-5 pl-3 text-sm font-semibold text-stone-900 transition-colors hover:border-amber-300 hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
			aria-label={label}
		>
			<ArrowLeft className="size-4" aria-hidden="true" />
			<span>{label}</span>
		</Link>
	);
}
