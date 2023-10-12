// import React from "react";
import info3 from "../assets/info33.jpg";

const Puzzles = () => {
	return (
		<div className="flex flex-col md:flex-row justify-center md:gap-20 gap-10 items-center md:px-28 px-0 max-w-7xl mx-auto py-10">
			<div className="xl:w-[600px] lg:w-[550px] md:w-[500px] sm:w-[350px] w-[300px] ">
				<img
					className="xl:w-[600px] lg:w-[550px] md:w-[500px] sm:w-[350px] w-[300px]  rounded-full"
					src={info3}
					alt="puzzles-img"
				/>
			</div>
			<div className="flex flex-col justify-center md:items-start items-center gap-2 xl:w-[350px] lg:w-[280px] md:w-[220px] w-full px-5 md:px-0 ">
				<h1 className="lg:text-[40px] md:text-[32px] text-center md:text-left text-[25px] md:leading-[45px] leading-[35px] ">
					Connecting people with matching puzzle pieces
				</h1>

				<div className="border-2 border-white xl:w-[335px] lg:w-[250px] md:w-[200px] w-[270px] mt-3 mb-5 "></div>
				<p className="lg:text-xl md:text-lg text-base leading-6 font-normal italic lg:w-[300px] md:w-[200px] w-full md:px-0 px-5 text-center md:text-left">
					There are millions of scientists trying to cure the likes of AIDS and
					Alzheimer’s. Maybe the cure is currently separated in different
					people’s heads. How can we design the web so that these half-formed
					solutions can come together?
				</p>
				<p className="mt-2 lg:text-[22px] md:text-[17px] text-[15px] italic font-semibold">
					- Sir Tim Berners-Lee,
				</p>
				<p className="lg:ml-3 ml-0.5 leading-[4px] italic lg:text-[22px] md:text-[17px] text-[15px] font-semibold">
					Creator of the Web
				</p>
			</div>
		</div>
	);
};

export default Puzzles;
