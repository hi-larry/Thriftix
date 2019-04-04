import React, { Component } from 'react';
import { connect } from 'react-redux'
import Events from './Events'
import AddTicket from './AddTicket'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        {this.props.loading
          ? null
          : <AddTicket />
        }

      </div>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    loading: authUser === null
  }
}

export default connect(mapStateToProps)(App);
