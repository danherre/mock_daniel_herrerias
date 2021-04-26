import react from 'react';
import PostCollection from './postCollection';
import './mock_style.css';

class Posts extends react.Component {
    state = {numCollections: 2, collections: [<PostCollection numCollections={1}/>]};

    render() {
        return(
            <div className="posts">
                <h1>Últimas Noticias</h1>
                {this.state.collections}
                <div>
                    <button onClick={this.addCollection} type="button" class="btn btn-info">Mostrar más</button>
                </div>
            </div>
        );
    }

    addCollection = () => {
        this.setState({
            numCollections: this.state.numCollections + 1
        })
        this.setState({
            collections: [...this.state.collections, <PostCollection numCollections={this.state.numCollections}/>]
        })
    }
}

export default Posts;