import React from "react";
import { useThemeContext } from "./context/theme";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import './App.css';

function App() {
  // Get the current theme from the context
const { contextTheme, setContextTheme } = useThemeContext();

const getGradientClasses = () => {
  if (contextTheme === "Light") {
    return "bg-gradient-to-b from-yellow-300 via-orange-500 to-darkorange-700";
  } else {
    return "bg-gradient-to-b from-slate-950 via-slate-800 to-cyan-800";
  }
};

  return (
    <div className={`${getGradientClasses()} text-white p-8 mx-auto`}>
      <header className="py-4">
      <button className="cursor-pointer" onClick={() => setContextTheme(contextTheme === "Light" ? "Dark" : "Light")}>
      {contextTheme === "Light" ? <RiSunLine size={32} /> : <RiMoonLine size={32} />}</button>
      </header>
      <main className="flex items-center justify-center h-screen">
      <h1 className='text-3xl lg:text-4xl align-middle text-center'>Hello</h1>
        {/* Il contenuto principale della tua applicazione */}
      </main>
    </div>
  );
}

export default App;
