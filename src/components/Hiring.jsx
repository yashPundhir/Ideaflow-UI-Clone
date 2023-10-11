import { Link } from "react-router-dom";

const Hiring = () => {
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	return (
		<div className="flex flex-col justify-center gap-5 items-center md:px-28 lg:w-[1000px] md:w-[700px] sm:w-[450px] w-[350px] max-w-7xl mx-auto my-10 py-10  rounded-[50px]  bg-gradient-to-b from-[rgba(0,24,183,0.35)] via-black to-[rgba(0,24,183,0.35)] border-2 border-blue-600 hover:shadow-[0px_0px_30px_22px_#0018b7] transition ease-in-out duration-500">
			<h1 className="md:text-[45px] sm:text-[30px] text-[25px]">
				We&apos;re Hiring Key Roles
			</h1>
			<p className="md:text-[25px] sm:text-[18px] text-[14px] mb-2">
				Help us extend the human mind.
			</p>
			<button
				className="btn btn-outline hover:bg-[#0018b7] hover:shadow-[0px_0px_30px_12px_#0018b7] transition ease-in-out duration-500  text-blue-700 border-2 hover:border-[#0018b7] md:text-lg sm:text-sm text-xs"
				onClick={scrollToTop}
			>
				<Link to="/career">Join us or refer someone!</Link>
			</button>
		</div>
	);
};

export default Hiring;
