import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./reducers";
import { thunk } from "redux-thunk";

const persistConfig = {
  key: "root",
  debug: true,
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  applyMiddleware(thunk),
  rootReducer
);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
