import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Settings from "./pages/Settings/Settings";
import Tasks from "./pages/Tasks/Tasks";
import Pomodoro from "./pages/Timer/Pomodoro";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/tasks" element={<Tasks />} />
					<Route path="/pomodoro" element={<Pomodoro />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
