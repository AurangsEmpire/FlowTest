import {combineReducers} from 'redux';

// export
import {authReducer} from './auth';

const appReducer = combineReducers(Object.assign({authReducer}));

// export
export default appReducer;
