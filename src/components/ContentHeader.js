import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "../styles/ContentHeader.css";

const ContentHeader = () => {
  return (
    <div className="content-header">
      <img
        src="/img/illustration-hero1.png"
        className="header-img"
        alt=""
      ></img>
    </div>
  );
};

export default ContentHeader;
