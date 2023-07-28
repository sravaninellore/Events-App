// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, clickEvent, isActive} = props
  const {imageUrl, name, location} = eventDetails

  const clickedEventClassName = isActive ? 'clicked-event' : ''

  const onClickEventItem = () => {
    const {id} = eventDetails
    clickEvent(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickEventItem}>
        <img
          src={imageUrl}
          alt="event"
          className={`${clickedEventClassName} event-image`}
        />
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
