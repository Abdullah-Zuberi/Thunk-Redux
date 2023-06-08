import { createReducer } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EmployeeApiServices } from "../actions/employeeAction";

let initialState = {
  error: null,
  loading: false,
};

export const getEmployeesListingRequest = createAsyncThunk(
  "employeeReducer/getEmployeesListingRequest",
  async (payload, thunkApi) => {
    const response = await EmployeeApiServices.employeeListingRequest(
      payload,
      thunkApi
    );
    return response;
  }
);

const EmployeeReducer = createReducer(initialState, {
  [getEmployeesListingRequest.pending]: (state) => {
    return {
      ...state,
      error: null,
      loading: true,
    };
  },
  [getEmployeesListingRequest.fulfilled]: (state, action) => {
    return {
      ...state,
      error: null,
      loading: false,
      ...action.payload.data?.result?.data,
    };
  },
  [getEmployeesListingRequest.rejected]: (state) => {
    return {
      ...state,
      error: null,
      loading: false,
    };
  },
});

export default EmployeeReducer;
