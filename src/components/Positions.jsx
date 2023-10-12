import { positions } from "../utils/constants";

const Positions = () => {
	return (
		<div className="md:px-28 max-w-7xl mx-auto pb-10 pt-16" id="jobs">
			<h1 className="w-full text-center mb-5 text-[45px] font-semibold">
				Open Positions
			</h1>
			<div className="flex justify-center items-center mb-12">
				<button className="btn btn-outline hover:bg-[#0018b7] hover:shadow-[0px_0px_30px_12px_#0018b7] transition ease-in-out duration-500  text-blue-700 border-2 hover:border-[#0018b7] md:text-xl text-base normal-case ">
					<a
						href="https://zesty-echo-8fc.notion.site/Ideaflow-io-Engineering-Hiring-2023-247be776f95c4cfc9d27277510b078f1?pvs=4"
						target="_blank"
						rel="noreferrer"
					>
						Ideaflow.io Engineering Hiring Update 2023
					</a>
				</button>
			</div>

			<div className="flex flex-col justify-center md:items-start items-center gap-7  md:w-full w-[340px]  md:mx-0 mx-auto border-2 border-blue-600 bg-[#101010] rounded-2xl md:px-8 px-12 py-8 cursor-pointer hover:shadow-[0px_0px_30px_18px_#0018b7] transition ease-in-out duration-500 mb-10">
				<div className="flex flex-col justify-center md:items-start items-center text-center md:text-left gap-0 ">
					<div className="text-[35px] font-semibold leading-10 w-full ">
						Full Stack Engineer
					</div>
					<div className="text-[20px] font-normal mt-2 md:mt-0">Remote</div>
				</div>
				<div>
					<p className="text-[22px] font-light text-center md:text-left">
						Who has significant frontend experience and is up to the challenge
						of writing something as complex and high performance as an IDE in
						JavaScript.
					</p>
				</div>
				<div>
					<button className="btn btn-outline hover:bg-[#0018b7]  transition ease-in-out duration-500  text-blue-700 border-2 hover:border-[#0018b7] text-lg">
						<a
							href="https://www.ideaflow.io/full-stack-engineer"
							target="_blank"
							rel="noreferrer"
						>
							Apply Now
						</a>
					</button>
				</div>
			</div>

			<h1 className="mb-10 md:w-full w-[380px] mx-auto md:mx-0  text-center text-[22px] font-light">
				&quot;We need to create extensions of our ability to make sense of the
				world together.&quot; ~Jerry Michalski
			</h1>
			<div className="flex flex-col md:flex-row justify-center flex-wrap gap-10 items-center ">
				{positions.map((item, index) => (
					<div
						key={index}
						className="flex flex-col gap-7  md:w-[450px] w-[340px] border-2 border-blue-600 bg-[#101010] rounded-2xl px-8 py-8 cursor-pointer hover:shadow-[0px_0px_30px_18px_#0018b7] transition ease-in-out duration-500"
					>
						<div className="flex flex-col justify-center md:items-start items-center text-center md:text-left gap-0 ">
							<div className="text-[35px] font-semibold leading-10">
								{item.title}
							</div>
							<div className="text-[20px] font-normal">{item.location}</div>
						</div>
						<div>
							<p className="text-[22px] font-light text-center md:text-left">
								{item.desc}
							</p>
						</div>
						<div className="text-center md:text-left">
							<button className="btn btn-outline hover:bg-[#0018b7]  transition ease-in-out duration-500  text-blue-700 border-2 hover:border-[#0018b7] text-lg">
								<a href={item.link} target="_blank" rel="noreferrer">
									Apply Now
								</a>
							</button>
						</div>
					</div>
				))}
			</div>
			<h1 className="my-10 md:w-full w-[380px] mx-auto md:mx-0 px-5 text-center text-[22px] font-light">
				&ldquo;Art is that which holds your attention beyond
				practicality.&ldquo;
			</h1>
			<h1 className="mt-16 mb-8 md:w-full w-[380px] mx-auto md:mx-0 px-5 text-center text-[22px] font-light ">
				We believe diverse teams are the most effective – female and minority
				candidates are strongly encouraged to apply!
			</h1>
			<div className="flex flex-col md:flex-row justify-center items-center gap-5">
				<span className="text-2xl">Further Reading:</span>
				<button className="btn btn-outline hover:bg-[#0018b7] hover:shadow-[0px_0px_30px_12px_#0018b7] transition ease-in-out duration-500  text-blue-700 border-2 hover:border-[#0018b7] text-lg">
					<a
						href="http://hiringblurb.jacobcole.net/"
						target="_blank"
						rel="noreferrer"
					>
						Click Here
					</a>
				</button>
			</div>
		</div>
	);
};

export default Positions;
