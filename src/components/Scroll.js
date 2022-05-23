import React from "react";
import Page from "./Page.js";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Scroll(props) {
  return (
    <Parallax pages={4} className="container" horizontal>
      <Page offset={0} color="light" data={props.data} />
      <Page offset={1} color="mid" data={props.data} />
      <Page offset={2} color="dark" data={props.data} />
      <Page offset={3} color="darker" data={props.data} />
      {/* <Page offset={2} color="purple" />
      <Page offset={3} color="pink" /> */}
    </Parallax>
  );
}

export default Scroll;
