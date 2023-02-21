import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RequestStatus } from "../../models/Statuses";
import { Location } from "../../models/Location";

const name = "locations";

type LocationState = {
  status: RequestStatus;
  locations: Location[];
};

const initialState: LocationState = {
  status: RequestStatus.IDLE,
  locations: []
};

const locationsSlice = createSlice({
  name,
  initialState,
  reducers: {
    fetchLocations(state) {
      state.status = RequestStatus.PENDING;
    },
    fetchLocationsSuccess(state, action: PayloadAction<Location[]>) {
      const { payload } = action;
      state.status = RequestStatus.SUCCESS;
      state.locations = payload;
    },
    fetchLocationsError(state) {
      state.status = RequestStatus.ERROR;
    }
  }
});

export const { fetchLocations, fetchLocationsError, fetchLocationsSuccess } =
  locationsSlice.actions;

export default locationsSlice.reducer;
