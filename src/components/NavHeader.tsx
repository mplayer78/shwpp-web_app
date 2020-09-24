import React from "react";
import Home from "../image_components/Home";
import Star from "../image_components/Star";
import Profile from "../image_components/Profile";
import "./NavHeader.css";

export default function NavHeader() {
  return (
    <div className="navContainer">
      <div className="selector">
        <Home />
      </div>
      <Star />
      <Profile />
    </div>
  );
}
