import react from 'react';
import PostCollection from './postCollection';

class Posts extends react.Component {
    state = {numCollections: 0};

    render() {
        return(
            <div className="posts">
                <h1>Últimas Noticias</h1>
                {this.addCollection(this.state.numCollections)}
            </div>
        );
    }

    addCollection(temp) {
        // Sé que cambiar state así no es lo más correcto, per usando setState aquí tenía problemas de stack
        this.state.numCollections = temp + 1;
        return <PostCollection numCollections={this.state.numCollections}/>;
    }
}

export default Posts;