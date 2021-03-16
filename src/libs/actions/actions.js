import { createAction } from "redux-actions";

export const setApplyForFunding = createAction(
  "SET_APPLY_FOR_FUNDING",
  (applyForFunding) => applyForFunding
);

export const setCompanyName = createAction(
  "SET_COMPANY_NAME",
  (companyName = "") => companyName
);

export const setCompanyUrl = createAction(
  "SET_COMPANY_URL",
  (companyUrl = "") => companyUrl
);
