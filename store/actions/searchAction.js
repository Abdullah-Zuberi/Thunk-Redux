import ApiResource from "../../src/services/api";
import ApiConstant from "../endpoints";

async function searchRequest(payload, thunkAPI) {
  try {
    const response = await ApiResource.get(ApiConstant.getSearch, payload);
    return response;
  } catch (error) {
    return thunkAPI.rejectWITHValue(error);
  }
}

export const SearchApiServices = {
  searchRequest,
};
