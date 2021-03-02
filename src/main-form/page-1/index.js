import React from "react";
import "./styles.scss";

const Page1 = () => {
  return (
    <div className="page1-container">
      <div className="page-number">
        <div>1 > </div>
        <div className="page1-intro-text">
          Hi there!There are lots of ups and downs in the life of a company. We
          stand by our founders when times get tough. We are glad you are here.
          Please note, the following requirements are mendatory;*
        </div>
      </div>
      <div className="objective-container">
        <div className="objective-style">
          - Taxpayer identification number (TIN)
        </div>
        <div className="objective-style">
          - Valid Identity and Proof of resistence
        </div>
        <div className="objective-style">
          - A selfie while holding your id/passport next to your face
        </div>
        <div className="objective-style">
          - A specimen of your signature similar to one of your national
          id/passport
        </div>
        <div className="objective-style">
          - Loan application and credit Reference Burea fees
        </div>
      </div>
      <div className="page1-btn-container">
        <button className="list-btn">I Accept</button>
        <button className="list-btn">I Don't Accept</button>
      </div>
    </div>
  );
};
export default Page1;
