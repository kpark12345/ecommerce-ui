import Redux from "redux";

const merchReducer = (state = false, action) => {
  switch (action.type) {
    case "MERCH_CLICKED":
      return action.clicked;
    default:
      return state;
  }
};





export default merchReducer;