import React from "react";
import "./Home.css";
import { Product } from "./Product";


function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="
        https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/Family/GW/March/D21563914_WLD_Mi_Family_BAU_DesktopHero_1500x600._CB658003410_.jpg "
        // https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        alt="banner"
      />
      <div className="home__row">
          <Product
            id="1234"
            title="First product"
            price={11.96 }
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71frknp-CWL.jpg"
          />

        <Product
          id="1234"
          title="First product"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71frknp-CWL.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1234"
          title="First product"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71frknp-CWL.jpg"
        />
        <Product
          id="1234"
          title="First product"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71frknp-CWL.jpg"
        />
        <Product
          id="1234"
          title="First product"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71frknp-CWL.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1234"
          title="First product"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71frknp-CWL.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
