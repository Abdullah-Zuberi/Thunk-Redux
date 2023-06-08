import ApiResource from "../../src/services/api";
import ApiConstant from "../endpoints";

async function productListingRequest(payload, thunkAPI) {
  try {
    const response = await ApiResource.get(
      ApiConstant.getProductListing,
      payload
    );
    return response;
  } catch (error) {
    return thunkAPI.rejectWITHValue(error);
  }
}

export const productApiServices = {
  productListingRequest,
};
