import PostCreate from 'components/Forms/PostCreate';
import Footer from 'components/Layout/Footer';
import NavBar from 'components/Nav/NavBar';
import SideBar from 'components/SideBarDir/SideBar';
import React, { Component } from 'react';

class CreatePost extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <hr></hr>
                <h1>Create Post</h1>
                <SideBar />
                <PostCreate/>
                <Footer />
            </div>
        );
    }
}
export default CreatePost;