import { connect } from "react-redux";
import MobileHeader from "./../components/MobileHeader.jsx";
import handleProductClicked from "./../actions/handleProductClicked.js";

const mapStateToProps = store => ({
  productClicked: store.productClicked
});

const mapDispatchToProps = dispatch => ({
  handleProductClicked: clicked => {
    dispatch(handleProductClicked(clicked));
  }
});

const MobileHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileHeader);

export default MobileHeaderContainer;