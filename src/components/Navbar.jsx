// import React from "react";

const Navbar = () => {
	return (
		<div className="navbar flex flex-col md:flex-row md:justify-between md:items-center md:px-24 max-w-7xl mx-auto pt-4 z-20 bg-opacity-20 backdrop-blur-md top-0 left-10 fixed ">
			<div className="mb-4 md:mb-0">
				<a
					className="btn btn-ghost normal-case font-normal text-[40px]"
					id="logo"
				>
					Ideaflow
				</a>
			</div>

			<div className="flex flex-col md:flex-row md:gap-4 gap-2">
				<button className="btn btn-ghost capitalize text-lg hover:text-blue-600 hover:shadow-[0px_0px_30px_10px_#0018b7] transition ease-in-out duration-500">
					Home{" "}
				</button>
				<button className="btn btn-ghost capitalize text-lg hover:text-blue-600 hover:shadow-[0px_0px_30px_10px_#0018b7] transition ease-in-out duration-500">
					Careers{" "}
				</button>
				<button className="btn btn-ghost capitalize text-lg hover:text-blue-600 hover:shadow-[0px_0px_30px_10px_#0018b7] transition ease-in-out duration-500">
					Contact Us
				</button>
			</div>
		</div>
	);
};

export default Navbar;
