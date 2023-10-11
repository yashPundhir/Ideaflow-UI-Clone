import testimonials from "../utils/constants";
import Tilt from "react-parallax-tilt";

const Cards = () => {
	return (
		<div className="flex flex-col md:flex-row justify-center flex-wrap gap-10 items-center md:px-28 max-w-7xl mx-auto py-10">
			{testimonials.map((item, index) => (
				<Tilt key={index}>
					<div className="flex flex-col justify-center items-start gap-8 md:w-[320px] w-[280px] border-2 border-blue-600 bg-[#101010] rounded-2xl px-7 py-5 cursor-pointer hover:shadow-[0px_0px_30px_18px_#0018b7] transition ease-in-out duration-500">
						<div className="flex justify-start items-center gap-4">
							<div className="w-1/2">
								<img
									className="w-[100px]"
									src={item.img}
									alt="testimonial-image"
								/>
							</div>
							<div className="flex flex-col w-2/3 items-start justify-center gap-1 ">
								<p className="text-[20px] font-bold">{item.name}</p>
								<p className="text-base leading-5">{item.desc}</p>
							</div>
						</div>
						<div className="text-lg leading-6">{item.content}</div>
					</div>
				</Tilt>
			))}
		</div>
	);
};

export default Cards;
