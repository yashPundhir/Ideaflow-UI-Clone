import AutoSuggest from "../components/AutoSuggest";
import Cards from "../components/Cards";
import Hero from "../components/Hero";
import Hiring from "../components/Hiring";
import Investors from "../components/Investors";
import Puzzles from "../components/Puzzles";

const Homepage = () => {
	return (
		<>
			<Hero />
			<Investors />
			<Puzzles />
			<AutoSuggest />
			<Cards />
			<Hiring />
		</>
	);
};

export default Homepage;
