import React, { useContext } from "react";
import "./Navbar.css";
import { CoinContext } from "../../context/CoinContext";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "jpy": {
        setCurrency({ name: "jpy", symbol: "¥" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <h1>Cypto Signal</h1>
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
      </ul>
      <div className="nav-right">
        <select name="" id="" onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="jpy">JPY</option>
        </select>
      </div>
      <button>Sign up</button>
    </div>
  );
};

export default Navbar;
