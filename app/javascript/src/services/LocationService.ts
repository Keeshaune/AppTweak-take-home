import axios, { AxiosResponse } from "axios";

import { Location } from "../models/Location";

type APILocation = {
  id: number;
  city: string;
  latitude: number;
  longitude: number;
  created_at: string;
  updated_at: string;
};

export async function getLocations(): Promise<Location[]> {
  return await axios.get("/locations").then((response: AxiosResponse<APILocation[]>) => {
    const { data } = response;

    return data.map(
      (location): Location => ({
        id: location.id,
        city: location.city,
        latitude: location.latitude,
        longitude: location.longitude
      })
    );
  });
}
