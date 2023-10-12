import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
			<Sidebar />
		</>
	);
}

export default App;
