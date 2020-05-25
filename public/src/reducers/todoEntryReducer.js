import Redux from "redux";

var todoEntryReducer = (state = '', action) => {
  switch (action.type) {
    case "CHANGE_TODO_ENTRY":
      return action.entry;
    default:
      return state;
  }
};





export default todoEntryReducer;