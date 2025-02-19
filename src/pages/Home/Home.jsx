import React, { useContext } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";
const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);

  return (
    <div>
      <div className="home">
        <div className="hero">
          <h1>Crypto Signal</h1>
          <h2>
            Your trusted source for accurate, ubiased crypto insights to help
            you filter signal from noise.
          </h2>
          <p>Sign up to stay on top of crypto.</p>
          <form type="text">
            <input type="text" placeholder="Search" />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="table">
          <div className="table-layout">
            <p>#</p>
            <p className="coin-title">Coins</p>
            <p className="price-title">Price</p>
            <p className="hr-change-title">24HR Change</p>
            <p className="market-cap-title">Market Cap</p>
          </div>
          {allCoin.slice(0, 10).map((item, index) => (
            <div className="item" key={index}>
              <p className="market-rank">{item.market_cap_rank}</p>
              <div className="coin">
                <img src={item.image} alt="" />
                <p>{`${item.name} ${item.symbol.toUpperCase()}`}</p>
              </div>

              <p className="price">
                {item.current_price.toLocaleString("en-US", {
                  style: "currency",
                  currency: `${currency.name}`,
                })}
              </p>
              <p
                className={`hr-change ${
                  item.price_change_percentage_24h > 0 ? "green" : "red"
                }`}
              >
                {Math.floor(item.price_change_percentage_24h * 100) / 100}%
              </p>
              <p className="market-cap">
                {
                  item.market_cap
                    .toLocaleString("en-US", {
                      style: "currency",
                      currency: `${currency.name}`,
                    })
                    .split(".")[0]
                }
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
