import React, { useState } from "react";
import WelcomePage from "../pages/welcome-page";
import Page1 from "../pages/page-1";
import Page2 from "../pages/page-2";
import Page3 from "../pages/page-3";
import Page4 from "../pages/page-4";
import Page5 from "../pages/page-5";
import Page6 from "../pages/page-6";
import Page7 from "../pages/page-7";
import Page8 from "../pages/page-8";
import Page9 from "../pages/page-9";
import Page10 from "../pages/page-10";
import Page11 from "../pages/page-11";
import Page12 from "../pages/page-12";
import Page13 from "../pages/page-13";
import Page14 from "../pages/page-14";
import Page15 from "../pages/page-15";
import Page16 from "../pages/page-16";
import Page17 from "../pages/page-17";
import Page18 from "../pages/page-18";
import Page19 from "../pages/page-19";
import Page20 from "../pages/page-20";
import Page21 from "../pages/page-21";
import Page22 from "../pages/page-22";
import Page23 from "../pages/page-23";
import Page24 from "../pages/page-24";
import Page25 from "../pages/page-25";
import Page26 from "../pages/page-26";
import Page27 from "../pages/page-27";
import Page28 from "../pages/page-28";
import Page29 from "../pages/page-29";
import Page30 from "../pages/page-30";
import Page31 from "../pages/page-31";
import Page32 from "../pages/page-32";
import Page33 from "../pages/page-33";
import Page34 from "../pages/page-34";
import Page35 from "../pages/page-35";
import Page36 from "../pages/page-36";
import Page37 from "../pages/page-37";
import Page38 from "../pages/page-38";
import Page39 from "../pages/page-39";
import Page40 from "../pages/page-40";
import Page41 from "../pages/page-41";
import Page42 from "../pages/page-42";
import Page43 from "../pages/page-43";
import Page44 from "../pages/page-44";
import Page45 from "../pages/page-45";
import Page46 from "../pages/page-46";
import Page47 from "../pages/page-47";
import Page48 from "../pages/page-48";
import Page49 from "../pages/page-49";
import Page50 from "../pages/page-50";
import Page51 from "../pages/page-51";
import Page52 from "../pages/page-52";
import Page53 from "../pages/page-53";
import Page54 from "../pages/page-54";

import "./styles.scss";

const PageRenderer = () => {
  const [page, setPage] = useState(34);

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
      case 25:
        return <Page25 moveNext={(number) => setPage(number)} />;
      case 26:
        return <Page26 moveNext={(number) => setPage(number)} />;
      case 27:
        return <Page27 moveNext={(number) => setPage(number)} />;
      case 28:
        return <Page28 moveNext={(number) => setPage(number)} />;
      case 29:
        return <Page29 moveNext={(number) => setPage(number)} />;
      case 30:
        return <Page30 moveNext={(number) => setPage(number)} />;
      case 31:
        return <Page31 moveNext={(number) => setPage(number)} />;
      case 32:
        return <Page32 moveNext={(number) => setPage(number)} />;
      case 33:
        return <Page33 moveNext={(number) => setPage(number)} />;
      case 34:
        return <Page34 moveNext={(number) => setPage(number)} />;
      case 35:
        return <Page35 moveNext={(number) => setPage(number)} />;
      case 36:
        return <Page36 moveNext={(number) => setPage(number)} />;
      case 37:
        return <Page37 moveNext={(number) => setPage(number)} />;
      case 38:
        return <Page38 moveNext={(number) => setPage(number)} />;
      case 39:
        return <Page39 moveNext={(number) => setPage(number)} />;
      case 40:
        return <Page40 moveNext={(number) => setPage(number)} />;
      case 41:
        return <Page41 moveNext={(number) => setPage(number)} />;
      case 42:
        return <Page42 moveNext={(number) => setPage(number)} />;
      case 43:
        return <Page43 moveNext={(number) => setPage(number)} />;
      case 44:
        return <Page44 moveNext={(number) => setPage(number)} />;
      case 45:
        return <Page45 moveNext={(number) => setPage(number)} />;
      case 46:
        return <Page46 moveNext={(number) => setPage(number)} />;
      case 47:
        return <Page47 moveNext={(number) => setPage(number)} />;
      case 48:
        return <Page48 moveNext={(number) => setPage(number)} />;
      case 49:
        return <Page49 moveNext={(number) => setPage(number)} />;
      case 50:
        return <Page50 moveNext={(number) => setPage(number)} />;
      case 51:
        return <Page51 moveNext={(number) => setPage(number)} />;
      case 52:
        return <Page52 moveNext={(number) => setPage(number)} />;
      case 53:
        return <Page53 moveNext={(number) => setPage(number)} />;
      case 54:
        return <Page54 moveNext={(number) => setPage(number)} />;
      default:
        return <WelcomePage moveNext={(number) => setPage(number)} />;
    }
  };
  return <div class="background__Background-esq3f2-0 ikdpbR">{getPage()}</div>;
};

export default PageRenderer;
