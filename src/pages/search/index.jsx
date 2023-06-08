import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { getSearchRequest } from "../../../store/reducers/searchReducer";

export default function Searchpage() {
  const dispatch = useDispatch();

  const getSearch = () => {
    try {
      dispatch(getSearchRequest())
        .then(unwrapResult)
        .catch((error) => {
          console.log("ERROR IN API", error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearch();
  }, []);

  const aaaa = useSelector((state) => state.search);
  console.log("AA", aaaa);
  return (
    <div>
      <h1>Search</h1>
    </div>
  );
}
