// actions types 
import * as types from './types';

// login 
export const loginApi = (requestBody: any) => async (dispatch: any) => {
      if (requestBody) {
        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: {...requestBody},
        });
    }
};

// logout 
export const logoutApi = (requestBody: any) => async (dispatch: any) => {
  if (requestBody) {
    dispatch({
      type: types.LOGOUT_SUCCESS,
      payload: requestBody,
    });
}
};