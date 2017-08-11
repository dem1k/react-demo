import React, {Component} from 'react';

import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import StackGrid, {transitions, easings} from 'react-stack-grid';
import InfiniteScroll from 'react-infinite-scroll-component';
import LazyLoad from 'react-lazyload';
import Header from '../Home/HeaderContainer'
import Footer from '../Home/FooterContainer'
import * as categoriesActions from '../../actions/categories';

import '../../css/product.css'
const transition = transitions.scaleDown;
class DetailsContainer extends Component {

    static propTypes = {
        categoryItem: PropTypes.object,
        subCategories: PropTypes.array,
        categoryProducts: PropTypes.array,
        page: PropTypes.number,
        isLoading: PropTypes.bool,
        hasMore: PropTypes.bool,
    };

    componentDidMount() {
        this.props.fetchCategory(this.props.categoryId);
        this.props.fetchProducts(this.props.categoryId);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.categoryId !== this.props.categoryId) {
            this.props.clearProducts();
            this.props.fetchCategory(nextProps.categoryId);
            this.props.fetchProducts(nextProps.categoryId);
        }

    }

    render() {

        const {categoryItem, subCategories, categoryProducts, loadMoreProducts, page, hasMore, isLoading} = this.props;

        if (isLoading) {
            return <div>
                <div className="loading">Loading&#8230;</div>
            </div>
        }
        return (
            <div>
                <Header/>
                <div className="content">
                    <h3>{categoryItem.fullName}</h3>
                    <div className="subcat">
                        <ul style={{width: 100 * subCategories.length}}>
                            {subCategories.map((subCategory, index) => (
                                <li key={subCategory.id}>
                                    <Link to={`/categories/${subCategory.id}`}>
                                        {subCategory.name}
                                    </Link>
                                </li>))}
                        </ul>
                    </div>
                    <InfiniteScroll next={()=> {
                        loadMoreProducts(categoryItem.id, page)
                    }}
                                    hasMore={hasMore}
                                    endMessage={<div>...</div>}>

                        <StackGrid
                            monitorImagesLoaded
                            columnWidth={150}
                            duration={600}
                            gutterWidth={15}
                            gutterHeight={15}
                            easing={easings.cubicOut}
                            appearDelay={60}
                            appear={transition.appear}
                            appeared={transition.appeared}
                            enter={transition.enter}
                            entered={transition.entered}
                            leaved={transition.leaved}
                        >
                            {categoryProducts.map((product, index) => (
                                <div>
                                    <Link key={index} to={`/product/${product.id}`}>
                                        <figure className="image">
                                            <LazyLoad height={product.image.sizes.Best.height}><img
                                                src={product.image.sizes.Best.url} alt=""/></LazyLoad>
                                            <figcaption>{product.name}</figcaption>
                                        </figure>
                                    </Link>
                                </div>
                            ))
                            }
                        </StackGrid>
                    </InfiniteScroll>
                </div>
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {

    return {
        categoryId: ownProps.params.categoryId,
        categoryItem: state.categoriesReducer.categoryItem,
        categoryProducts: state.categoriesReducer.categoryProducts,
        subCategories: state.categoriesReducer.subCategories,
        page: state.categoriesReducer.page,
        isLoading: state.categoriesReducer.isLoading,
        hasMore: state.categoriesReducer.hasMore,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...categoriesActions, dispatch
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
