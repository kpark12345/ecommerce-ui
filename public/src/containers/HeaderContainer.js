import { connect } from "react-redux";
import Header from "./../components/Header.jsx";
import handleMerchClicked from "./../actions/handleMerchClicked.js";

const mapStateToProps = store => ({
  productClicked: store.productClicked
});

const mapDispatchToProps = dispatch => ({
  handleMerchClicked: clicked => {
    dispatch(handleMerchClicked(clicked));
  }
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;