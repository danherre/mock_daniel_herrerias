import React from 'react';
import './mock_style.css';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "", description: "", errorMessage: "" };
    };

    render() {
        return (
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{this.state.title}</h5>
                        <p class="card-text">{this.state.description}</p>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount(props) {
        let toFetch = 'https://jsonplaceholder.typicode.com/posts/' + this.props.numPosts;
        fetch(toFetch)
            .then(response => response.json())
            .then(json => this.setState({title: json.title, description: json.body}))
    }
};

export default Post;