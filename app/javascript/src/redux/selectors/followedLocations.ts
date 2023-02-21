import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectFollowedLocationsState = (state: RootState) => state.followedLocations;

export const selectFollowedLocations = createSelector(
  selectFollowedLocationsState,
  (state) => state.followedLocations
);

export const selectFollowedLocationsStatus = createSelector(
  selectFollowedLocationsState,
  (state) => state.status
);
