// import React from "react";
import info3 from "../assets/info33.jpg";

const Puzzles = () => {
	return (
		<div className="flex flex-col md:flex-row justify-center md:gap-20 gap-10 items-center md:px-28 max-w-7xl mx-auto py-10">
			<div className="w-[600px]">
				<img className="w-[600px] rounded-full" src={info3} alt="puzzles-img" />
			</div>
			<div className="flex flex-col justify-center items-start gap-2 w-[350px]">
				<h1 className="text-[40px] leading-[45px] ">
					Connecting people with matching puzzle pieces
				</h1>

				<div className="border-2 border-white md:w-[335px] mt-3 mb-5 "></div>
				<p className="text-xl leading-6 font-normal italic w-[300px]">
					There are millions of scientists trying to cure the likes of AIDS and
					Alzheimer’s. Maybe the cure is currently separated in different
					people’s heads. How can we design the web so that these half-formed
					solutions can come together?
				</p>
				<p className="mt-2 text-[22px] italic font-semibold">
					- Sir Tim Berners-Lee,
				</p>
				<p className="ml-3 leading-[4px] italic text-[22px] font-semibold">
					Creator of the Web
				</p>
			</div>
		</div>
	);
};

export default Puzzles;
