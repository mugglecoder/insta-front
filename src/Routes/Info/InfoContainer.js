import React from "react";
import InfoPresenter from "./InfoPresenter";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../../SharedQueries";

export default props => {
  const { data, loading } = useQuery(ME);
  return <InfoPresenter data={data} loading={loading} props={props} />;
};
