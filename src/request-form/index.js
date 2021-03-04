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
import Page11 from "./page-11";
import Page12 from "./page-12";
import Page13 from "./page-13";
import Page14 from "./page-14";
import Page15 from "./page-15";
import Page16 from "./page-16";
import Page17 from "./page-17";
import Page18 from "./page-18";
import Page19 from "./page-19";
import Page20 from "./page-20";
import Page21 from "./page-21";
import Page22 from "./page-22";
import Page23 from "./page-23";
import Page24 from "./page-24";





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
      case 11:
        return <Page11 moveNext={(number) => setPage(number)} />;
      case 12:
        return <Page12 moveNext={(number) => setPage(number)} />;
      case 13:
        return <Page13 moveNext={(number) => setPage(number)} />;
        case 14:
        return <Page14 moveNext={(number) => setPage(number)} />;
        case 15:
        return <Page15 moveNext={(number) => setPage(number)} />;
        case 16:
        return <Page16 moveNext={(number) => setPage(number)} />;
        case 17:
        return <Page17 moveNext={(number) => setPage(number)} />;
        case 18:
        return <Page18 moveNext={(number) => setPage(number)} />;
        case 19:
        return <Page19 moveNext={(number) => setPage(number)} />;
        case 20:
        return <Page20 moveNext={(number) => setPage(number)} />;
        case 21:
        return <Page21 moveNext={(number) => setPage(number)} />;
        case 22:
        return <Page22 moveNext={(number) => setPage(number)} />;
        case 23:
        return <Page23 moveNext={(number) => setPage(number)} />;
        case 24:
        return <Page24 moveNext={(number) => setPage(number)} />;
      default:
        return <WelcomePage moveNext={(number) => setPage(number)} />;
    }
  };
  return <div className="main-container">{getPage()}</div>;
};

export default PageRenderer;
