import React, {Component} from 'react';
import Categories from '../Categories/IndexContainer'
import Header from '../Home/HeaderContainer'
import Footer from '../Home/FooterContainer'

import '../../css/main.css'

class IndexContainer extends Component {

    render() {

        return (
            <div>
                <Header/>
                <Categories/>
                <Footer/>
            </div>
        );
    }

}




export default IndexContainer;//connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
