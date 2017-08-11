import React, {Component} from 'react';
import {Navbar, FormControl, FormGroup} from 'react-bootstrap';
import * as types from '../../actions/actionTypes';



class HeaderContainer extends Component {

    componentDidMount() {
    }

    handleSearch = () => {
        return (dispatch) => {
            dispatch({type: types.SEARCH});
        }
    }

    render() {

        return (

                <header className="header">
                    <Navbar>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" onChange={this.handleSearch}/>
                        </FormGroup>
                    </Navbar>
                </header>

        );
    }

}



export default HeaderContainer;
