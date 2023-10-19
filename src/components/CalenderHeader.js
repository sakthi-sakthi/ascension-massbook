import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";
import download from "../assets/download.jpg";

export default function CalenderHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePreMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(dayjs().month());
  }
  return (
    <div>
      <center>
        <header>
          <a
            href="https://ascensionchurchbangalore.org/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={download} alt="" />
          </a>

          <h1>Ascension Church</h1>
          <h2>Bangalore-560 084</h2>
        </header>
      </center>
      <div className="same-line">
        <div className="on-the-left">
          <a
            className="nav-link"
            href="https://ascensionchurchbangalore.org/"
            style={{ textdecoration: "inherit", fontSize: "92%" }}
          >
            <button
              className="border rounded py-2 px-4 mr-1 text-white"
              style={{ backgroundColor: "rgb(128,0,0)", bordercolor: "blue" }}
            >
              <span>Back</span>
            </button>
          </a>
        </div>
      </div>

      <header
        className="py-2 flex items-center"
        style={{ paddingLeft: "4%", backgroundColor: "#d98c00c4" }}
      >
        <button onClick={handlePreMonth}>
          <span className="material-icons-outlined cursor-pointer text-white mx-2">
            chevron_left
          </span>
        </button>

        <button onClick={handleNextMonth}>
          <span className="material-icons-outlined cursor-pointer text-white mx-2">
            chevron_right
          </span>
        </button>
        <button
          className="border rounded py-2 px-4 mr-1 text-white"
          onClick={handleReset}
        >
          Today
        </button>
        <h2
          className="ml-4 text-xl text font-bold text-white"
          style={{ paddingLeft: "4%" }}
        >
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
      </header>
    </div>
  );
}
