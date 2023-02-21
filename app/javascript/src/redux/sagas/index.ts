import { fork } from "redux-saga/effects";
import followedLocationsSaga from "./followedLocations";
import locationsSaga from "./locations";

export default function* sagas() {
  yield fork(locationsSaga);
  yield fork(followedLocationsSaga);
}
