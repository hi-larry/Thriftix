import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Profile from './Profile'
import Events from './Events'
import Ticket from './Ticket'
import AddTicket from './AddTicket'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
        <Nav />
        {this.props.loading
          ? null
          : <div>
              <Route exact path='/' component={Profile} />
              <Route exact path='/events' component={Events} />
              <Route exact path='/ticket' component={Ticket} />
            </div>
        }
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    loading: authUser === null
  }
}

export default connect(mapStateToProps)(App);
