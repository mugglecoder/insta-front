import React, { useState } from "react";
import InfoPresenter from "./InfoPresenter";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "react-apollo-hooks";
import { ME } from "../../SharedQueries";

export default props => {
  const { data, loading } = useQuery(ME);
  return <InfoPresenter data={data} loading={loading} props={props} />;
};
