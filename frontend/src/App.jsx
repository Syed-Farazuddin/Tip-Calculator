/*eslint-disable */
import React, { useEffect, useState } from "react";
import Test from "./components/Test";
import { IoPerson } from "react-icons/io5";

export default function App() {
  const [tip, setTip] = useState("0.00");
  const [total, setTotal] = useState("0.00");
  const [customInp, setCustomInp] = useState("");
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [active, setActive] = useState();
  const [resetBtn, setResetBtn] = useState(false);
  const a = [5, 10, 15, 25, 50];
  console.log(tip);
  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, ""); // Remove any non-numeric characters
    setBill(value);
  };
  const handleReset = () => {
    setTip("0.00");
    setTotal("0.00");
    setResetBtn(false);
  };
  console.log(active);
  useEffect(() => {
    if (active === -1 && customInp == "") {
      console.log("TIp percentage is required");
      return;
    }
    if (bill == "" && people == "") {
      console.log("All fields are required");
      return;
    }
    if (active == -1) {
      console.log("Tip is setting");
      setTip((customInp * bill) / 100);
    } else {
      setTip((a[active] * bill) / 100);
    }
    setTotal(bill / people + tip);
    setResetBtn(true);
  }, [bill, people, customInp, active]);
  return (
    <main className="w-full h-[100vh] bg-greyCyan-200 flex items-center justify-center flex-col gap-6 ">
      <h1 className="text-cyan-300 font-bold text-xl">SPLITTER</h1>
      <div className="p-6 w-auto rounded-2xl h-auto bg-white flex sm:flex-col lg:flex-row">
        <section className="bg-white flex flex-col p-6 rounded-lg">
          <div className="flex flex-col items-start gap-2 justify-start">
            <h1 className="text-cyan-200 font-bold text-sm">Bill</h1>
            <div className="relative w-full">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                type="text"
                value={bill}
                onChange={handleInputChange}
                className="w-full pl-7 pr-3 py-1 rounded-lg bg-gray-100 outline-none border-none text-right"
                placeholder="0"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 justify-start mt-8">
            <h1 className="text-cyan-200 font-bold text-sm">Select Tip %</h1>
            <div className="grid grid-cols-3">
              {a.map((i, idx) => {
                return (
                  <div
                    className={`${
                      active == idx
                        ? " text-cyan-300 bg-cyan-100 "
                        : " text-white bg-cyan-300"
                    }   font-bold flex justify-center items-center px-6 py-2 mr-2 mb-2 rounded-lg hover:bg-[#9ceade] cursor-pointer hover:text-cyan-300 `}
                    onClick={() => {
                      setActive(idx);
                    }}
                    key={idx}
                  >
                    <span>{i}%</span>
                  </div>
                );
              })}
              <div className="text-cyan-200 bg-greyCyan-100 font-bold flex justify-center items-center mr-2 mb-2 rounded-lg hover:border-cyan-100">
                <input
                  className={`border-none outline-none bg-transparent w-[60px]`}
                  value={customInp}
                  onChange={(e) => {
                    setCustomInp(e.target.value);
                  }}
                  placeholder="Custom"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 justify-start mt-8">
            <h1 className="text-cyan-200 font-bold text-sm">
              Number of People
            </h1>
            <div className="relative w-full">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <IoPerson />
              </span>
              <input
                type="text"
                value={people}
                onChange={(e) => {
                  setPeople(e.target.value);
                }}
                className="w-full pl-7 pr-3 py-1 rounded-lg bg-gray-100 outline-none border-none text-right"
                placeholder="0"
              />
            </div>
          </div>{" "}
        </section>
        <section className="bg-cyan-300 h-full flex flex-col rounded-lg w-[350px]">
          <div className="flex justify-between items-center p-6">
            <div className="flex flex-col">
              <h1 className="text-white">Tip Amount</h1>
              <p className="text-greyCyan-200">/ person</p>
            </div>
            <div className="text-cyan-100 text-3xl font-bold">${tip}</div>
          </div>
          <div className="flex justify-between items-center p-6">
            <div className="flex flex-col">
              <h1 className="text-white">Total</h1>
              <p className="text-greyCyan-200">/ person</p>
            </div>
            <div className="text-cyan-100 text-3xl font-bold">${total}</div>
          </div>
          <button
            className={`${
              resetBtn ? "bg-[#9ceade]" : "bg-cyan-400 text-cyan-300"
            } flex justify-center items-end hover:bg-[#9ceade] py-1 w-[84%] mx-auto mt-24 rounded-sm mb-4`}
            onClick={() => {
              handleReset();
            }}
          >
            RESET
          </button>
        </section>
      </div>
    </main>
  );
}
