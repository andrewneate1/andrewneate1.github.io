import React, { useEffect, useState } from "react";
import Axios from "axios";
import Dropdown from "react-dropdown";
import { FaArrowsAltH } from "react-icons/fa";
import "react-dropdown/style.css";
import Navbar from "../../Navbar/Navbar";

const projectLinks = [
  { text: "Currency Converter", link: "/projects/currencyConverter" },
  { text: "Markdown Editor", link: "/projects/markdownEditor" },
  { text: "ToDo List", link: "/projects/toDoList" },
];

const CurrencyConverter = () => {
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("gbp");
  const [to, setTo] = useState("eur");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  const currencies = [
    "gbp",
    "eur",
    "usd",
    "try",
    "aud",
    "aed",
    "jpy",
    "cad",
    "nzd",
  ];

  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`
    ).then((res) => {
      setInfo(res.data[from]);
    });
  }, [from]);

  useEffect(() => {
    setOptions(currencies);
    convert();
  }, [info]);

  useEffect(() => {
    convert();
  }, [input, to, from]);

  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }

  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <div>
      <Navbar links={projectLinks} type="secondary" />
      <div className="card align-items-center shadow container px-5 my-5">
        <div className="card-body">
          <div className="display-3 fw-bolder mb-3">
            <h1 className="text-gradient d-inline">Currency Converter</h1>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <div className="card shadow border-1 rounded-4 m-3 mt-0">
              <div className="card-body p-2">
                <h3>Amount</h3>
                <input
                  type="text"
                  placeholder="Enter the Amount"
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
            </div>
            <div className="card align-items-center shadow border-1 rounded-4 mb-3">
              <div className="card-body p-2">
                <h3>From</h3>
                <div className="options">
                  <Dropdown
                    options={options}
                    onChange={(e) => {
                      setFrom(e.value);
                    }}
                    value={from}
                    placeholder="From"
                  />
                </div>
              </div>
            </div>
            <div className="switch">
              <FaArrowsAltH size="30px" onClick={() => flip()} />
            </div>
            <div className="card shadow border-0 rounded-4 mb-3">
              <div className="card-body p-2">
                <h3>To</h3>
                <Dropdown
                  options={options}
                  onChange={(e) => {
                    setTo(e.value);
                  }}
                  value={to}
                  placeholder="To"
                />
              </div>
            </div>
          </div>
          <div className="result">
            <p className="rate">Rate: {info[to]}</p>
            <h2>Converted Amount:</h2>
            <h3>{input + " " + from + " = " + output.toFixed(2) + " " + to}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
