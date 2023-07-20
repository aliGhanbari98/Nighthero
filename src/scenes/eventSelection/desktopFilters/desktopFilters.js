import { useRef } from 'react'
import { checkForMatches } from 'src/helpers/functions'
import { Switch } from 'src/components'

import { useStyle } from './style'

const DesktopFilters = ({
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
  restaurantsCategories,
  selectedCategories,
  onCategoriesChange,
}) => {
  const classes = useStyle()

  const elementRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]

  const scrollToElement = index => {
    if (elementRefs[index].current) {
      elementRefs[index].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div className={classes.container}>
      <div className="header">
        <div onClick={() => scrollToElement(0)}>
          <img alt="lowPrice" src="./images/euro.png" />
          <span>Tipo di serata</span>
          <span className="countText">{selectedTypes?.length}</span>
        </div>
        <div onClick={() => scrollToElement(1)}>
          <img alt="lowPrice" src="./images/euro.png" />
          <span>Tipo di locale</span>
          {selectedCategories?.id && <span className="countText">1</span>}
        </div>
        <div onClick={() => setHasLowPrice(!hasLowPrice)}>
          <img alt="lowPrice" src="./images/euro.png" />
          <span>Dal prezzo piu basso</span>
          {hasLowPrice && (
            <img
              className="acceptIcon"
              alt="active"
              src="./images/accept.png"
            />
          )}
        </div>
        <div onClick={() => setHasPromotion(!hasPromotion)}>
          <img alt="promotion" src="./images/discount_black.png" />
          <span>Promozioni</span>
          {hasPromotion && (
            <img
              className="acceptIcon"
              alt="active"
              src="./images/accept.png"
            />
          )}
        </div>
        <div onClick={() => scrollToElement(2)}>
          <img alt="lowPrice" src="./images/euro.png" />
          <span>Tipo di musico</span>
          {selectedMusicGenres.length > 0 && (
            <span className="countText">{selectedMusicGenres.length}</span>
          )}
        </div>
        <div onClick={() => scrollToElement(3)}>
          <span>Zone</span>
        </div>
      </div>
      <div className="body">
        <div ref={elementRefs[0]} className="card">
          <div className="titleContainer">
            <span>TIPO DI SERATA</span>
          </div>
          <div className="serataBody">
            {nightTypes?.map(type => (
              <div className="event">
                <img alt="event" src={`./images/danceNight.jpg`} />
                <div>
                  <span>{type.value}</span>
                  <Switch
                    value={checkForMatches(type, selectedTypes)}
                    onChange={() => handleFilterByType(type)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={elementRefs[1]} className="card">
          <div className="titleContainer">
            <span>TIPO DI LOCALE</span>
          </div>
          <div className="localeBody">
            {restaurantsCategories.length
              ? restaurantsCategories.map((item, index) => (
                  <div
                    className={`${index === 0 ? 'firstItem' : 'singleItem'}  `}
                    onClick={() => onCategoriesChange(item)}
                  >
                    <img
                      className={
                        item.id === selectedCategories?.id ? 'selected' : ''
                      }
                      alt="dance-night"
                      src="./images/danceNight.jpg"
                    />
                    <span>{item.value}</span>
                  </div>
                ))
              : null}
          </div>
        </div>

        <div ref={elementRefs[2]} className="card">
          <div className="titleContainer">
            <span>TIPO DI MUSICO</span>
          </div>
          <div className="zonesBody">
            {musicGenres?.map(item => (
              <div className="musicFilterItem">
                <span onClick={() => setSelectedZones(item)}>{item.name}</span>
                <Switch
                  value={checkForMatches(item, selectedMusicGenres)}
                  onChange={() => setSelectedMusicGenres(item)}
                />
              </div>
            ))}
          </div>
        </div>

        <div ref={elementRefs[3]} className="card">
          <div className="titleContainer">
            <span>ZONE</span>
          </div>
          <div className="zonesBody">
            <div>
              <span>test</span>
              <Switch
                value={checkForMatches(1, selectedMusicGenres)}
                onChange={() => setSelectedMusicGenres(1)}
              />
            </div>
            {cityZones?.map(item => (
              <div>
                <span>{item.value}</span>
                <Switch
                  value={checkForMatches(item, selectedZones)}
                  onChange={() => setSelectedZones(item)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopFilters
