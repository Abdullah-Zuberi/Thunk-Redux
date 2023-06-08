import { createReducer } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductApiServices } from "../actions/productAction";

let initialState = {
  error: null,
  loading: false,
};

export const getProductDetailRequest = createAsyncThunk(
  "productReducer/getProductDetailRequest",
  async (payload, thunkApi) => {
    const response = await ProductApiServices.productDetailRequest(
      payload,
      thunkApi
    );
    return response;
  }
);

const ProductReducer = createReducer(initialState, {
  [getProductDetailRequest.pending]: (state) => {
    return {
      ...state,
      error: null,
      loading: true,
    };
  },
  [getProductDetailRequest.fulfilled]: (state, action) => {
    return {
      ...state,
      error: null,
      loading: false,
      ...action.payload.data,
    };
  },
  [getProductDetailRequest.rejected]: (state) => {
    return {
      ...state,
      error: null,
      loading: false,
    };
  },
});

export default ProductReducer;
