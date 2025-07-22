import type { HeroPill } from "@/app/data/heroData";

interface HeroPillsProps {
	pill: HeroPill;
}

export const HeroPills = ({ pill }: HeroPillsProps) => {
	const { title, iconPath, viewBox = "0 0 20 20" } = pill;

	return (
		<div className="flex items-center bg-transparent border border-zinc-600 backdrop-blur-sm px-4 py-2 rounded-full">
			<div className="w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-white bg-opacity-30">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-4 w-4"
					viewBox={viewBox}
					fill="currentColor"
					aria-hidden="true"
				>
					<path d={iconPath} fillRule="evenodd" clipRule="evenodd" />
				</svg>
			</div>
			{title}
		</div>
	);
};
