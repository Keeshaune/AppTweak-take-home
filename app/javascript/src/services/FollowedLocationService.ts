import axios, { AxiosResponse } from "axios";

import { FollowedLocation, Location } from "../models/Location";

export async function getFollowedLocations(): Promise<FollowedLocation[]> {
  return await axios.get("/followed_locations").then((response: AxiosResponse) => {
    const { data } = response;
    console.log(data);

    //TODO: You need to map the API's response to your FollowedLocation type and return it
    return [];
  });
}

type AddFollowedLocationParams = {
  location: Location;
};

export async function addFollowedLocation(
  params: AddFollowedLocationParams
): Promise<FollowedLocation> {
  // TODO: You might need to adapt the parameters depending on your endpoint
  return await axios
    .post("/followed_locations", { data: params })
    .then((response: AxiosResponse) => {
      const { data } = response;
      console.log(data);

      //TODO : You need to map the API's response to your FollowedLocation type and return it
      return {};
    });
}

type RemoveFollowedLocationParams = {
  location: Location;
};

export async function removeFollowedLocation(
  params: RemoveFollowedLocationParams
): Promise<FollowedLocation> {
  // TODO: You might need to adapt the parameters depending on your endpoint
  return await axios
    .delete("/followed_locations", { data: params })
    .then((response: AxiosResponse) => {
      const { data } = response;
      console.log(data);

      //TODO: You need to map the API's response to your FollowedLocation type and return it
      return {};
    });
}
