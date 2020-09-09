import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actFetchProductRequest, actDeleteProductRequest} from '../../actions';
import Pagination from '../../components/Pagination/Pagination';
class ProductListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageSize: 4,
      pageIndex: 1,

    }
  }
  

  componentDidMount() {
    this.props.fetchProductsRequest()
  }

  onDeleteProduct = (id) => {
    this.props.deleteProductRequest(id)
  }

  paginate = pageNum => {
    this.setState({ pageIndex: pageNum })
  }
  
    
  nextPage = () => {
    let { products } = this.props
    let {pageSize,pageIndex} = this.state
      if (pageIndex === Math.ceil(products.length / pageSize)) {
        this.setState({ pageIndex: 1 })

      } else {
        this.setState({ pageIndex: pageIndex + 1 })
      }  
    }
  prevPage = () => {
    let { products } = this.props
    let {pageSize,pageIndex} = this.state
      if (pageIndex === 1) {
        this.setState({
          pageIndex: Math.ceil(products.length / pageSize)
        })
      } else {
        this.setState({ pageIndex: pageIndex - 1 })
      }
    }
  render() {
    let { products } = this.props
    let { pageSize, pageIndex } = this.state
    let indexLastPage = pageIndex * pageSize
    let indexFirstPage = indexLastPage - pageSize
    let currentProducts = products.slice(indexFirstPage, indexLastPage)
    
    // console.log('component render lan dau')
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to='/product/add' className="btn btn-primary mt-4">
          Add Product
        </Link>
        <div className="mt-4">
          <ProductList>{this.showProducts(currentProducts)}</ProductList>
        </div>
        <Pagination
              pageSize={pageSize}
              total={products.length}
              paginate={this.paginate}
              nextPage={this.nextPage}
              prevPage={this.prevPage}
              pageIndex={pageIndex}
            />
      </div>
    );
  }
  showProducts = (products) => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          index={index}
          onDeleteProduct={this.onDeleteProduct}
        />
      ));
    } 
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchProductsRequest: () => dispatch(actFetchProductRequest()),
    deleteProductRequest: (id) => dispatch(actDeleteProductRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
