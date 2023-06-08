import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { getProductDetailRequest } from "../../../store/reducers/productReducer";

export default function Productpage() {
  const dispatch = useDispatch();

  const getProductDetail = () => {
    try {
      dispatch(getProductDetailRequest(null))
        .then(unwrapResult)
        .catch((error) => {
          console.log("ERROR IN API", error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  const aaaa = useSelector((state) => state.ProductDetail);
  console.log("AAA", aaaa);
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}
