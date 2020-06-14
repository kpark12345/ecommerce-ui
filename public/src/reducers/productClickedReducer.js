import Redux from "redux";

const productClickedReducer = (state = false, action) => {
  switch (action.type) {
    case "PRODUCT_CLICKED":
      return action.clicked;
    default:
      return state;
  }
};





export default productClickedReducer;