// import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
	return (
		<div className="flex flex-col-reverse md:flex-row justify-center md:gap-[90px] gap-10 items-center md:px-24 max-w-7xl mx-auto pt-24">
			<div className="flex flex-col justify-center items-start gap-8 ">
				<div>
					<h1 className="text-[50px] font-bold leading-[60px]">
						The Intelligence
					</h1>
					<h1 className="text-[50px] font-bold leading-[60px]">
						{" "}
						Amplification Company
					</h1>
				</div>
				<p className="max-w-[500px] text-[22px] leading-7 ">
					We’re creating an ecosystem for humans and machines to work together
					to solve the world’s most important problems – starting with a
					notebook that augments your intelligence.
				</p>
				<button className="btn btn-outline hover:bg-[#0018b7] hover:shadow-[0px_0px_30px_12px_#0018b7] transition ease-in-out duration-500  text-blue-700 border-2 hover:border-[#0018b7] text-lg">
					Try Ideaflow Notes
				</button>
			</div>
			<div className="w-[400px] ">
				<img src={hero} className="w-[400px]" alt="hero-img" />
			</div>
		</div>
	);
};

export default Hero;
