import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useTheme } from "./Context/theme-context";
import Home from "./pages/Home/Home";
import Settings from "./pages/Settings/Settings";
import Tasks from "./pages/Tasks/Tasks";
import Pomodoro from "./pages/Timer/Pomodoro";

function App() {
	const { darkMode } = useTheme();

	return (
		<div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/tasks" element={<Tasks />} />
					<Route path="/pomodoro" element={<Pomodoro />} />
					<Route path="/pomodoro/:task" element={<Pomodoro />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
