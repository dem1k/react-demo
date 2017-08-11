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

        if (!isLoading) {
            return (
                <div>
                    <img width={'100%'} src={productItem.image?productItem.image.sizes.Best.url:null} alt={productId}/>
                    <strong>{productItem.name}</strong>
                </div>
            );
        }else{
            return (<div className="loading">Loading&#8230;</div>);
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
