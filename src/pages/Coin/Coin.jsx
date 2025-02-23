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
        <div className="coin-info">
          <img src={coinData.image.large} alt="" />
          <p>
            {coinData.name}
            <br />
            {coinData.symbol.toUpperCase()}
          </p>
          <p className="coin-desc">{coinData.description.en}</p>
        </div>
      </div>
    );
  } else {
    return <div className="msg">Sorry, no Coin Data available.</div>;
  }
};

export default Coin;
