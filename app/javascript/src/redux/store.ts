import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import locations from "./slices/locations";
import followedLocations from "./slices/followedLocations";

import sagas from "./sagas/index";

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    locations,
    followedLocations
  },
  middleware: (getDefaultMiddelware) =>
    getDefaultMiddelware({ thunk: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(sagas);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
