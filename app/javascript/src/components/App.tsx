import React, { FC } from "react";
import { Provider } from "react-redux";

import { store } from "../redux/store";
import FilterBar from "./FilterBar/FilterBar";
import FollowedLocationTable from "./Table/FollowedLocationTable";

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="container-fluid p-4">
        <FilterBar />
        <FollowedLocationTable />
      </div>
    </Provider>
  );
};

export default App;
