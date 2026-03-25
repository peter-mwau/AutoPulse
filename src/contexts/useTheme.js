import { useContext } from "react";
import { ThemeContext } from "./themeContext";

export function useDarkMode() {
    return useContext(ThemeContext);
}
