import { call, put, takeEvery } from "redux-saga/effects";
import { FollowedLocation } from "../../models/Location";
import {
  getFollowedLocations,
  addFollowedLocation as addFollowedLocationService,
  removeFollowedLocation as removeFollowedLocationService
} from "../../services/FollowedLocationService";
import {
  addFollowedLocation,
  addFollowedLocationError,
  addFollowedLocationSuccess,
  fetchFollowedLocations,
  fetchFollowedLocationsError,
  fetchFollowedLocationsSuccess,
  removeFollowedLocation,
  removeFollowedLocationError,
  removeFollowedLocationSuccess
} from "../slices/followedLocations";

function* fetchFollowedLocationsSaga() {
  try {
    const followedLocations: FollowedLocation[] = yield call(getFollowedLocations);

    yield put(fetchFollowedLocationsSuccess(followedLocations));
  } catch (error) {
    console.error(error);
    yield put(fetchFollowedLocationsError());
  }
}

function* addFollowedLocationSaga(action: ReturnType<typeof addFollowedLocation>) {
  const { payload } = action;
  try {
    const followedLocation: FollowedLocation = yield call(addFollowedLocationService, {
      location: payload
    });

    yield put(addFollowedLocationSuccess(followedLocation));
  } catch (error) {
    console.error(error);
    yield put(addFollowedLocationError());
  }
}

function* removeFollowedLocationSaga(action: ReturnType<typeof removeFollowedLocation>) {
  const { payload } = action;

  try {
    const followedLocation: FollowedLocation = yield call(removeFollowedLocationService, {
      location: payload
    });

    yield put(removeFollowedLocationSuccess(followedLocation));
  } catch (error) {
    console.error(error);
    yield put(removeFollowedLocationError());
  }
}

export default function* followedLocationsSaga() {
  yield takeEvery(fetchFollowedLocations, fetchFollowedLocationsSaga);
  yield takeEvery(addFollowedLocation, addFollowedLocationSaga);
  yield takeEvery(removeFollowedLocation, removeFollowedLocationSaga);
}
