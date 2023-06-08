import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { getCriteriaListingRequest } from "../../../store/reducers/criteriaReducer";
import { GetCriteriaFieldsRequest } from "../../../store/reducers/criteriaReducer";

export default function Criteriapage() {
  const dispatch = useDispatch();

  const getCriteriaFields = () => {
    try {
      dispatch(GetCriteriaFieldsRequest())
        .then(unwrapResult)
        .catch((error) => {
          console.log("ERROR IN API", error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCriteriaFields();
  }, []);

  const aaaa = useSelector((state) => state.criteriaFields);
  console.log("AA", aaaa);

  const getCriteriaListing = () => {
    try {
      dispatch(
        getCriteriaListingRequest({
          search: "",
          status: "",
          page: 1,
          size: 10,
        })
      )
        .then(unwrapResult)
        .catch((error) => {
          console.log("ERROR IN API", error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCriteriaListing();
  }, []);

  const bbbb = useSelector((state) => state.criteriaListing);
  console.log("BBB", bbbb);

  return (
    <div>
      <h1>Criteria</h1>
    </div>
  );
}
