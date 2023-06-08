import { createReducer } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CriteriaApiServices } from "../actions/criteriaAction";

let initialState = {
  error: null,
  loading: false,
  criteriaFields: null,
  criteriaListing: null,
};

export const getCriteriaListingRequest = createAsyncThunk(
  "CriteriaReducer/getCriteriaListingRequest",
  async (payload, thunkApi) => {
    const response = await CriteriaApiServices.criteriaListingRequest(
      payload,
      thunkApi
    );
    return response;
  }
);

export const GetCriteriaFieldsRequest = createAsyncThunk(
  "CriteriaReducer/GetCriteriaFieldsRequest",
  async (payload, thunkApi) => {
    const response = await CriteriaApiServices.criteriaFieldsRequest(
      payload,
      thunkApi
    );
    return response;
  }
);

const CriteriaReducer = createReducer(initialState, {
  [GetCriteriaFieldsRequest.pending]: (state) => {
    return {
      ...state,
      error: null,
      loading: true,
    };
  },
  [GetCriteriaFieldsRequest.fulfilled]: (state, action) => {
    return {
      ...state,
      error: null,
      loading: false,
      criteriaFields: action.payload.data?.result?.data,
    };
  },
  [GetCriteriaFieldsRequest.rejected]: (state) => {
    return {
      ...state,
      error: null,
      loading: false,
    };
  },

  [getCriteriaListingRequest.pending]: (state) => {
    return {
      ...state,
      error: null,
      loading: true,
    };
  },
  [getCriteriaListingRequest.fulfilled]: (state, action) => {
    return {
      ...state,
      error: null,
      loading: false,
      criteriaListing: action.payload.data?.result?.data,
    };
  },
  [getCriteriaListingRequest.rejected]: (state) => {
    return {
      ...state,
      error: null,
      loading: false,
    };
  },
});

export default CriteriaReducer;
