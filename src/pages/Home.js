import React, {useEffect} from "react";
import Home from "../components/Home";
import {connect} from "react-redux";
import {addPost, deletePost, getAllPosts} from "../store/actions/posts";


const HomeContainer = (props) => {

    useEffect(() => {
        props.getAllPosts();
    }, []);



    return <Home
        posts={props.posts}
        isReady={props.isReady}
        deletePost={props.deletePost}
        addPost={props.addPost}/>

};

const mapStateToProps = (state) => ({
    posts: state.posts.posts,
    isReady: state.posts.isReady
});



export default connect(mapStateToProps, {getAllPosts, addPost,deletePost})(HomeContainer);