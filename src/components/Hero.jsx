// import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
	return (
		<div className="flex flex-col-reverse md:flex-row justify-center md:gap-[90px] gap-10 items-center md:px-24 max-w-7xl mx-auto pt-24">
			<div className="flex flex-col justify-center md:items-start items-center px-10 md:px-0 text-center md:text-left gap-8 ">
				<div className="flex md:flex-col flex-row justify-center items-center gap-2 flex-wrap">
					<h1 className="lg:text-[50px] md:text-[35px] text-[25px]  font-bold lg:leading-[60px] md:leading-[40px]">
						The Intelligence <br /> Amplification Company
					</h1>
					{/* <h1 className="lg:text-[50px] md:text-[35px] text-[25px] font-bold lg:leading-[60px] md:leading-[40px] leading-[30px]">
						{" "}
						Amplification Company
					</h1> */}
				</div>
				<p className="max-w-[500px]  lg:text-[22px] md:text-[18px] text-[15px] leading-7 ">
					We’re creating an ecosystem for humans and machines to work together
					to solve the world’s most important problems – starting with a
					notebook that augments your intelligence.
				</p>
				<button className="btn btn-outline hover:bg-[#0018b7] hover:shadow-[0px_0px_30px_12px_#0018b7] transition ease-in-out duration-500  text-blue-700 border-2 hover:border-[#0018b7] text-lg">
					<a href="https://ideaflow.app/" target="_blank" rel="noreferrer">
						Try Ideaflow Notes
					</a>
				</button>
			</div>
			<div className="md:w-[400px] w-[250px] ">
				<img src={hero} className="md:w-[400px] w-[250px]" alt="hero-img" />
			</div>
		</div>
	);
};

export default Hero;
