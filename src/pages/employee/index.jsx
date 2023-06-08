import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { getEmployeesListingRequest } from "../../../store/reducers/employeeReducer";

export default function Employeepage() {
  const dispatch = useDispatch();

  const getEmployeesListing = () => {
    try {
      dispatch(
        getEmployeesListingRequest({
          companyId: 10,
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
    getEmployeesListing();
  }, []);

  const aaaa = useSelector((state) => state.getEmployeesListing);
  console.log("AA", aaaa);
  return (
    <div>
      <h1>Employee</h1>
    </div>
  );
}
