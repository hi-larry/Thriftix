import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Image, Card, Button } from 'react-bootstrap'

class Profile extends Component {
  render() {
    const { avatarURL, name, email } = this.props

    return (
      <div class='profile-container'>
        <h2>Your Profile</h2>
        <Image src={avatarURL} alt='image for user' roundedCircle />
        <Card body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{email}</Card.Text>
        <Link to='/ticket'><Button variant='danger'>Your tickets</Button></Link>
        </Card>

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
