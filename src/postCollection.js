import React from 'react';
import Post from './post';
import './mock_style.css';

class PostCollection extends React.Component {
    constructor(props) {
        super(props);
        let temp = 4 * (props.numCollections - 1);
        this.state = {numPosts: temp};
        this.addPost = this.addPost.bind(this);
    };

    render() {
        return(
            <div className='postCollection'>
                <div class="row row-post">
                    {this.addPost(this.state.numPosts)}
                    {this.addPost(this.state.numPosts)}
                </div>
                <div class="row row-post">
                    {this.addPost(this.state.numPosts)}
                    {this.addPost(this.state.numPosts)}
                </div>
            </div>
        );
    }

    addPost = (temp) => {
        // Sé que cambiar state así no es lo más correcto, per usando setState aquí tenía problemas con setState
        this.state.numPosts = temp + 1;
        return <Post numPosts={this.state.numPosts}/>;
    }
}

export default PostCollection;