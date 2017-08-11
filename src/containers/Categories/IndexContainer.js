import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as categoriesActions from '../../actions/categories';


class IndexContainer extends Component {

    static propTypes = {
        categories: PropTypes.array,
    };

    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {

        return (
            <div className="content">
                <h1>Categories</h1>
                {this.props.categories.map(category => (
                    <ul key={category.id}>
                        <li>
                            <Link to={`/categories/${category.id}`}>
                                <span>{category.fullName}</span>
                            </Link>
                        </li>
                    </ul>)
                )
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categoriesReducer.categories,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...categoriesActions, dispatch
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
