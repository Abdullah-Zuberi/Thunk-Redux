import ApiResource from "../../src/services/api";
import ApiConstant from "../endpoints";

async function siteListingRequest(payload, thunkAPI) {
  try {
    const response = await ApiResource.post(
      ApiConstant.getSiteListing,
      payload
    );
    return response;
  } catch (error) {
    return thunkAPI.rejectWITHValue(error);
  }
}

export const SiteApiServices = {
  siteListingRequest,
};
