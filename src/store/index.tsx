// redux
import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';

// middle ware
import thunk from 'redux-thunk';

// api caller
import rootReducer from '../reducers';

// library
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  timeout: 15000,
  whitelist: ['authReducer'],
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function configureStore() {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  // logger Configuration
  if (__DEV__) {
    middleware.push(createLogger());
  }

  // thunk Middleware
  middleware.push(thunk);

  // Assemble Middleware
  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(persistedReducer, composeEnhancer(...enhancers));

  const persistor = persistStore(store);

  return {persistor, store};
}
