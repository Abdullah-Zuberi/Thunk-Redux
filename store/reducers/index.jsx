import { combineReducers } from "redux";
import CriteriaReducer from "./criteriaReducer";
import EmployeeReducer from "./employeeReducer";
import SiteReducer from "./siteReducer";
import ProductReducer from "./productReducer";
import searchReducer from "./searchReducer";
import productListingReducer from "./productListingReducer";

// Concatenate all reducers

export const rootReducer = combineReducers({
  criteria: CriteriaReducer,
  employee: EmployeeReducer,
  site: SiteReducer,
  product: ProductReducer,
  search: searchReducer,
  productListing: productListingReducer,
});
