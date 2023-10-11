import info3 from "../assets/info33.jpg";
import { Link } from "react-router-dom";

const Future = () => {
	function scrollToJobs() {
		const jobsElement = document.getElementById("jobs");

		if (jobsElement) {
			jobsElement.scrollIntoView({ behavior: "smooth" });
		}
	}

	return (
		<div className="flex flex-col-reverse md:flex-row justify-center gap-10 items-center md:px-24 px-10 max-w-7xl mx-auto pt-24">
			<div className="flex flex-col justify-center md:items-start items-center text-center md:text-left gap-5 xl:w-[400px] lg:w-[350px] md:w-[300px] w-full px-5 md:px-0 ">
				<h1 className="lg:text-[45px] md:text-[35px] text-[30px] leading-[55px] font-bold ">
					Help Us Build the Future of the Web
				</h1>

				<p className="md:text-xl text-base leading-6 font-normal  xl:w-[380px] lg:w-[330px] md:w-[280px] w-full px-5 md:px-0 mx-auto mt-2">
					“[Ideaflow] is a key step to realizing the potential of the Web as a
					medium for collective intelligence.”
				</p>
				<p className=" lg:text-[22px] md:text-[19px] text-[16px]  font-semibold">
					- Marty Weiner, Former CTO, Reddit
				</p>
				<button
					className="btn btn-outline hover:bg-[#0018b7] hover:shadow-[0px_0px_30px_12px_#0018b7] transition ease-in-out duration-500  text-blue-700 border-2 hover:border-[#0018b7] md:text-lg text-base mt-2 ml-3"
					onClick={scrollToJobs}
				>
					<Link to="#jobs">Hiring Key Roles</Link>
				</button>
			</div>
			<div className="xl:w-[600px] lg:w-[500px] md:w-[400px] w-[350px] px-5 md:px-0 ">
				<img
					className="xl:w-[600px] lg:w-[500px] md:w-[400px] w-[350px] px-5 md:px-0 rounded-full"
					src={info3}
					alt="puzzles-img"
				/>
			</div>
		</div>
	);
};

export default Future;
