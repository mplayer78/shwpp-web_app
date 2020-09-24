import React, { useState, useEffect } from "react";
import { Background } from "./Background";
import NavHeader from "../components/NavHeader";
import Display from "../components/Display";
import MovingImage from "../components/MovingImage";
import Actions from "../components/Actions";
import Related from "../components/Related";
import "./gallery.css";

export default function Gallery() {
  return (
    <div className="spread">
      <Background />
      <NavHeader />
      <Display>
        <MovingImage />
        <Actions />
      </Display>
      <Related />
    </div>
  );
}
