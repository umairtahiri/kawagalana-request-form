import { handleActions } from "redux-actions";
import produce from "immer";

import * as actions from "../actions/actions";

const initialState = {
  applyForFunding: null,
  companyName: "",
  companyUrl: "",
  equityOwnership: "",
  informationAboutTheStructure: "",
  companyFounders: "",
  pendingLaw: "",
  companyIdeas: "",
  discovery: "",
  convinced: "",
  hearAbout: "",
  yourTitle: "",

  lastName: "",
  dayofBirth: "",
  monthofBirth: "",
  yearofBirth: "",
  placeofBirth: "",
  countryofBirth: "",
  nationality: "",
  maritalStatus: "",
  street: "",
  postalCode: "",
  town: "",
  contactInformation: "",
  nextofKin: "",
  consents: "",
  communication: "",
};

export default handleActions(
  {
    [actions.setApplyForFunding](state, { payload }) {
      return produce(state, (state) => {
        state.applyForFunding = payload;
      });
    },
    [actions.setCompanyName](state, { payload }) {
      return produce(state, (state) => {
        state.companyName = payload;
      });
    },
    [actions.setCompanyUrl](state, { payload }) {
      return produce(state, (state) => {
        state.companyUrl = payload;
      });
    },
    [actions.setEquityOwnership](state, { payload }) {
      return produce(state, (state) => {
        state.equityOwnership = payload;
      });
    },
    [actions.setInformationAboutTheStructure](state, { payload }) {
      return produce(state, (state) => {
        state.informationAboutTheStructure = payload;
      });
    },
    [actions.setCompanyFounders](state, { payload }) {
      return produce(state, (state) => {
        state.companyFounders = payload;
      });
    },
    [actions.setPendingLaw](state, { payload }) {
      return produce(state, (state) => {
        state.pendingLaw = payload;
      });
    },
    [actions.setCompanyIdeas](state, { payload }) {
      return produce(state, (state) => {
        state.companyIdeas = payload;
      });
    },
    [actions.setDiscovery](state, { payload }) {
      return produce(state, (state) => {
        state.discovery = payload;
      });
    },
    [actions.setConvinced](state, { payload }) {
      return produce(state, (state) => {
        state.convinced = payload;
      });
    },
    [actions.setHearAbout](state, { payload }) {
      return produce(state, (state) => {
        state.hearAbout = payload;
      });
    },
    [actions.setYourTitle](state, { payload }) {
      return produce(state, (state) => {
        state.yourTitle = payload;
      });
    },
    [actions.setFirstName](state, { payload }) {
      return produce(state, (state) => {
        state.firstName = payload;
      });
    },
    [actions.setLastName](state, { payload }) {
      return produce(state, (state) => {
        state.lastName = payload;
      });
    },
    [actions.setDayofBirth](state, { payload }) {
      return produce(state, (state) => {
        state.dayofBirth = payload;
      });
    },
    [actions.setMonthofBirth](state, { payload }) {
      return produce(state, (state) => {
        state.monthofBirth = payload;
      });
    },
    [actions.setYearofBirth](state, { payload }) {
      return produce(state, (state) => {
        state.yearofBirth = payload;
      });
    },
    [actions.setPlaceofBirth](state, { payload }) {
      return produce(state, (state) => {
        state.placeofBirth = payload;
      });
    },
    [actions.setCountryofBirth](state, { payload }) {
      return produce(state, (state) => {
        state.countryofBirth = payload;
      });
    },
    [actions.setNationality](state, { payload }) {
      return produce(state, (state) => {
        state.nationality = payload;
      });
    },
    [actions.setMaritalStatus](state, { payload }) {
      return produce(state, (state) => {
        state.maritalStatus = payload;
      });
    },
    [actions.setStreet](state, { payload }) {
      return produce(state, (state) => {
        state.street = payload;
      });
    },
    [actions.setPostalCode](state, { payload }) {
      return produce(state, (state) => {
        state.postalCode = payload;
      });
    },
    [actions.setTown](state, { payload }) {
      return produce(state, (state) => {
        state.town = payload;
      });
    },
    [actions.setContactInformation](state, { payload }) {
      return produce(state, (state) => {
        state.contactInformation = payload;
      });
    },
    [actions.setNextofKin](state, { payload }) {
      return produce(state, (state) => {
        state.nextofKin = payload;
      });
    },
    [actions.setConsents](state, { payload }) {
      return produce(state, (state) => {
        state.consents = payload;
      });
    },
    [actions.setCommunication](state, { payload }) {
      return produce(state, (state) => {
        state.communication = payload;
      });
    },
  },
  initialState
);
