import { useNavigate } from 'react-router-dom'
import { checkForMatches } from 'src/helpers/functions'
import { Switch } from 'src/components'

import { useStyle } from './style'

const FilterPage = ({
  handleFilterByType,
  selectedTypes = [],
  hasPromotion,
  setHasPromotion,
  selectedMusicGenres,
  setSelectedMusicGenres,
  hasLowPrice,
  setHasLowPrice,
  selectedZones,
  setSelectedZones,
  cityZones,
  musicGenres,
  nightTypes,
}) => {
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
        {nightTypes.map(type => (
          <div
            className={`event ${
              checkForMatches(type, selectedTypes) ? 'selected' : ''
            }`}
            onClick={() => handleFilterByType(type)}
          >
            <img alt="event" src={`./images/danceNight.jpg`} />
            <div>{type.value}</div>
          </div>
        ))}

        <hr />

        <div className="title">Filtra per tipo di musica</div>
        {musicGenres.map(item => (
          <div className="musicFilterItem">
            <span>{item.name}</span>
            <div>
              <Switch
                value={checkForMatches(item, selectedMusicGenres)}
                onChange={() => setSelectedMusicGenres(item)}
              />
            </div>
          </div>
        ))}

        <div className="seeAllTextContainer">
          <span>Mostra tutto</span>
        </div>
        <hr />

        <div className="switchItem">
          <div className="left">
            <img alt="promotion" src="./images/discount_black.png" />
            <span>Promozini</span>
          </div>
          <div className="right">
            <Switch
              value={hasPromotion}
              onChange={() => setHasPromotion(!hasPromotion)}
            />
          </div>
        </div>
        <div className="switchItem">
          <div className="left">
            <img alt="lowPrice" src="./images/euro.png" />
            <span>Del prezzo piu basso</span>
          </div>
          <div className="right">
            <Switch
              value={hasLowPrice}
              onChange={() => setHasLowPrice(!hasLowPrice)}
            />
          </div>
        </div>
        {/* <div className="switchItem">
          <div className="left">
            <img alt="promotion" src="./images/euro.png" />
            <span>I piu recensiti</span>
          </div>
          <div className="right">
            <Switch />
          </div>
        </div> */}

        <hr />

        <div className="title">Filtra per zona</div>
        <div className="zonesContainer">
          {cityZones.map(item => (
            <span
              className={`${
                checkForMatches(item, selectedZones) ? 'selected' : ''
              }`}
              onClick={() => setSelectedZones(item)}
            >
              {item.value}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FilterPage
