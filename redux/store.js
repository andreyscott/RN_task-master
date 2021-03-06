import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { firebaseApp } from "../firebase";

import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

const fromStore = (state, db) => {
  db.ref(`categories/${state.user.uid}`).set(state.categories.byIds);
};

export const onChangeStore = () => {
  store.subscribe(() => fromStore(store.getState(), firebaseApp.database()));
};
