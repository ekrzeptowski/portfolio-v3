import { TbMoon, TbSun, TbSunMoon } from "react-icons/tb";
import { useEffect, useState } from "react";
import { t } from "i18next";

export const NightSwitch = () => {
  const icon = {
    light: <TbSun />,
    dark: <TbMoon />,
  };
  const [theme, setTheme] = useState(localStorage.getItem("theme") || null);
  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : theme === "dark" ? null : "light";
    newTheme ? localStorage.setItem("theme", newTheme) : localStorage.removeItem("theme");

    setTheme(newTheme);
  };
  const addDark = () => {
    document.documentElement.classList.add("dark");
  };
  const removeDark = () => {
    document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    if (theme === "dark" || (theme === null && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      addDark();
    } else {
      removeDark();
    }
  }, [theme]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    query.addEventListener("change", () => {
      if (!("theme" in localStorage)) query.matches ? addDark() : removeDark();
    });
  }, []);

  return (
    <button
      title={t(`nav.theme_switcher.${theme || "auto"}`)}
      className="rounded-lg border-2 border-blue-600 p-2 text-blue-600 hover:bg-blue-600 hover:text-white"
      onClick={() => changeTheme()}
    >
      {icon[theme as keyof typeof icon] || <TbSunMoon />}
    </button>
  );
};
