import ApiResource from "../../src/services/api";
import ApiConstant from "../endpoints";

async function criteriaFieldsRequest(payload, thunkAPI) {
  try {
    const response = await ApiResource.get(ApiConstant.getCriteriaFields);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
}

async function criteriaListingRequest(payload, thunkAPI) {
  try {
    const response = await ApiResource.post(
      ApiConstant.getCriteriaListing,
      payload
    );
    return response;
  } catch (error) {
    return thunkAPI.rejectWITHValue(error);
  }
}

export const CriteriaApiServices = {
  criteriaFieldsRequest,
  criteriaListingRequest,
};
