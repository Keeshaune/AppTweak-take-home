import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectLocationsState = (state: RootState) => state.locations;

export const selectLocations = createSelector(selectLocationsState, (state) => state.locations);

export const selectLocationsStatus = createSelector(selectLocationsState, (state) => state.status);
