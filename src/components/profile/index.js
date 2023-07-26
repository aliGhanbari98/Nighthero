import { useState } from 'react'
import { setProfileIsOpen } from 'src/scenes/_slice/view.slice'
import useStyle from './style'
import { useDispatch } from 'react-redux'

const ProfileHome = ({ onChangeIndexClick }) => {
  const classes = useStyle()

  return (
    <div className={classes.profileHomeContainer}>
      <div className="header">
        <div className="left">
          <span className="title">Il mio profilo</span>
          <span className="name">Aurora Raimondo</span>
          <span className="email">Aurorariomando00@gmail.com</span>
        </div>
        <div className="right">
          <img alt="profile" src="./images/user.png" />
        </div>
      </div>
      <hr />
      <div className="body">
        <div onClick={() => onChangeIndexClick(2)}>
          <span>Le mie prenotazioni</span>
          <div className={classes.arrowContainer}>
            <img alt="backButton" src="/images/right-arrow-profile.png" />
          </div>
        </div>
        <div onClick={() => onChangeIndexClick(3)}>
          <span>I miei punti Gift</span>
          <div className={classes.arrowContainer}>
            <img alt="backButton" src="/images/right-arrow-profile.png" />
          </div>
        </div>
        <div onClick={() => onChangeIndexClick(4)}>
          <span>Impostanzioni</span>
          <div className={classes.arrowContainer}>
            <img alt="backButton" src="/images/right-arrow-profile.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

const ProfileOrders = ({}) => {
  const classes = useStyle()

  return (
    <div className={classes.profileOrdersContainer}>
      <div className="header">
        <span className="title">Le mie prenotazioni</span>
      </div>
      <hr />
      <div className="body">
        <div>
          <div className="left">
            <img alt="restaurant" src="./images/birthday.jpg" />
          </div>
          <div className="right">
            <span className="resName">Opposto</span>
            <div className="priceContainer">
              <span className="prive">Prive</span>
              <span className="price">160</span>
            </div>
            <div className="infoContainer">
              <span>
                Entrata + sala prive e tavolo + belvedere 1L x 5 persone
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProfileGifts = ({}) => {
  const classes = useStyle()

  return (
    <div className={classes.profileGiftContainer}>
      <div className="header">
        <span className="title">I miei punti Gift</span>
      </div>
      <hr />
      <div className="body">
        <div className="giftContainer">
          <span>
            I <b>gift</b> sono punti fedelta che puoi ricevere ogni volta che
            effettuni una prenotazione presso i ristoranti aderenti.
          </span>
          <div className="giftsContainer">
            <div>
              <span className="number">100</span>
              <spn className="giftText">Gift</spn>
              <div className="arrowContainer">
                <img alt="arrow" src="./images/right-arrow.png" />
              </div>
              <span className="value">20€</span>
            </div>
            <div>
              <span className="number">100</span>
              <spn className="giftText">Gift</spn>
              <div className="arrowContainer">
                <img alt="arrow" src="./images/right-arrow.png" />
              </div>
              <span className="value">20€</span>
            </div>
          </div>
        </div>
        <h3 className="totalGifts">100 Gift disponibili</h3>
        <span className="descContainer">
          Puoi convertine i tuoi punti in sconti nei locali contrassegnati da
          questo simbolo <span>Gift</span>
        </span>
      </div>
    </div>
  )
}

const Profile = ({ data }) => {
  const classes = useStyle()
  const dispatch = useDispatch()
  const [currentIndex, setCurrentIndex] = useState(1) // 1: home, 2:orders, 3: gifts, 4: settings
  const onCloseProfile = () => {
    if (currentIndex === 1) dispatch(setProfileIsOpen())
    else setCurrentIndex(1)
  }

  return (
    <div className={classes.profileContainer}>
      <div className="header">
        <span onClick={onCloseProfile}>
          <img alt="backButton" src="./images/left-arrow-white.png" />
        </span>
      </div>
      <div className="body">
        {currentIndex === 1 && (
          <ProfileHome onChangeIndexClick={setCurrentIndex} />
        )}
        {currentIndex === 2 && <ProfileOrders />}
        {currentIndex === 3 && <ProfileGifts />}
      </div>
    </div>
  )
}

export default Profile
