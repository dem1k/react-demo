import React, {Component} from 'react';

class FooterContainer extends Component {

    componentDidMount() {
    }

    render() {
        return (
                <footer className="footer">
                    <span className="glyphicon glyphicon-map-marker"></span>
                    <span className="glyphicon glyphicon-search"></span>
                    <span className="glyphicon glyphicon-cloud"></span>
                    <span className="glyphicon glyphicon-user"></span>
                </footer>
        );
    }

}
export default FooterContainer;
