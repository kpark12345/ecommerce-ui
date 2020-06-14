import { connect } from "react-redux";
import MobileBody from "./../components/MobileBody.jsx";

 const mapStateToProps = store => ({
  productClicked: store.productClicked
});

 const mapDispatchToProps = dispatch => ({
  
});

 const MobileBodyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileBody);

export default MobileBodyContainer;