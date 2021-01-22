import React from "react";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

 function Home() {

const [{items}] = useStateValue();
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
          id={items[0]?.id}
          title={items[0]?.title}
          price={items[0]?.price}
          rating={items[0]?.rating}
          image={items[0]?.image}
        />
        <Product
          key={1}
          id={items[1]?.id}
          title={items[1]?.title}
          price={items[1]?.price}
          rating={items[1]?.rating}
          image={items[1]?.image}
        />
      </div>

      <div className="home__row">
        <Product
          key={2}
          id={items[2]?.id}
          title={items[2]?.title}
          price={items[2]?.price}
          rating={items[2]?.rating}
          image={items[2]?.image}
        />
        <Product
          key={3}
          id={items[3]?.id}
          title={items[3]?.title}
          price={items[3]?.price}
          rating={items[3]?.rating}
          image={items[3]?.image}
        />
        <Product
          key={4}
          id={items[4]?.id}
          title={items[4]?.title}
          price={items[4]?.price}
          rating={items[4]?.rating}
          image={items[4]?.image}
        />
      </div>

      <div className="home__row">
        <Product
          key={5}
          id={items[5]?.id}
          title={items[5]?.title}
          price={items[5]?.price}
          rating={items[5]?.rating}
          image={items[5]?.image}
        />
      </div>
    </div>
  );
}

export default Home;
