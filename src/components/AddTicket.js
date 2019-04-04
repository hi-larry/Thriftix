import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class AddTicket extends Component {
  state = {
    event: '',
    fileURL: '',
    originalPrice: 20,
    sellingPrice: 15
  }

  render() {
    const { event, fileURL, originalPrice, sellingPrice } = this.state;

    return (
      <div>
        <h1>Sell your Ticket</h1>
        <form>
          <input type='text' value={event} name='event' placeholder='Event Name' className='input'/>
          <input type='text' value={fileURL} name='fileURL' placeholder='File' className='input'/>
          <input type='text' value={originalPrice} name='originalPrice' placeholder='Original Price' className='input'/>
          <input type='text' value={sellingPrice} name='sellingPrice' placeholder='Selling Price' className='input'/>
          <Button type='submit' variant='danger'>Add Ticket</Button>
        </form>
      </div>
    )
  }
}

export default AddTicket
