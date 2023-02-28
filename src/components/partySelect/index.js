import { useState } from 'react'
import { useStyle } from './style'

const PartySelect = ({ selectedEvent, setSelectedEvent }) => {
  const classes = useStyle({ selectedEvent })

  const [expanded, setIsExpanded] = useState(false)

  const handleExpansion = () => {
    setIsExpanded(prevValue => !prevValue)
  }

  return (
    <div className={classes.container}>
      <div className="header">
        <span>Cosa stai cercando?</span>
        <img src="./images/down.png" alt="arrow" onClick={handleExpansion} />
      </div>
      {expanded && (
        <div className="options">
          <div className="item item_1" onClick={() => setSelectedEvent(1)}>
            <img alt="dance-night" src="./images/danceNight.jpg" />
            <span>Serata di ballo</span>
          </div>
          <div className="item item_2" onClick={() => setSelectedEvent(2)}>
            <img alt="dance-night" src="./images/graduation.jpg" />
            <span>Festa di laurea</span>
          </div>
          <div className="item item_3" onClick={() => setSelectedEvent(3)}>
            <img alt="dance-night" src="./images/birthday.jpg" />
            <span>Festa di compleanno</span>
          </div>
          <div className="item item_4" onClick={() => setSelectedEvent(4)}>
            <img alt="dance-night" src="./images/corporateParty.jpg" />
            <span>Evento aziendale</span>
          </div>
          <div className="otherOption">
            <span>altro...</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default PartySelect
