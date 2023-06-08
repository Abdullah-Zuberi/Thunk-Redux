import ApiResource from "../../src/services/api";
import ApiConstant from "../endpoints";

async function employeeListingRequest(payload, thunkAPI) {
  try {
    const response = await ApiResource.post(
      ApiConstant.getEmployeesListing,
      payload
    );
    return response;
  } catch (error) {
    return thunkAPI.rejectWITHValue(error);
  }
}

export const EmployeeApiServices = {
  employeeListingRequest,
};
