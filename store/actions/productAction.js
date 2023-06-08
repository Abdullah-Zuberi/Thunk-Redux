import ApiResource from "../../src/services/api";
import ApiConstant from "../endpoints";

async function productDetailRequest(payload, thunkAPI) {
  try {
    const response = await ApiResource.get(
      ApiConstant.getProductDetail,
      payload
    );
    return response;
  } catch (error) {
    return thunkAPI.rejectWITHValue(error);
  }
}

export const ProductApiServices = {
  productDetailRequest,
};
