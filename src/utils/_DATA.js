let users = {
  marshbox: {
    id: 'marshbox',
    name: 'Hilary Chan',
    email: 'hilarychan079@gmail.com',
    avatarURL: 'http://tinyurl.com/zxksxg5',
    selling: ['am8ehyc8byjqgar0jgpub9', 'loxhs1bqm25b708cmbf3g'],
    buying: []
  },
  razvanlm: {
    id: 'razvanlm',
    name: 'Razvan LM',
    email: 'deathionex@gmail.com',
    avatarURL: 'http://tinyurl.com/zxksxg5',
    selling: [],
    buying: ['loxhs1bqm25b708cmbf3g']
  }
}

let events = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    title: 'Marshmello',
    datetime: 'SAT APR 20 10PM',
    imageURL: 'http://tinyurl.com/y2e8fkmx',
    tickets: ['am8ehyc8byjqgar0jgpub9', 'loxhs1bqm25b708cmbf3g'],
    venue: 'xyz'
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '8xf0y6ziyjabvozdd253nd',
    title: 'Martin Garrix',
    datetime: 'SAT APR 20 10PM',
    imageURL: 'http://tinyurl.com/y27josyw',
    tickets: [],
    venue: 'xyz'
  }
}

let tickets = {
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    event: '8xf0y6ziyjabvozdd253nd',
    originalPrice: '30',
    sellingPrice: '30',
    currency: 'CAD',
    type: 'GA',
    fileURL: '',
    status: 'available',
    seller: 'marshbox',
    buyer: ''
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    event: '8xf0y6ziyjabvozdd253nd',
    originalPrice: '30',
    sellingPrice: '30',
    currency: 'CAD',
    type: 'GA',
    fileURL: '',
    status: 'sold',
    seller: 'marshbox',
    buyer: 'razvanlm'
  }
}

let venues = {
  'xyz': {
    id: 'xyz',
    name: 'New City Gas',
    address: '10 Ottawa'
  }
}

// functions

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getEvents () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...events}), 1000)
  })
}

function formatTicket ({ user, ticket }) {
  return {
    ...ticket,
    id: generateUID(),
    currency: 'CAD',
    type: 'GA',
    fileURL: '',
    status: 'available',
    seller: user,
    buyer: ''
  }
}

export function _saveTicket ({ user, ticket }) {
  return new Promise((res, rej) => {
    const formattedTicket = formatTicket(user, ticket)

    setTimeout(() => {
      tickets = {
        ...ticket,
        [formattedTicket.id]: formattedTicket,
      }

      res(formattedTicket)
    }, 1000)
  })
}

export function _saveEventTicket ({ authedUser, id, event }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const user = users[authedUser]
      const ticket = tickets[id]

      users = {
        ...users,
        [authedUser]: {
          ...user,
          selling: user.selling.concat([id])
        }
      }

      events = {
        ...events,
        [ticket.event]: {
          ...ticket.event,
          tickets: ticket.event.concat([id])
        }
      }


      res()
    }, 500)
  })
}
