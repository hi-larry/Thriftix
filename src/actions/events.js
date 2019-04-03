export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'

export function receiveEvents(events) {
  return {
    type: RECEIVE_EVENTS,
    events
  }
}
