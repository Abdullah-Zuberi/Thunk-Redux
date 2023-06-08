import { createReducer } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchApiServices } from "../actions/searchAction";

let initialState = {
  error: null,
  loading: false,
};

export const getSearchRequest = createAsyncThunk(
  "searchReducer/getSearchRequest",
  async (payload, thunkApi) => {
    const response = await SearchApiServices.searchRequest(payload, thunkApi);
    return response;
  }
);

const searchReducer = createReducer(initialState, {
  [getSearchRequest.pending]: (state) => {
    return {
      ...state,
      error: null,
      loading: true,
    };
  },
  [getSearchRequest.fulfilled]: (state, action) => {
    return {
      ...state,
      error: null,
      loading: false,
      ...action.payload.data,
    };
  },
  [getSearchRequest.rejected]: (state) => {
    return {
      ...state,
      error: null,
      loading: false,
    };
  },
});

export default searchReducer;
