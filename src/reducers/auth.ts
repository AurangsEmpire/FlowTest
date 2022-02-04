import createReducer from './buildReducers';
import * as types from '../actions/types';

//===== initails states =========
const authInitailsState = {
  loginSuccess: false,
  logoutSuccess: false,
};

// reducer
export const authReducer = createReducer(authInitailsState, {
  // login
  [types.LOGIN_SUCCESS](state: any, action: any) {
    return {
      ...state,
      loginSuccess: action.payload,
      logoutSuccess: false,
    };
  },

  // logout
  [types.LOGOUT_SUCCESS](state: any, action: any) {
    return {
      ...state,
      logoutSuccess: action.payload,
      loginSuccess: false,
    };
  },
});
