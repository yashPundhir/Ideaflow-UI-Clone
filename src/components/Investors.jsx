// import React from "react";
import inv1 from "../assets/inv1.png";
import inv2 from "../assets/inv2.png";
import inv3 from "../assets/inv3.png";

const Investors = () => {
	return (
		<div className="flex flex-col justify-center  gap-10 items-center md:px-24 max-w-7xl mx-auto py-20">
			<h1 className="text-4xl">Backed by world-class investors and partners</h1>
			<div className="flex justify-center items-center gap-28">
				<div>
					<img className="w-[77px] h-[85px]" src={inv1} alt="inv1" />
				</div>
				<div className="pt-2">
					<img className="w-[146px] h-[80px]" src={inv2} alt="inv2" />
				</div>
				<div className="pb-4">
					<img className="w-[187px] h-[71px]" src={inv3} alt="inv3" />
				</div>
				<div className="mt-1">
					<span className="text-[40px]">+ 33 more</span>
				</div>
			</div>
		</div>
	);
};

export default Investors;
