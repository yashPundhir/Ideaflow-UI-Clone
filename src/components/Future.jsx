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
		<div className="flex flex-col-reverse md:flex-row justify-center gap-10 items-center md:px-24 max-w-7xl mx-auto pt-24">
			<div className="flex flex-col justify-center items-start gap-5 w-[400px] ">
				<h1 className="text-[45px] leading-[55px] font-bold ">
					Help Us Build the Future of the Web
				</h1>

				<p className="text-xl leading-6 font-normal  w-[380px] mx-auto mt-2">
					“[Ideaflow] is a key step to realizing the potential of the Web as a
					medium for collective intelligence.”
				</p>
				<p className=" text-[22px]  font-semibold">
					- Marty Weiner, Former CTO, Reddit
				</p>
				<button
					className="btn btn-outline hover:bg-[#0018b7] hover:shadow-[0px_0px_30px_12px_#0018b7] transition ease-in-out duration-500  text-blue-700 border-2 hover:border-[#0018b7] text-lg mt-2 ml-3"
					onClick={scrollToJobs}
				>
					<Link to="#jobs">Hiring Key Roles</Link>
				</button>
			</div>
			<div className="w-[600px] ">
				<img className="w-[600px] rounded-full" src={info3} alt="puzzles-img" />
			</div>
		</div>
	);
};

export default Future;
