import { handleActions } from "redux-actions";
import produce from "immer";

import * as actions from "../actions/actions";

const initialState = {
  applyForFunding: null,
  companyName: "",
  companyUrl: "",
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
  },
  initialState
);
