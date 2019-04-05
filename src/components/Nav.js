import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li><NavLink to='/' exact activeClassName='active'>Home</NavLink></li>
        <li><NavLink to='/events' activeClassName='active'>Events</NavLink></li>
        <li><NavLink to='/ticket' activeClassName='active'>Ticket</NavLink></li>
      </ul>
    </nav>
  )
}
