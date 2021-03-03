import React, { useState } from "react";
import WelcomePage from "./welcome-page";
import Page1 from "./page-1";
import Page2 from "./page-2";
import Page3 from "./page-3";
import Page4 from "./page-4";
import Page5 from "./page-5";
import Page6 from "./page-6";
import Page7 from "./page-7";
import Page8 from "./page-8";
import Page9 from "./page-9";
import Page10 from "./page-10";


import "./styles.scss";

const PageRenderer = () => {
  const [page, setPage] = useState(0);

  const getPage = () => {
    switch (page) {
      case 1:
        return <Page1 moveNext={(number) => setPage(number)} />;
      case 2:
        return <Page2 moveNext={(number) => setPage(number)} />;
      case 3:
        return <Page3 moveNext={(number) => setPage(number)} />;
      case 4:
        return <Page4 moveNext={(number) => setPage(number)} />;
      case 5:
        return <Page5 moveNext={(number) => setPage(number)} />;
      case 6:
        return <Page6 moveNext={(number) => setPage(number)} />;
      case 7:
        return <Page7 moveNext={(number) => setPage(number)} />;
      case 8:
        return <Page8 moveNext={(number) => setPage(number)} />;
      case 9:
        return <Page9 moveNext={(number) => setPage(number)} />;
        case 10:
        return <Page10 moveNext={(number) => setPage(number)} />;
      default:
        return <WelcomePage moveNext={(number) => setPage(number)} />;
    }
  };
  return <div className="main-container">{getPage()}</div>;
};

export default PageRenderer;
