import { connect } from "react-redux";
import MobileHeader from "./../components/MobileHeader.jsx";
import handleMerchClicked from "./../actions/handleMerchClicked.js";

const mapStateToProps = store => ({
  productClicked: store.productClicked
});

const mapDispatchToProps = dispatch => ({
  handleMerchClicked: clicked => {
    dispatch(handleMerchClicked(clicked));
  }
});

const MobileHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileHeader);

export default MobileHeaderContainer;