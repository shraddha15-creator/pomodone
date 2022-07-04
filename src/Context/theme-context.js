import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvide = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<ThemeContext.Provider value={{ darkMode, setDarkMode }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
