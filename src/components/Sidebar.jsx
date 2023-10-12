// import React from 'react'
import ios from "../assets/apple.png";
import guide from "../assets/guide2.jpg";
import newsletter from "../assets/newsletter.jpg";
import twitter from "../assets/twitter.jpg";

const Sidebar = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-5 border-2 border-blue-600 hover:shadow-[0px_0px_30px_18px_#0018b7] transition ease-in-out duration-500 rounded-lg py-1.5 px-1.5 w-fit fixed md:top-48 top-72 left-0 ml-0 z-10 bg-black">
			<button className=" ">
				<a
					href="https://apps.apple.com/us/app/ideaflow-notes/id6463830566"
					target="_blank"
					rel="noreferrer"
				>
					<img className="md:w-10 w-7   rounded-xl" src={ios} alt="ios" />
				</a>
			</button>
			<button>
				<a
					href="https://onboarding.ideaflow.app/"
					target="_blank"
					rel="noreferrer"
				>
					<img
						className="md:w-[44px] w-[32px]  rounded-xl "
						src={guide}
						alt="guide"
					/>
				</a>
			</button>
			<button>
				<a
					href="https://twitter.com/IdeaFlowGraphs"
					target="_blank"
					rel="noreferrer"
				>
					<img
						className="md:w-[44px] w-[32px]  rounded-xl "
						src={twitter}
						alt="twitter"
					/>
				</a>
			</button>
			<button>
				<a
					href="https://kaib430d7vl.typeform.com/to/cg7ZCvD9"
					target="_blank"
					rel="noreferrer"
				>
					<img
						className="md:w-10 w-7 rounded-xl"
						src={newsletter}
						alt="newsletter"
					/>
				</a>
			</button>
		</div>
	);
};

export default Sidebar;
