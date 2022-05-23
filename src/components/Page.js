import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./NavBar";
import Graph from "./Graph";
import Bronx from "../images/Inland.png";
import Manhattan from "../images/City.png";
import Brooklyn from "../images/Bridge.png";

function Page(props, { offset, color }) {
  return (
    <>
      {/* Set offset to a specific number if you only want that layer to show on one page,
    set offset to offset if you want that layer to show on every page */}
      {/* add reusable layers here as Page component*/}

      {/* SOMETHING IN BACKGROUND PUT AN INVISIBLE OVERLAY OVER THE WEBPAGE, PREVENTING YOU FROM BEING ABLE TO CLICK ANYTHING */}
      {/*Background Parallax layer -- behind all other layers */}
      <ParallaxLayer offset={offset} speed={1}>
        <div className="background"></div>
      </ParallaxLayer>

      {/*Color Parallax Layer -- over background layer */}
      <ParallaxLayer offset={offset} speed={2.1}>
        <div className={`shape ${color}`} />
      </ParallaxLayer>

      {/*Text Parallax Layer -- over color and backgronund layers */}
      {/* <ParallaxLayer offset={offset} speed={1}>
        <div className="text">
          <span>Restaurant Reviews</span>
        </div>
      </ParallaxLayer> */}

      {/*Navbar Parallax layer -- behind all other layers */}

      <ParallaxLayer
        offset={offset}
        speed={3.5}
        style={{ marginTop: "-200px" }}
      >
        <Navbar />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={1.7} style={{ marginTop: "100px" }}>
        <img src={Bronx} width="100" height="100" alt="" className="icon1" />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={1.85} style={{ marginTop: "100px" }}>
        <img
          src={Manhattan}
          width="100"
          height="100"
          alt=""
          className="icon2"
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={2} style={{ marginTop: "100px" }}>
        <img src={Brooklyn} width="100" height="100" alt="" className="icon3" />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={1.2}
        style={{ marginTop: "200px", marginLeft: "-150px" }}
      >
        <button className="button">
          {/* Bronx Button */}
          <div>BRONX</div>
        </button>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={1.35} style={{ marginTop: "200px" }}>
        <button className="button">
          {/* Manhattan Button */}
          <div>MANHATTAN</div>
        </button>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={1.4}
        style={{ marginTop: "200px", marginLeft: "150px" }}
      >
        <button className="button">
          {/* Brooklyn Button */}
          <div>BROOKLYN</div>
        </button>
      </ParallaxLayer>

      {/* <ParallaxLayer
        offset={offset}
        speed={1.4}
        style={{ marginTop: "200px", marginLeft: "150px" }}
      >
        <Graph data={props.data} />
      </ParallaxLayer> */}
    </>
  );
}

export default Page;
