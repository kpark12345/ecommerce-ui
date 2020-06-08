import { connect } from "react-redux";
import Merch from "./../components/Merch.jsx";
import handleMerchClicked from "./../actions/handleMerchClicked.js";

 const mapStateToProps = store => ({
  productClicked: store.merch
});

 const mapDispatchToProps = dispatch => ({
  handleMerchClicked: clicked => {
    dispatch(handleMerchClicked(clicked));
  }
});

 const MerchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Merch);

export default MerchContainer;