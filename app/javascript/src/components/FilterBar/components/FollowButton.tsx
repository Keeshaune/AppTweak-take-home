import React, { FC, memo, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Location } from "../../../models/Location";
import {
  fetchFollowedLocations,
  removeFollowedLocation,
  addFollowedLocation
} from "../../../redux/slices/followedLocations";

type OwnProps = {
  selectedLocation: Location;
};

type FollowButtonProps = OwnProps & ReduxProps;

const mapDispatchToProps = {
  fetchFollowedLocations,
  addFollowedLocation,
  removeFollowedLocation
};

const FollowButton: FC<FollowButtonProps> = (props) => {
  const { selectedLocation, fetchFollowedLocations, addFollowedLocation, removeFollowedLocation } =
    props;

  // TODO: You need to add some logic here to check if the currently selected app is already followed
  const currentLocationFollowed = false;

  useEffect(() => {
    fetchFollowedLocations();
  }, []);

  function handleClick() {
    if (currentLocationFollowed) {
      removeFollowedLocation(selectedLocation);
    } else {
      addFollowedLocation(selectedLocation);
    }
  }

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      {currentLocationFollowed ? "Unfollow" : "Follow"}
    </button>
  );
};

const withConnect = connect(null, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof withConnect>;

export default withConnect(memo(FollowButton));
