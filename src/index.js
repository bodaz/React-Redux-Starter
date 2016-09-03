import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// import custom files
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// YouTube API key
const API_KEY = 'AIzaSyCruo2KOa0sbcdCp4mNc0KSmcLa5VTE1CU';

// const App = function() {
//   return <div>hi!</div>;
// }
// const = es6 syntax
// = () => { } new function syntax, difference is /this/ scope
// const App = () => {
//   return (
//       <div>
//         <SearchBar />
//       </div>
//   );
// }
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('the chainsmokers');
  }

  // YouTube search in its own method, takes term as its parameter
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // console.log(data);
      // this.setState({ videos: videos }); // using es6 syntax we can short it to just videos
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        {/* VideosList receives a list of videos from the parent App component, also passing props */}
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

// render it to the DOM
// point the App instance to the container element
ReactDOM.render(<App />, document.querySelector('.container'));