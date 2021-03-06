import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LoaderContainer extends Component {
    static propTypes = {
        isLoading: PropTypes.bool,
    };

    componentDidMount() {
    }

    render() {
        if (this.props.isLoading) {
            return <div className="loading">Loading&#8230;</div>;
        }
        return <div></div>;
    }

}
export default LoaderContainer
