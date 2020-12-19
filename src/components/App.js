import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

class App extends React.Component {

    state = { images: [], count: 0 };

    onSearchSubmit = async (searchTerm) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: searchTerm },
        });

        this.setState({ images: response.data.results, count: response.data.total });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
};

export default App;