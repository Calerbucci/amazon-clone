import React from "react";
import "./Home.css";
import Product from "./Product";
import { items } from "./items";

function Home() {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="/"
      />

      <div className="home__row">
        
        <Product
          key={0}
          id="12345"
          title={items[0].title}
          price={559.53}
          rating={5}
          image="https://d188rgcu4zozwl.cloudfront.net/content/B087V5N4Q4/resources/790453366"
        />
        <Product
          key={1}
          id="12346"
          title={items[1].title}
          price={16408.78}
          rating={3}
          image="https://m.media-amazon.com/images/I/81vs5TXBrlL._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          key={2}
          id="12347"
          title={items[2].title}
          price={880.76}
          rating={4}
          image="https://m.media-amazon.com/images/I/71RQ3SYE3JL._AC_UY218_.jpg"
        />
        <Product
          key={3}
          id="12348"
          title={items[3].title}
          price={2726.09}
          rating={5}
          image="https://m.media-amazon.com/images/I/61Z6UicDVkL._AC_UL320_.jpg"
        />
        <Product
          key={4}
          id="12349"
          title={items[4].title}
          price={4632.65}
          rating={5}
          image="https://m.media-amazon.com/images/I/61RkjWOHljL._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          key={5}
          id="12340"
          title={items[5].title}
          price={6000.56}
          rating={5}
          image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6115/6115611_sd.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
