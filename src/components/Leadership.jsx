// import React from "react";
import { leadership } from "../utils/constants";

const Leadership = () => {
	return (
		<div className="md:px-28 px-10 max-w-7xl mx-auto pb-10 pt-16">
			<h1 className="w-full text-center mb-12 text-[45px] font-semibold">
				Leadership
			</h1>
			<div className="flex flex-col md:flex-row justify-center flex-wrap gap-10 items-center ">
				{leadership.map((item, index) => (
					<div
						key={index}
						className="flex flex-col gap-5  md:w-[450px] w-[320px] border-2 border-blue-600 bg-[#101010] rounded-2xl px-5 py-5 cursor-pointer hover:shadow-[0px_0px_30px_18px_#0018b7] transition ease-in-out duration-500"
					>
						<div className="flex justify-start items-center gap-8 ">
							<div className="">
								<img
									className="w-[100px]"
									src={item.img}
									alt="testimonial-image"
								/>
							</div>
							<div className="flex flex-col  items-start justify-center gap-1 ">
								<p className="text-[25px] font-bold">{item.name}</p>
								<p className="text-xl leading-5">{item.desc}</p>
							</div>
						</div>
						<div>
							<p className="text-[16px] font-normal">{item.content}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Leadership;
