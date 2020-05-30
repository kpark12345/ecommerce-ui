import { connect } from "react-redux";
import Merch from "./../components/Merch.jsx";

 const mapStateToProps = store => ({
  
});

 const mapDispatchToProps = dispatch => ({
  
});

 const MerchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Merch);

export default MerchContainer;