import React from "react";
import Banner from "./Basic/Banner";
import MbBanner from "./Basic/MbBanner";
import MdForm from "./Basic/MdForm";
import XlForm from "./Basic/XlForm";
import Content from "./Content";
import Content2 from "./Content2";
import Grid from "./Grid";

function Home() {
  return (
    <div>
      <Banner />
      <MbBanner />
      <XlForm />
      <MdForm />
      <Content />
      <Content2/>
      <Grid/>
    </div>
  );
}

export default Home;
