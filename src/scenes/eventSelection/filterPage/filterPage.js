import { useNavigate } from 'react-router-dom'

import { Switch } from 'src/components'

import { useStyle } from './style'

const eventTypes = [
  { title: 'Serata di ballo', image: 'danceNight.jpg', id: 1 },
  { title: 'Festa di laurea', image: 'danceNight.jpg', id: 2 },
  { title: 'Festa di compleanno', image: 'danceNight.jpg', id: 3 },
  { title: 'Evento aziendale', image: 'danceNight.jpg', id: 4 },
  { title: 'Serata di ballo', image: 'danceNight.jpg', id: 5 },
  { title: 'Festa di laurea', image: 'danceNight.jpg', id: 6 },
  { title: 'Festa di compleanno', image: 'danceNight.jpg', id: 7 },
]

const checkForMatches = (item, array) => {
  const result = array.find(el => el.id === item.id)
  return result
}

const FilterPage = ({ handleFilterByType, selectedTypes = [] }) => {
  const classes = useStyle()
  const navigate = useNavigate()

  return (
    <div className={classes.container}>
      <div className="header">
        <span>Filtra per categoria</span>
        <div
          onClick={() => navigate('/event-selection')}
          className="filterIconContainer"
        >
          <img alt="filter" src="./images/filter.png" />
          <span>{selectedTypes.length}</span>
        </div>
      </div>
      <div className="body">
        {eventTypes.map(type => (
          <div
            className={`event ${
              checkForMatches(type, selectedTypes) ? 'selected' : ''
            }`}
            onClick={() => handleFilterByType(type)}
          >
            <img alt="event" src={`./images/${type.image}`} />
            <div>{type.title}</div>
          </div>
        ))}

        <hr />

        <div className="title">Filtra per tipo di musica</div>
        <div className="musicFilterItem">
          <span>Techno</span>
          <div>
            <Switch />
          </div>
        </div>
        <div className="musicFilterItem">
          <span>Latino americana</span>
          <div>
            <Switch />
          </div>
        </div>
        <div className="musicFilterItem">
          <span>Raggaeton</span>
          <div>
            <Switch />
          </div>
        </div>
        <div className="musicFilterItem">
          <span>House</span>
          <div>
            <Switch />
          </div>
        </div>
        <div className="seeAllTextContainer">
          <span>Mostra tutto</span>
        </div>
        <hr />

        <div className="switchItem">
          <div className="left">
            <img alt="promotion" src="./images/euro.png" />
            <span>Promozini</span>
          </div>
          <div className="right">
            <Switch />
          </div>
        </div>
        <div className="switchItem">
          <div className="left">
            <img alt="promotion" src="./images/euro.png" />
            <span>Del prezzo piu basso</span>
          </div>
          <div className="right">
            <Switch />
          </div>
        </div>
        <div className="switchItem">
          <div className="left">
            <img alt="promotion" src="./images/euro.png" />
            <span>I piu recensiti</span>
          </div>
          <div className="right">
            <Switch />
          </div>
        </div>

        <hr />

        <div className="title">Filtra per zona</div>
        <div className="zonesContainer">
          <span>Centrale</span>
          <span>San Siro</span>
          <span>Citylife</span>
          <span>Brera</span>
          <span>Isola</span>
          <span>Lambrate</span>
        </div>
      </div>
    </div>
  )
}

export default FilterPage
