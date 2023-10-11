// import React from "react";
import info2 from "../assets/info22.jpg";

const AutoSuggest = () => {
	return (
		<div className="flex flex-col-reverse md:flex-row justify-center md:gap-20 gap-10 items-center md:px-28 px-16 max-w-7xl mx-auto py-10">
			<div className="flex flex-col justify-center md:items-start items-center gap-2 xl:w-[350px] lg:w-[300px] md:w-[250px] w-full px-16 md:px-0">
				<h1 className="xl:text-[40px] md:text-[35px] text-[30px] leading-[45px] text-center md:text-left ">
					The auto-suggest layer for human thinking
				</h1>

				<div className="border-2 border-white xl:w-[310px] lg:w-[240px] md:w-[200px] w-full mt-3 mb-5"></div>
				<p className="md:text-xl text-[17px] text-center md:text-left leading-6 font-normal  xl:w-[300px] lg:w-[250px] md:w-[200px] w-full px-7 md:px-0 mb-4">
					Connect fragments of information from siloed sources faster than ever
					before.
				</p>
				<p className="md:text-xl text-[17px] text-center md:text-left leading-6 font-normal  xl:w-[300px] lg:w-[250px] md:w-[200px] w-full px-7 md:px-0 mb-5">
					Your organization&apos;s collective memory at your fingertips.
				</p>
				<button className="btn btn-outline hover:bg-[#0018b7] hover:shadow-[0px_0px_30px_12px_#0018b7] transition ease-in-out duration-500  text-blue-700 border-2 hover:border-[#0018b7] md:text-lg text-sm">
					<a
						href="https://docs.google.com/forms/d/1yhBzEkGB_nyDx9mVOQHsXvF3G1ovK4_SfAvh0TYAUds/viewform?edit_requested=true"
						target="_blank"
						rel="noreferrer"
					>
						Learn More
					</a>
				</button>
			</div>
			<div className="md:w-[600px] w-[380px] sm:px-10 px-5 md:px-0">
				<img
					className="md:w-[600px] w-[380px] rounded-[50px] "
					src={info2}
					alt="puzzles-img"
				/>
			</div>
		</div>
	);
};

export default AutoSuggest;
