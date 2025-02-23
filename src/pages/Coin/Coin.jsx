import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setCoinData(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
  }, [currency]);

  if (coinData) {
    return (
      <div className="coin-container">
        <div className="coin-name">
          <img src={coinData.image.large} alt="" />
          <p>
            {coinData.name}
            <br />
            {coinData.symbol.toUpperCase()}
          </p>
        </div>
        <div className="coin-info">
          <ul>
            <li>
              Current Price: {currency.symbol}
              {coinData.market_data.current_price[
                currency.name
              ].toLocaleString()}
            </li>
            <li>
              24h Low/High: {""}
              {currency.symbol}
              {coinData.market_data.high_24h[
                currency.name
              ].toLocaleString()}{" "}
              {"- "}
              {currency.symbol}
              {coinData.market_data.low_24h[currency.name].toLocaleString()}
            </li>
            <li>Market Rank: {coinData.market_cap_rank}</li>
            <li>
              Market Cap: {currency.symbol}
              {coinData.market_data.market_cap[currency.name].toLocaleString()}
            </li>
          </ul>
        </div>
        <div>
          <p className="coin-desc">{coinData.description.en}</p>
        </div>
      </div>
    );
  } else {
    return <div className="msg">Sorry, no Coin Data available.</div>;
  }
};

export default Coin;
