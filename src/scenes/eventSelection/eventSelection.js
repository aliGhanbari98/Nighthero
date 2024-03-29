import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import LogoSVG from 'src/assets/icons/logo.svg'

import { MyModal } from 'src/components'
import CalendarModal from './modals/calendar/calendarModal'
import TimeModal from './modals/time/timeModal'
import PeopleModal from './modals/people/peopleModal'
import DesktopFilters from './desktopFilters'

import { checkForMatches, formatDate } from 'src/helpers/functions'

import { useStyle } from './style'

const priceRangesDic = {
  L: 1,
  M: 2,
  H: 3,
}

const FoundItem = ({ onClick, data, selectedNightTypes }) => {
  const classes = useStyle()

  const { category, details, hasGift, id, image, location, name, nightTypes } =
    data

  return (
    <div className={classes.foundItem}>
      <div onClick={() => onClick(id)} className="left">
        <img alt="event" src={image || './images/danceNight.jpg'} />
        <span>{category.value}</span>
      </div>
      <div className="right">
        <div className="nameContainer">
          <span className="name">{name}</span>
          {hasGift && <span className="gift">Gift</span>}
        </div>
        <div className="infoContainer">
          <div className="address">{location.address}</div>
          <div className="price">
            {Array(priceRangesDic[details.priceRange])
              .fill(details.priceRange)
              .map(() => (
                <img alt="eruo" src="./images/euro.png" />
              ))}
          </div>
          {/* <div className="rate">
            <img alt="eruo" src="./images/star.png" />
            <span>8/10</span>
          </div> */}
        </div>
        <div className="eventList">
          {nightTypes
            .sort((a, b) => a.rank - b.rank)
            .map(({ value, id }, i) => (
              <span
                className={`${i === 0 ? 'firstItem' : ''} ${
                  checkForMatches({ id }, selectedNightTypes) ? 'selected' : ''
                }`}
              >
                {value}
              </span>
            ))}
        </div>
      </div>
    </div>
  )
}

const EventSelection = ({
  selectedTypes,
  selectedTimeSlots,
  handleTimeSlot,
  selectedDate,
  selectedPeople,
  onDateChange,
  onPeopleChange,
  restaurantsData = [],
  selectedNightTypes,
  restaurantsCategories = [],
  selectedCategories,
  onCategoriesChange,
  searchedName,
  setSearchedName,
  searchHeaderExpanded,
  setSearchHeaderExpanded,
  onHeaderModalClose,
  desktopMode,
  selectedCity,
  onProfileClick,
}) => {
  const navigate = useNavigate()

  const [calendarModalOpen, setCalendarModalOpen] = useState(false)
  const [timeModalOpen, setTimeModalOpen] = useState(false)
  const [peopleModalOpen, setPeopleModalOpen] = useState(false)

  const onDateConfirm = date => {
    setCalendarModalOpen(false)
    onDateChange(date)
  }

  const onTimeConfirm = time => {
    setTimeModalOpen(false)
  }

  const onPeopleConfirm = people => {
    setPeopleModalOpen(false)
    onPeopleChange(people)
  }

  const classes = useStyle({
    calendarModalOpen,
    timeModalOpen,
    peopleModalOpen,
    desktopMode,
  })

  return (
    <div className={classes.container}>
      {searchHeaderExpanded && (
        <MyModal
          handleClose={() => {
            onHeaderModalClose(false)
          }}
          open={searchHeaderExpanded}
          position={{ top: 36, left: '50%' }}
          opacity={0.9}
          backgroundColor="#fede11"
          fullWidth
        >
          <div className={classes.headerModalContainer}>
            <div className="left">
              <img
                onClick={() => onHeaderModalClose(false)}
                alt="close"
                src="./images/close.png"
              />
            </div>
            <div className="right">
              <div className="searchInputContainer">
                <img
                  alt="search"
                  onClick={() => onHeaderModalClose(false)}
                  src="./images/search.png"
                />
                <input
                  onChange={e => setSearchedName(e.target.value)}
                  value={searchedName}
                  placeholder="Nome del locale"
                />
              </div>
              {/* <div className="locationInputContainer">
                <img alt="address" src="./images/pin.png" />
                <input
                  onChange={e => setSearchedAddress(e.target.value)}
                  value={searchedAddress}
                />
              </div>
              <div className="searchInputContainer local">
                <img alt="search" src="./images/search.png" />
                <input
                  onChange={e => setSearchedEventType(e.target.value)}
                  value={searchedEventType}
                />
              </div> */}
            </div>
          </div>
        </MyModal>
      )}
      <div className="header">
        <div onClick={() => navigate('/')} className="left">
          <img src={LogoSVG} alt="logo" />
        </div>
        {!desktopMode && (
          <div className="right">
            <span onClick={() => setSearchHeaderExpanded(true)}>
              Serata di ballo - TO
            </span>
            <img
              onClick={onProfileClick}
              alt="profile"
              src="./images/user.png"
            />
          </div>
        )}

        {desktopMode && (
          <div className="desktopRight">
            <div className="inputs">
              <input
                onChange={e => setSearchedName(e.target.value)}
                value={searchedName}
                placeholder="Nome del locale"
              />
              <span>{selectedCity.key}</span>
              <div className="searchButtonContainer">
                <img
                  alt="search"
                  onClick={() => onHeaderModalClose(false)}
                  src="./images/search.png"
                />
              </div>
            </div>
            <img
              onClick={onProfileClick}
              alt="profile"
              src="./images/user.png"
            />
          </div>
        )}
      </div>
      <div className="body">
        <div className="filterBar">
          <div className="innerContainer">
            <div onClick={() => setCalendarModalOpen(true)} className="date">
              <img
                className="iconImage"
                alt="date"
                src="./images/calendar.png"
              />
              <span>
                {selectedDate ? formatDate(selectedDate['$d'], true) : 'Data'}
              </span>
              <img
                className="downArrowImage"
                alt="date"
                src="./images/black-down-arrow.png"
              />
            </div>
            <div onClick={() => setTimeModalOpen(true)} className="time">
              <img className="iconImage" alt="date" src="./images/clock.png" />
              <span>
                {selectedTimeSlots.length ? selectedTimeSlots[0].time : 'Ora'}
              </span>
              <img
                className="downArrowImage"
                alt="date"
                src="./images/black-down-arrow.png"
              />
            </div>
            <div onClick={() => setPeopleModalOpen(true)} className="people">
              <img className="iconImage" alt="date" src="./images/people.png" />
              <span>{selectedPeople || 'Persone'}</span>
              <img
                className="downArrowImage"
                alt="date"
                src="./images/black-down-arrow.png"
              />
            </div>
            <MyModal
              open={calendarModalOpen}
              handleClose={() => setCalendarModalOpen(prevValue => !prevValue)}
            >
              <CalendarModal
                onConfirm={onDateConfirm}
                selectedDate={selectedDate}
              />
            </MyModal>
            <MyModal
              open={timeModalOpen}
              handleClose={() => setTimeModalOpen(prevValue => !prevValue)}
            >
              <TimeModal
                onTimeSlotClick={handleTimeSlot}
                onConfirm={onTimeConfirm}
                selectedTimeSlots={selectedTimeSlots}
              />
            </MyModal>
            <MyModal
              open={peopleModalOpen}
              handleClose={() => setPeopleModalOpen(prevValue => !prevValue)}
            >
              <PeopleModal
                onConfirm={onPeopleConfirm}
                selectedPeople={selectedPeople}
              />
            </MyModal>
          </div>
        </div>
        {!desktopMode && (
          <div className="eventTypesContainer">
            <div
              onClick={() => navigate('/filter')}
              className="filterIconContainer"
            >
              <img alt="filter" src="./images/filter.png" />
              <span>{selectedTypes.length}</span>
            </div>
            <div className="itemsContainer">
              {restaurantsCategories.length
                ? restaurantsCategories.map((item, index) => (
                    <div
                      className={`${index === 0 ? 'firstItem' : 'singleItem'} ${
                        item.id === selectedCategories?.id ? 'selected' : ''
                      } `}
                      onClick={() => onCategoriesChange(item)}
                    >
                      <img alt="dance-night" src={item.image} />
                      <span>{item.value}</span>
                    </div>
                  ))
                : null}
            </div>
          </div>
        )}
        {!desktopMode && <hr className="line" />}
        {!desktopMode && (
          <div className="filterTextContainer">
            <span>{restaurantsData.length} locali filtrati per te</span>
          </div>
        )}
        <div className="mainContainer">
          <div className="foundItemsContainer">
            {desktopMode && (
              <div className="descContainer">
                <span>I LOCALI A {selectedCity.key.toUpperCase()} PER TE</span>
              </div>
            )}
            {restaurantsData.length
              ? restaurantsData.map(item => (
                  <FoundItem
                    data={item}
                    onClick={id => {
                      navigate(`/single-event/${id}`)
                    }}
                    selectedNightTypes={selectedNightTypes}
                  />
                ))
              : null}
          </div>
          {desktopMode && (
            <div className="desktopFiltersContainer">
              <DesktopFilters
                restaurantsCategories={restaurantsCategories}
                selectedCategories={selectedCategories}
                onCategoriesChange={onCategoriesChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EventSelection
