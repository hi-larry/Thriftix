import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleAddTicket } from '../actions/tickets'

class AddTicket extends Component {
  state = {
    event: '',
    fileURL: '',
    originalPrice: 20,
    sellingPrice: 15
  }

  handleInputChange = (e) => {
    const { value, name } = e.target;

    this.setState(() => ({
      [name]: value
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/');
    this.props.dispatch(handleAddTicket(this.state))
  }

  isDisabled = () => {
    const { event, originalPrice } = this.state

    return event === '' || originalPrice === ''
  }

  render() {
    const { event, fileURL, originalPrice, sellingPrice } = this.state;

    return (
      <div>
        <h1>Sell your Ticket</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={event} onChange={this.handleInputChange} name='event' placeholder='Event Name' className='input'/>
          <input type='text' value={fileURL} onChange={this.handleInputChange} name='fileURL' placeholder='File' className='input'/>
          <input type='text' value={originalPrice} onChange={this.handleInputChange} name='originalPrice' placeholder='Original Price' className='input'/>
          <input type='text' value={sellingPrice} onChange={this.handleInputChange} name='sellingPrice' placeholder='Selling Price' className='input'/>
          <Button type='submit' variant='danger' onChange={this.handleInputChange} disabled={this.isDisabled()}>Add Ticket</Button>
        </form>
      </div>
    )
  }
}

export default connect()(AddTicket)
