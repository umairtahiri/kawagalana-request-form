import React, { useState } from "react";
import WelcomePage from "./welcome-page";
import Page1 from "./page-1";
import Page2 from "./page-2";
import "./styles.scss";

const PageRenderer = () => {
  const [page, setPage] = useState(0);
  const getPage = () => {
    switch (page) {
      case 1:
        return <Page1 moveNext={(number) => setPage(number)} />;
      case 2:
        return <Page2 moveNext={(number) => setPage(number)} />;
      default:
        return <WelcomePage moveNext={(number) => setPage(number)} />;
    }
  };
  return <div className="main-container">{getPage()}</div>;
};

export default PageRenderer;
