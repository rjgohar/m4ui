import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),

  devTools: process.env.NODE_ENV !== "production",
});

const ReduxProvider = ({ children }) => {
  let persistor = persistStore(store);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </>
  );
};

export default ReduxProvider;
