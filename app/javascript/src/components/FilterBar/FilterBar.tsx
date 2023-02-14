import dayjs from "dayjs";
import React, { FC, memo, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Location } from "../../models/Location";
import { selectLocations } from "../../redux/selectors/locations";
import { fetchLocations } from "../../redux/slices/locations";
import DateRangePicker from "./components/DateRangePicker";
import FollowButton from "./components/FollowButton";

type FilterBarProps = ReduxProps;

const mapStateToProps = createStructuredSelector({
  locations: selectLocations
});

const mapDispatchToProps = {
  fetchLocations
};

const FilterBar: FC<FilterBarProps> = (props) => {
  const { locations, fetchLocations } = props;

  const [selectedLocation, setSelectedLocation] = useState<Location>();

  useEffect(() => {
    fetchLocations();
  }, []);

  useEffect(() => {
    if (locations.length > 1) setSelectedLocation(locations[0]);
  }, [locations]);

  return (
    <div className="row g-3 align-items-center">
      <div className="col-auto">
        <select
          className="form-select"
          onChange={(e) =>
            setSelectedLocation(
              locations.find((location) => location.id === parseInt(e.target.value))
            )
          }
        >
          {locations.map((location) => (
            <option key={`${location.id}-option`} value={location.id}>
              {location.city}
            </option>
          ))}
        </select>
      </div>
      <div className="col-auto">
        <FollowButton selectedLocation={selectedLocation} />
      </div>
      <div className="col-auto">
        <DateRangePicker
          onChange={(dateRange) => {
            // TODO: Handle new date range selection
          }}
          defaultStartDate={dayjs().subtract(14, "days")}
          defaultEndDate={dayjs()}
        />
      </div>
    </div>
  );
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof withConnect>;

export default withConnect(memo(FilterBar));
