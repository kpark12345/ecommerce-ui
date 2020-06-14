import { connect } from "react-redux";
import MobileProduct from "./../components/MobileProduct.jsx";


 const mapStateToProps = store => ({
  productObject: store.productObject
});

 const mapDispatchToProps = dispatch => ({
  
});

 const MobileProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileProduct);

export default MobileProductContainer;