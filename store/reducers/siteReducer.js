import { createReducer } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SiteApiServices } from "../actions/siteAction";

let initialState = {
  error: null,
  loading: false,
};

export const getSiteListingRequest = createAsyncThunk(
  "siteReducer/getSiteListingRequest",
  async (payload, thunkApi) => {
    const response = await SiteApiServices.siteListingRequest(
      payload,
      thunkApi
    );
    return response;
  }
);

const SiteReducer = createReducer(initialState, {
  [getSiteListingRequest.pending]: (state) => {
    return {
      ...state,
      error: null,
      loading: true,
    };
  },
  [getSiteListingRequest.fulfilled]: (state, action) => {
    return {
      ...state,
      error: null,
      loading: false,
      data: action.payload.data?.result?.data,
    };
  },
  [getSiteListingRequest.rejected]: (state) => {
    return {
      ...state,
      error: null,
      loading: false,
    };
  },
});

export default SiteReducer;
