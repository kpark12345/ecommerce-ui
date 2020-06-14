import { connect } from "react-redux";
import Merch from "./../components/Merch.jsx";
import handleMerchClicked from "./../actions/handleMerchClicked.js";
import handleMerchObject from "./../actions/handleMerchObject.js";

 const mapStateToProps = store => ({
  productClicked: store.productClicked
});

 const mapDispatchToProps = dispatch => ({
  handleMerchClicked: clicked => {
    dispatch(handleMerchClicked(clicked));
  },
  handleMerchObject: merch => {
    dispatch(handleAddTodo(merch));
  }
});

 const MerchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Merch);

export default MerchContainer;