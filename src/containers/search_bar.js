import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term:'' };

    // bind /this/ to context when there's a callback
    this.onInputChange  = this.onInputChange.bind(this);
    this.onFormSubmit   = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    // console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // call the fetchWeather action creator whenever user submit
    this.props.fetchWeather(this.state.term);
    // clear search input
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">

        <input
          placeholder="Give a five-day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>

      </form>
    );
  }
}

// bind it to dispatch and mapping the action creator to props
// therefore, /this.props.fetchWeather/
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// passing null instead of state, always second argument
export default connect(null, mapDispatchToProps)(SearchBar);