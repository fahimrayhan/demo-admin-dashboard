import Footer from 'components/Layout/Footer';
import NavBar from 'components/Nav/NavBar';
import SideBar from 'components/SideBarDir/SideBar';
import React, { Component } from 'react';

class AllPost extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <hr></hr>
                <h1>All Posts</h1>
                <SideBar />
                <Footer />
            </div>
        );
    }
}

export default AllPost;