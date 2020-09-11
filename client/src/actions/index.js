import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';


export const actFetchProductRequest = () => {
    return dispatch => {
        return callApi('api/product', 'GET', null).then((res) => {
            dispatch(actFetchProducts(res.data))
        })
    }
}
export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
   }
}

export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return callApi(`api/product/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id))
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}
// goi len server luu sau do nhan lai 1 product va tien hanh dispatch action luu product vao store
export const actAddProductRequest = (product) => {
    return dispatch => {
        return callApi('api/product', 'POST', product).then(res => dispatch(actAddProduct(res.data)))
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actGetProductRequest = (id) => {
    return dispatch => {
        return callApi(`api/product/${id}`,'GET',null).then(res => dispatch(actGetProduct(res.data)))
    }
}

export const actGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return callApi('api/product', 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data))
        })
    }
}

export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}

export const actSearchProductRequest = (keyword) => {
    return dispatch => {
        callApi(`api/product/search?search=${keyword}`, 'GET', null).then(res => dispatch(actSearchProduct(keyword,res.data)))
        
    }
}

export const actSearchProduct = (keyword,product) => {
    return {
        type: Types.SEARCH,
        keyword,
        product
    }
}