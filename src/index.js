import React from 'react';
import ReactDOM from 'react-dom';

// import custom files
import SearchBar from './components/search_bar';

// YouTube API key
const API_KEY = 'AIzaSyCruo2KOa0sbcdCp4mNc0KSmcLa5VTE1CU';

// const App = function() {
//   return <div>hi!</div>;
// }
// const = es6 syntax
// = () => { } new function syntax, difference is /this/ scope
const App = () => {
  return (
      <div>
        <SearchBar />
      </div>
  );
}

// render it to the DOM
// point the App instance to the container element
ReactDOM.render(<App />, document.querySelector('.container'));