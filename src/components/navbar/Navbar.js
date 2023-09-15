import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    //navbar section
    <nav className="flex justify-end items-center">
      <p></p>
      <Button text={"Italiano"} onClick={() => changeLanguage("it")} />
      <Button text={"English"} onClick={() => changeLanguage("en")} />
      {/*hamburger button*/}
      <button
        title="hamburger-menu"
        className="hamburger bg-purple-900 rounded-full p-2"
        onClick={() => toggleNavbar(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className={`list-none p-0`}>
          <li className="py-2 px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="py-2 px-4">
            <Link to="/co2">CO2</Link>
          </li>
          <li className="py-2 px-4">
            <Link to="/methane">{t("methane")}</Link>
          </li>
          <li className="py-2 px-4">
            <Link to="/no2">NO2</Link>
          </li>
          <li className="py-2 px-4">
            <Link to="/polarice">{t("polarice")}</Link>
          </li>
          <li className="py-2 px-4">
            <Link to="/temperature">Temperature</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}