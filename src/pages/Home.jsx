import Footer from 'components/Layout/Footer';
import NavBar from 'components/Nav/NavBar';
import SideBar from 'components/SideBarDir/SideBar';
import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <hr></hr>
                <h1>Home Page</h1>
                <SideBar/>
                <Footer />
            </div>
        );
    }
}

export default Home;