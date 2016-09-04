import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

// container BookList
// containers are our links between React and Redux
class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book) }
          className="list-group-item" >
          { book.title }
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    );
  }

}

// takes in application state
// return as props inside our BookList container
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote bookList from a component to a container
// make the new dispatch method, selectBook as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);