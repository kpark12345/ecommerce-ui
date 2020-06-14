import { connect } from "react-redux";
import Merch from "./../components/Merch.jsx";
import handleProductClicked from "./../actions/handleProductClicked.js";
import handleProductObject from "./../actions/handleProductObject.js";

 const mapStateToProps = store => ({
  productClicked: store.productClicked,

});

 const mapDispatchToProps = dispatch => ({
  handleProductClicked: clicked => {
    dispatch(handleProductClicked(clicked));
  },
  handleProductObject: product => {
    dispatch(handleAddTodo(product));
  }
});

 const MerchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Merch);

export default MerchContainer;