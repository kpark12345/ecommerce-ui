import Redux from "redux";

const productObjectReducer = (state = {}, action) => {
  switch (action.type) {
    case "PRODUCT_OBJECT":
      return action.product;
    default:
      return state;
  }
};





export default productObjectReducer;