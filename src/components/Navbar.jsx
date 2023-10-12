import { Link } from "react-router-dom";

const Navbar = () => {
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	return (
		<div className="z-20 bg-opacity-20 backdrop-blur-md top-0 left-0 right-0  fixed">
			<div className="navbar flex flex-row justify-center md:justify-between  gap-20  items-center sm:px-24 max-w-7xl mx-auto pt-4 ">
				<div className="mb-4 sm:mb-0 flex flex-row justify-between w-full items-center">
					<details className="dropdown dropdown-bottom flex sm:hidden  ">
						<summary className="ml-1 btn btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</summary>
						<ul className="menu menu-sm dropdown-content mt-2 z-10 py-2   bg-black   rounded-box w-[140px]">
							<li className="w-fit">
								<button
									className="btn btn-ghost capitalize text-lg hover:text-blue-600 hover:shadow-[0px_0px_30px_10px_#0018b7] transition ease-in-out duration-500 pt-2 md:pt-0"
									onClick={scrollToTop}
								>
									<Link to="/">Home </Link>
								</button>
							</li>
							<li className="w-fit">
								<button
									className="btn btn-ghost capitalize text-lg hover:text-blue-600 hover:shadow-[0px_0px_30px_10px_#0018b7] transition ease-in-out duration-500 pt-2 md:pt-0"
									onClick={scrollToTop}
								>
									<Link to="/career">Careers </Link>
								</button>
							</li>
							<li className="w-fit">
								<button className="btn btn-ghost capitalize text-lg hover:text-blue-600 hover:shadow-[0px_0px_30px_10px_#0018b7] transition ease-in-out duration-500 pt-2 md:pt-0">
									<Link to="mailto:pleasecontact@ideaflow.io">Contact Us</Link>
								</button>
							</li>
						</ul>
					</details>
					<div>
						<button
							className="btn btn-ghost normal-case font-normal text-[40px]"
							id="logo"
							onClick={scrollToTop}
						>
							<Link to="/">Ideaflow</Link>
						</button>
					</div>
					<details className="dropdown flex sm:hidden invisible ">
						<summary className="m-0 btn btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</summary>
						<ul className="menu menu-sm dropdown-content mt-0 z-[1] py-2 shadow bg-transparent rounded-box w-fit border">
							<li>
								<button
									className="btn btn-ghost capitalize text-lg hover:text-blue-600 hover:shadow-[0px_0px_30px_10px_#0018b7] transition ease-in-out duration-500"
									onClick={scrollToTop}
								>
									<Link to="/">Home </Link>
								</button>
							</li>
							<li>
								<button
									className="btn btn-ghost capitalize text-lg hover:text-blue-600 hover:shadow-[0px_0px_30px_10px_#0018b7] transition ease-in-out duration-500"
									onClick={scrollToTop}
								>
									<Link to="/career">Careers </Link>
								</button>
							</li>
							<li>
								<button className="btn btn-ghost capitalize text-lg hover:text-blue-600 hover:shadow-[0px_0px_30px_10px_#0018b7] transition ease-in-out duration-500">
									<Link to="mailto:pleasecontact@ideaflow.io">Contact Us</Link>
								</button>
							</li>
						</ul>
					</details>
				</div>

				<div className="sm:flex hidden flex-col sm:flex-row sm:gap-4 gap-2">
					<button
						className="btn btn-ghost capitalize text-lg hover:text-blue-600 hover:shadow-[0px_0px_30px_10px_#0018b7] transition ease-in-out duration-500"
						onClick={scrollToTop}
					>
						<Link to="/">Home </Link>
					</button>
					<button
						className="btn btn-ghost capitalize text-lg hover:text-blue-600 hover:shadow-[0px_0px_30px_10px_#0018b7] transition ease-in-out duration-500"
						onClick={scrollToTop}
					>
						<Link to="/career">Careers </Link>
					</button>
					<button className="btn btn-ghost capitalize text-lg hover:text-blue-600 hover:shadow-[0px_0px_30px_10px_#0018b7] transition ease-in-out duration-500">
						<Link to="mailto:pleasecontact@ideaflow.io">Contact Us</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
