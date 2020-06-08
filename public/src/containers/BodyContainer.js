import { connect } from "react-redux";
import Body from "./../components/Body.jsx";

 const mapStateToProps = store => ({
  productClicked: store.merch
});

 const mapDispatchToProps = dispatch => ({
  
});

 const BodyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);

export default BodyContainer;