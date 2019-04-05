import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {
  render() {
    const { avatarURL, name, email } = this.props

    return (
      <div>
        <h1>Your Profile</h1>
        <img src={avatarURL} alt='image for user' />
        <p>{name}</p>
        <p>{email}</p>
        <a href=''>Your tickets</a>
      </div>
    )
  }
}

function mapStateToProps({ authUser, users }) {
  const user = users[authUser]

  return {
    ...user
  }
}

export default connect(mapStateToProps)(Profile)
