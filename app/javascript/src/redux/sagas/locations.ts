import { call, put, takeEvery } from "redux-saga/effects";
import { getLocations } from "../../services/LocationService";
import { fetchLocations, fetchLocationsError, fetchLocationsSuccess } from "../slices/locations";
import { Location } from "../../models/Location";

function* fetchLocationsSaga() {
  try {
    const locations: Location[] = yield call(getLocations);

    yield put(fetchLocationsSuccess(locations));
  } catch (error) {
    console.error(error);
    yield put(fetchLocationsError());
  }
}

export default function* locationsSaga() {
  yield takeEvery(fetchLocations, fetchLocationsSaga);
}
