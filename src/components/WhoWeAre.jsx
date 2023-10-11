import pol1 from "../assets/pol1.png";
import pol2 from "../assets/pol2.png";
import pol3 from "../assets/pol3.png";
import Tilt from "react-parallax-tilt";

const WhoWeAre = () => {
	return (
		<div className="flex flex-col-reverse md:flex-row justify-center md:gap-16 gap-10 items-center md:px-32 px-10 max-w-7xl mx-auto pb-10 pt-20">
			<div className="flex flex-col justify-center md:items-start items-center gap-2 lg:w-1/2 w-auto ">
				<h1 className="text-[40px] leading-[45px] px-20 md:px-5 text-center md:text-left">
					Who we are
				</h1>

				<div className="border-2 border-white w-[220px] mt-0 mb-5 ml-0 md:ml-5"></div>
				<p className="text-xl leading-6 font-normal text-center md:text-left lg:w-[380px] md:w-[300px] w-auto px-20 md:px-5 mb-5">
					We are: engineers with an artistic impulse, veteran entrepreneurs,
					community builders, curators of quotes, hosts of intellectual salons,
					side project fanatics, lovers of nature and human nature – all united
					by a desire to scale our ability to help people, and to help the
					Internet continue to truly serve on the side of the user.
				</p>
				<p className="text-xl leading-6 font-normal text-center md:text-left lg:w-[380px] md:w-[300px] w-auto px-20 md:px-5 mb-5">
					We believe in the power of small, highly-skilled teams with a deep
					sense of mutual respect. In each role, we are looking for a special
					sort of person with strong bias towards action to become deeply
					passionate about the product and take tremendous ownership.
				</p>
				<p className="text-xl leading-6 font-normal text-center md:text-left lg:w-[380px] md:w-[300px] w-auto px-20 md:px-5 mb-5">
					At Ideaflow, it’s important for you to be yourself, nurture your
					creativity, and grow in well being. Join us in building a future where
					humans and machines work together to solve the world’s most important
					problems.
				</p>
			</div>
			<div className="lg:w-1/2 w-auto ">
				<Tilt>
					<div className="flex flex-col gap-5  lg:w-[450px] md:w-[380px] w-[350px] border-2 border-blue-600 bg-[#101010] rounded-2xl px-10 py-10 cursor-pointer hover:shadow-[0px_0px_30px_18px_#0018b7] transition ease-in-out duration-500">
						<div className="flex justify-start items-center gap-8 ">
							<div className=" w-1/4">
								<img
									className="lg:w-[100px] md:w-[70px] w-[50px]"
									src={pol1}
									alt="testimonial-image"
								/>
							</div>
							<div className="flex flex-col w-3/4  items-start justify-center gap-1 ">
								<p className="lg:text-[22px] md:text-[18px] text-[15px] font-normal">
									$500 per month to promote well being
								</p>
							</div>
						</div>
						<div className="flex justify-start items-center gap-8 ">
							<div className="w-1/4">
								<img
									className="lg:w-[100px] md:w-[70px] w-[50px]"
									src={pol2}
									alt="testimonial-image"
								/>
							</div>
							<div className="flex flex-col w-3/4  items-start justify-center gap-1 ">
								<p className="lg:text-[22px] md:text-[18px] text-[15px] font-normal">
									Comprehensive healthcare coverage (including acupuncture!)
								</p>
							</div>
						</div>
						<div className="flex justify-start items-center gap-8 ">
							<div className="w-1/4">
								<img
									className="lg:w-[100px] md:w-[70px] w-[50px]"
									src={pol3}
									alt="testimonial-image"
								/>
							</div>
							<div className="flex flex-col w-3/4 items-start justify-center gap-1 ">
								<p className="lg:text-[22px] md:text-[18px] text-[15px] font-normal">
									Donation matching to your favorite charities
								</p>
							</div>
						</div>
					</div>
				</Tilt>
			</div>
		</div>
	);
};

export default WhoWeAre;
