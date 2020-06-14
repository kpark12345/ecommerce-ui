import { connect } from "react-redux";
import Header from "./../components/Header.jsx";
import handleProductClicked from "./../actions/handleProductClicked.js";

const mapStateToProps = store => ({
  productClicked: store.productClicked
});

const mapDispatchToProps = dispatch => ({
  handleProductClicked: clicked => {
    dispatch(handleProductClicked(clicked));
  }
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;