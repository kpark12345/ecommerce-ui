import { connect } from "react-redux";
import MobileMerch from "./../components/MobileMerch.jsx";
import handleMerchClicked from "./../actions/handleMerchClicked.js";

 const mapStateToProps = store => ({
  productClicked: store.merch
});

 const mapDispatchToProps = dispatch => ({
  handleMerchClicked: clicked => {
    dispatch(handleMerchClicked(clicked));
  }
});

 const MobileMerchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileMerch);

export default MobileMerchContainer;