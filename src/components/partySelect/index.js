import { useState } from 'react'
import { useStyle } from './style'
import { checkForMatches } from 'src/helpers/functions'

const PartySelect = ({ items, selectedEvent, setSelectedEvent }) => {
  const classes = useStyle({ selectedEvent })

  const [expanded, setIsExpanded] = useState(false)

  const handleExpansion = () => {
    setIsExpanded(prevValue => !prevValue)
  }

  return (
    <div className={classes.container}>
      <div className="header">
        <span>{selectedEvent.value || 'Cosa stai cercando?'}</span>
        <img src="./images/down.png" alt="arrow" onClick={handleExpansion} />
      </div>
      {expanded && (
        <div className="options">
          {items.map(item => (
            <div
              className={`item ${
                checkForMatches(item, [selectedEvent]) ? 'selected' : ''
              }`}
              onClick={() => setSelectedEvent(item)}
            >
              <img alt={item.value} src={item.image} />
              <span>{item.value}</span>
            </div>
          ))}
          <div className="otherOption">
            <span>altro...</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default PartySelect
