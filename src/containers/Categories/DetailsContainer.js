import React, {Component} from 'react';

import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import StackGrid, {transitions, easings} from 'react-stack-grid';
import Waypoint from 'react-waypoint';
import Loader from '../Home/LoaderLontainer'
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

    };

    componentDidMount() {
        this.props.fetchCategory(this.props.categoryId);
        this.props.loadMoreProducts(this.props.categoryId, 1)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.categoryId !== this.props.categoryId) {
            this.props.clearProducts();
            this.props.fetchCategory(nextProps.categoryId);
            this.props.loadMoreProducts(nextProps.categoryId, 1)
        }

    }

    render() {
        const {categoryItem, subCategories, categoryProducts, loadMoreProducts, page, isLoading} = this.props;
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

                    <StackGrid
                        monitorImagesLoaded
                        columnWidth={'50%'}
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
                        {categoryProducts.map((product) => (
                            <figure key={product.id} className="image">
                                <img src={product.image.sizes.IPhone.url} alt=""/>
                                <Link to={`/product/${product.id}`}>
                                    <figcaption>{product.name}</figcaption>
                                </Link>
                            </figure>
                        ))
                        }
                    </StackGrid>
                    <Waypoint onEnter={()=> {
                        if (!isLoading) {
                            loadMoreProducts(categoryItem.id, page)
                        }
                    }}/>
                </div>

                <Loader isLoading={isLoading}/>
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
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...categoriesActions, dispatch
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
