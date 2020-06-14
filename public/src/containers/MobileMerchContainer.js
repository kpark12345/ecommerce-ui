import { connect } from "react-redux";
import MobileMerch from "./../components/MobileMerch.jsx";
import handleProductClicked from "./../actions/handleProductClicked.js";

 const mapStateToProps = store => ({
  productClicked: store.productClicked
});

 const mapDispatchToProps = dispatch => ({
  handleProductClicked: clicked => {
    dispatch(handleProductClicked(clicked));
  }
});

 const MobileMerchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileMerch);

export default MobileMerchContainer;