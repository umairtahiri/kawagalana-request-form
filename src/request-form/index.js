import React, { useState } from "react";
import WelcomePage from "./welcome-page";
import Page1 from "./page-1";
import Page2 from "./page-2";
import Page25 from "./page-25";
import Page26 from "./page-26";
import Page27 from "./page-27";
import Page28 from "./page-28";
import Page29 from "./page-29";
import Page30 from "./page-30";
import Page31 from "./page-31";
import Page32 from "./page-32";
import Page33 from "./page-33";

import Page34 from "./page-34";
import Page35 from "./page-35";
import Page36 from "./page-36";
import Page37 from "./page-37";
import Page38 from "./page-38";
import Page39 from "./page-39";
import Page40 from "./page-40";
import Page41 from "./page-41";
import Page42 from "./page-42";
import Page43 from "./page-43";
import Page44 from "./page-44";
import Page45 from "./page-45";
import Page46 from "./page-46";
import Page47 from "./page-47";
import Page48 from "./page-48";
import Page49 from "./page-49";
import Page50 from "./page-50";
import Page51 from "./page-51";

import "./styles.scss";

const PageRenderer = () => {
  const [page, setPage] = useState(0);

  const getPage = () => {
    switch (page) {
      case 1:
        return <Page1 moveNext={(number) => setPage(number)} />;
      case 2:
        return <Page2 moveNext={(number) => setPage(number)} />;
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
      default:
        return <WelcomePage moveNext={(number) => setPage(number)} />;
    }
  };
  return <div className="main-container">{getPage()}</div>;
};

export default PageRenderer;
