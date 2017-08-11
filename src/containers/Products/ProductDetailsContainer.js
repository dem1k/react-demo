import React, {Component} from 'react';

import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';


import * as productsActions from '../../actions/products';
class ProductDetailsContainer extends Component {

    static propTypes = {
        isLoading: PropTypes.bool,
        productId: PropTypes.string,
        productItem: PropTypes.object,
    };

    componentDidMount() {
        this.props.fetchProduct(this.props.productId);
    }

    render() {
        const {productItem, isLoading, productId} = this.props;
        if (isLoading == true) {
            return (<div><p>Loading ....</p></div>);
        }else{
            return (
                <div>
                    <img width={'100%'} src={productItem.image.sizes.Best.url} alt={productId}/>
                    <strong>{productItem.name}</strong>
                </div>
            );
        }
    }

}

function mapStateToProps(state, ownProps) {

    return {
        productId: ownProps.params.productId,
        isLoading: state.productsReducer.isLoading,
        productItem: state.productsReducer.productItem,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...productsActions, dispatch
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer);
