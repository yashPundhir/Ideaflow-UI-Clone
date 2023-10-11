import { Link } from "react-router-dom";

const Navbar = () => {
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	return (
		<div className="z-20 bg-opacity-20 backdrop-blur-md top-0 left-0 right-0  fixed">
			<div className="navbar flex flex-col sm:flex-row sm:justify-between sm:items-center sm:px-24 max-w-7xl mx-auto pt-4 ">
				<div className="mb-4 sm:mb-0">
					<button
						className="btn btn-ghost normal-case font-normal text-[40px]"
						id="logo"
						onClick={scrollToTop}
					>
						<Link to="/">Ideaflow</Link>
					</button>
				</div>

				<div className="flex flex-col sm:flex-row sm:gap-4 gap-2">
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
