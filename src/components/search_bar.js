// search_bar.js
// the search bar at the top of the page

import React, { Component } from 'react';

// const SearchBar = () => {
//   return <input />;
// };
// from a functional component to a class based component to add more features to it
// ideally, start with functional component, but later if need
// extra functionality such as State, refactoring it then to class based
// only class based component have States
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  // () {} == way to declare method inside class
  render() {
    // return <input onChange={ event => console.log(event.target.value) }/>;
    // we should only change state by using setState
    // the only time we do it directly is in the constructor
    return (
      <div>
        {/*input is a controlled component, input controlled by the state*/}
        <p>Type below: </p>
        <input
          value={this.state.term}
          onChange={ event => this.setState({ term: event.target.value }) } />
          {/*Value of the input: {this.state.term}*/}
      </div>
    );
  }
  // onInputChange(event) {
  //   console.log(event.target.value);
  // } // condensed into one line with es6 syntax
}

// any other file requires SearchBar will import it
export default SearchBar;
