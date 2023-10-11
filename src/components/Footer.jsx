import facebook from "../assets/facebook1.jpg";
import mail from "../assets/mail.jpg";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.jpg";

const Footer = () => {
	return (
		<div className="flex flex-col justify-center items-stretch gap-20  md:px-24  max-w-7xl mx-auto mt-20 mb-5 py-10  rounded-[50px]  ">
			<div className="flex md:flex-row flex-col justify-center flex-wrap md:gap-20 gap-10 md:items-start items-center md:pr-10">
				<div className="mt-5 w-fit">
					<a
						className="btn btn-ghost normal-case font-normal md:text-[70px] sm:text-[55px] text-[40px]"
						id="logo"
					>
						Ideaflow
					</a>
				</div>
				<div className="flex justify-center items-start gap-20  ">
					<div className="md:flex flex-col hidden  items-start justify-center  gap-2">
						<h1 className="text-xl mb-2 font-semibold">#rabbithole</h1>
						<button className=" capitalize font-light text-base">
							<a
								href="https://en.wikipedia.org/wiki/Memex"
								target="_blank"
								rel="noreferrer"
							>
								Memex
							</a>
						</button>
						<button className=" capitalize font-light text-base">
							<a
								href="https://zettelkasten.de/introduction/"
								target="_blank"
								rel="noreferrer"
							>
								Niklas Luhmann&apos;s Zettelkasten
							</a>
						</button>
						<button className=" capitalize font-light text-base">
							<a
								href="https://en.wikipedia.org/wiki/Collective_intelligence"
								target="_blank"
								rel="noreferrer"
							>
								Collective IQ
							</a>
						</button>
						<button className=" capitalize font-light text-base">
							<a
								href="https://en.wikipedia.org/wiki/Intelligence_amplification"
								target="_blank"
								rel="noreferrer"
							>
								Intelligence amplification
							</a>
						</button>
						<button className=" capitalize font-light text-base">
							<a
								href="https://en.wikipedia.org/wiki/Giant_Global_Graph"
								target="_blank"
								rel="noreferrer"
							>
								Tim Berners-Lee’s Giant Global Graph
							</a>
						</button>
						<button className=" capitalize font-light text-base">
							<a
								href="https://en.wikipedia.org/wiki/Polymath_Project"
								target="_blank"
								rel="noreferrer"
							>
								Polymath Project
							</a>
						</button>
						<button className=" capitalize font-light text-base">
							<a
								href="http://math.mit.edu/~dspivak/CT4S.pdf"
								target="_blank"
								rel="noreferrer"
							>
								Category Theory for Scientists
							</a>
						</button>
						<button className=" capitalize font-light text-base">
							<a
								href="http://ideaflowplan.jacobcole.net/"
								target="_blank"
								rel="noreferrer"
							>
								ideaflowplan.jacobcole.net
							</a>
						</button>
					</div>
					<div className="flex flex-col  md:items-start items-center justify-center  gap-2">
						<h1 className="text-xl mb-2 font-semibold">Latest Updates</h1>
						<button className="capitalize font-light text-base">
							<a
								href="https://medium.com/ideaflow"
								target="_blank"
								rel="noreferrer"
							>
								Blog
							</a>
						</button>
						<button className="capitalize font-light text-base">
							<a
								href="https://www.crunchbase.com/organization/ideaflow"
								target="_blank"
								rel="noreferrer"
							>
								Funding
							</a>
						</button>
						<button className="capitalize font-light text-base">
							<a
								href="https://www.youtube.com/watch?v=4feZo9PqTlo"
								target="_blank"
								rel="noreferrer"
							>
								Bullet View Video
							</a>
						</button>
					</div>
				</div>
			</div>
			<div className="flex flex-col-reverse gap-10 lg:gap-20  flex-wrap md:flex-row  justify-center items-center px-10">
				<div className=" text-center">
					<h1 className="text-lg font-normal">
						Copyright © 2020 Ideaflow, Inc.
					</h1>
					<h1 className="text-lg font-normal">All rights reserved.</h1>
				</div>
				<div className="flex flex-col items-center justify-center gap-5 ">
					<div>
						<h1 className="text-[22px] font-semibold">Contact Us</h1>
					</div>
					<div className="flex flex-row justify-center items-center ">
						<button className="btn btn-ghost">
							<a href="mailto:pleascontact@ideaflow.io">
								<img
									className="w-[50px]  rounded-full"
									src={mail}
									alt="mail-img"
								/>
							</a>
						</button>
						<button className="btn btn-ghost">
							<a
								href="https://www.linkedin.com/company/ideaflow-inc/about/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									className="w-[50px]  rounded-full"
									src={linkedin}
									alt="linkedin-img"
								/>
							</a>
						</button>
						<button className="btn btn-ghost ">
							<a
								href="https://www.facebook.com/ideaflowgraphs/?ref=py_c"
								target="_blank"
								rel="noreferrer"
							>
								<img
									className="w-[47px]  rounded-full"
									src={facebook}
									alt="facebook-img"
								/>
							</a>
						</button>
						<button className="btn btn-ghost">
							<a
								href="https://twitter.com/ideaflowgraphs"
								target="_blank"
								rel="noreferrer"
							>
								<img
									className="w-[52px]  rounded-full"
									src={twitter}
									alt="twitter-img"
								/>
							</a>
						</button>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<button className=" capitalize  text-xl font-semibold">
						<a
							href="https://www.ideaflow.io/privacy-policy"
							target="_blank"
							rel="noreferrer"
						>
							Privacy Policy
						</a>
					</button>
					<button className=" capitalize  text-xl font-semibold">
						Terms & Conditions
					</button>
				</div>
			</div>
		</div>
	);
};

export default Footer;
