import React, {Component} from 'react';
import {Navbar, FormControl, FormGroup, Button} from 'react-bootstrap';
import * as types from '../../actions/actionTypes';



class FooterContainer extends Component {

    componentDidMount() {
    }

    handleSearch = () => {
        return (dispatch) => {
            dispatch({type: types.SEARCH});
        }
    }

    render() {

        return (
            <div>
                <footer className="footer">
                    <span className="glyphicon glyphicon-map-marker"></span>
                    <span className="glyphicon glyphicon-search"></span>
                    <span className="glyphicon glyphicon-cloud"></span>
                    <span className="glyphicon glyphicon-user"></span>
                </footer>
            </div>
        );
    }

}



export default FooterContainer;
