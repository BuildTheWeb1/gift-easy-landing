const Footer = () => {
	return (
		<footer className="mt-12 md:mt-24 text-center text-black text-sm">
			<p className="mb-2 justify-center flex">
				follow on{" "}
				<a
					href="https://x.com/buildtheweb1"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center hover:underline"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="ml-1"
						aria-labelledby="xIconTitle"
					>
						<title id="xIconTitle">X.com (Twitter)</title>
						<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
					</svg>
				</a>
			</p>

			<p>© {new Date().getFullYear()} Gift Easy. All rights reserved.</p>
		</footer>
	);
};

export default Footer;
