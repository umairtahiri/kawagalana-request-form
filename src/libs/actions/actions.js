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
export const setEquityOwnership = createAction(
  "SET_COMPANY_EQUITY-OWNERSHIP",
  (equityOwnership = "") => equityOwnership
);
export const setInformationAboutTheStructure = createAction(
  "SET_COMPANY_INFORMATION_ABOUT_STRUCTURE",
  (informationAboutTheStructure = "") => informationAboutTheStructure
);
export const setCompanyFounders = createAction(
  "SET_COMPANY_Founders",
  (companyFounders = "") => companyFounders
);
export const setPendingLaw = createAction(
  "SET_COMPANY_PENDING_LAW",
  (pendingLaw = "") => pendingLaw
);
export const setCompanyIdeas = createAction(
  "SET_COMPANY_COMPANY_IDEAS",
  (companyIdeas = "") => companyIdeas
);
export const setDiscovery = createAction(
  "SET_COMPANY_DISCOVERY",
  (discovery = "") => discovery
);
export const setConvinced = createAction(
  "SET_COMPANY_CONVINCED",
  (convinced = "") => convinced
);
export const setHearAbout = createAction(
  "SET_COMPANY_HEAR_ABOUT",
  (hearAbout = "") => hearAbout
);
export const setYourTitle = createAction(
  "SET_COMPANY_YOUR_TITLE",
  (yourTitle = "") => yourTitle
);
export const setFirstName = createAction(
  "SET_COMPANY_FIRST_NAME",
  (firstName = "") => firstName
);
export const setLastName = createAction(
  "SET_COMPANY_LAST_NAME",
  (lastName = "") => lastName
);
export const setDayofBirth = createAction(
  "SET_COMPANY_DAY_OF_BIRTH",
  (dayofBirth = "") => dayofBirth
);
export const setMonthofBirth = createAction(
  "SET_COMPANY_MONTH_OF_BIRTH",
  (monthofBirth = "") => monthofBirth
);
export const setYearofBirth = createAction(
  "SET_COMPANY_YEAR_OF_BIRTH",
  (yearofBirth = "") => yearofBirth
);
export const setPlaceofBirth = createAction(
  "SET_COMPANY_PLACEOF_BIRTH",
  (placeofBirth = "") => placeofBirth
);
export const setCountryofBirth = createAction(
  "SET_COMPANY_COUNTRY_OF_BIRTH",
  (countryofBirth = "") => countryofBirth
);
export const setNationality = createAction(
  "SET_COMPANY_NATIONALITY",
  (nationality = "") => nationality
);
export const setMaritalStatus = createAction(
  "SET_COMPANY_MARITAL_STATUS",
  (maritalStatus = "") => maritalStatus
);
export const setStreet = createAction(
  "SET_COMPANY_STREET",
  (street = "") => street
);
export const setPostalCode = createAction(
  "SET_COMPANY_POSTAL_CODE",
  (postalCode = "") => postalCode
);
export const setTown = createAction("SET_COMPANY_TOWN", (town = "") => town);
export const setContactInformation = createAction(
  "SET_COMPANY_CONTACT_INFORMATION",
  (contactInformation = "") => contactInformation
);
export const setNextofKin = createAction(
  "SET_COMPANY_NEXT_OF_KIN",
  (nextofKin = "") => nextofKin
);
export const setConsents = createAction(
  "SET_COMPANY_CONSENTS",
  (consents = "") => consents
);
export const setCommunication = createAction(
  "SET_COMPANY_COMMUNICATION",
  (communication = "") => communication
);
// export const setCompanyIdeas = createAction(
//   "SET_COMPANY_IDEAS",
//   (companyIdeas = "") => companyIdeas
// );
// export const setCompanyIdeas = createAction(
//   "SET_COMPANY_IDEAS",
//   (companyIdeas = "") => companyIdeas
// );
