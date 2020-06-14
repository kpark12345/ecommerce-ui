import { connect } from "react-redux";
import Product from "./../components/Product.jsx";


 const mapStateToProps = store => ({
  productObject: store.productObject
});

 const mapDispatchToProps = dispatch => ({
  
});

 const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);

export default ProductContainer;