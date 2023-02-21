import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FollowedLocation, Location } from "../../models/Location";
import { RequestStatus } from "../../models/Statuses";

const name = "followedLocations";

type FollowedLocationsState = {
  status: RequestStatus;
  followedLocations: FollowedLocation[];
};

const initialState: FollowedLocationsState = {
  status: RequestStatus.IDLE,
  followedLocations: []
};

const followedLocationsSlice = createSlice({
  name,
  initialState,
  reducers: {
    fetchFollowedLocations(state) {
      state.status = RequestStatus.PENDING;
    },
    fetchFollowedLocationsSuccess(state, action: PayloadAction<FollowedLocation[]>) {
      const { payload } = action;

      state.status = RequestStatus.SUCCESS;
      state.followedLocations = payload;
    },
    fetchFollowedLocationsError(state) {
      state.status = RequestStatus.ERROR;
    },
    addFollowedLocation(state, action: PayloadAction<Location>) {
      state.status = RequestStatus.PENDING;
    },
    addFollowedLocationSuccess(state, action: PayloadAction<FollowedLocation>) {
      const { payload } = action;

      state.status = RequestStatus.SUCCESS;
      state.followedLocations = [...state.followedLocations, payload];
    },
    addFollowedLocationError(state) {
      state.status = RequestStatus.ERROR;
    },
    removeFollowedLocation(state, action: PayloadAction<Location>) {
      state.status = RequestStatus.PENDING;
    },
    removeFollowedLocationSuccess(state, action: PayloadAction<FollowedLocation>) {
      const { payload } = action;

      state.status = RequestStatus.SUCCESS;
      state.followedLocations = state.followedLocations.filter(
        (followedLocation) => followedLocation.id !== payload.id
      );
    },
    removeFollowedLocationError(state) {
      state.status = RequestStatus.ERROR;
    }
  }
});

export const {
  fetchFollowedLocations,
  fetchFollowedLocationsError,
  fetchFollowedLocationsSuccess,
  addFollowedLocation,
  addFollowedLocationError,
  addFollowedLocationSuccess,
  removeFollowedLocation,
  removeFollowedLocationError,
  removeFollowedLocationSuccess
} = followedLocationsSlice.actions;
export default followedLocationsSlice.reducer;
