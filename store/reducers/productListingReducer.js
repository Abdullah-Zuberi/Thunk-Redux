import { createReducer } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { productApiServices } from "../actions/productListingAction";

let initialState = {
  error: null,
  loading: false,
  productListing: null,
};

export const getProductListingRequest = createAsyncThunk(
  "productListingReducer/getProductListingRequest",
  async (payload, thunkApi) => {
    const response = await productApiServices.productListingRequest(
      payload,
      thunkApi
    );
    return response;
  }
);

const productListingReducer = createReducer(initialState, {
  [getProductListingRequest.pending]: (state) => {
    return {
      ...state,
      error: null,
      loading: true,
    };
  },
  [getProductListingRequest.fulfilled]: (state, action) => {
    return {
      ...state,
      error: null,
      loading: false,
      productListing: action.payload.data,
    };
  },
  [getProductListingRequest.rejected]: (state) => {
    return {
      ...state,
      error: null,
      loading: false,
    };
  },
});

export default productListingReducer;
