import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import LogoSVG from 'src/assets/icons/logo.svg'
import SearchSVG from 'src/assets/icons/search.svg'
import { AutoComplete, Button, TextField } from 'src/components'
import { errorAlert } from 'src/helpers/alerts'

import { useStyle } from './style'

const Menu = () => {
  const classes = useStyle()
  const navigate = useNavigate()

  return (
    <div className={classes.container}>
      <div className="header">
        <input placeholder="cerca" />
      </div>
      <div className="body">
        <div className="nameContainer">
          <span className="name">Opposto</span>
          <span className="type">Discoteca</span>
        </div>
        <span className="menuText">Menu</span>
        <div className="menuContainer">
          <div>
            <span className="category">Analcolici</span>
            <div className="itemsContainer">
              <div className="item">
                <span>Succo alla pera in bottiglia</span>
                <div className="lineContainer">
                  <hr />
                </div>
                <span>€3.00</span>
              </div>
              <div className="item">
                <span>Succo alla pera in bottiglia</span>
                <div className="lineContainer">
                  <hr />
                </div>
                <span>€3.00</span>
              </div>
              <div className="item">
                <span>Succo alla pera in bottiglia</span>
                <div className="lineContainer">
                  <hr />
                </div>
                <span>€3.00</span>
              </div>
            </div>
          </div>
          <div>
            <span className="category">Alcolici amari</span>
            <div className="itemsContainer">
              <div className="item">
                <span>Amaro del capo</span>
                <div className="lineContainer">
                  <hr />
                </div>
                <span>€7.00</span>
              </div>
              <div className="item">
                <span>Amaro del capo</span>
                <div className="lineContainer">
                  <hr />
                </div>
                <span>€7.00</span>
              </div>
              <div className="item">
                <span>Amaro del capo</span>
                <div className="lineContainer">
                  <hr />
                </div>
                <span>€7.00</span>
              </div>
              <div className="item">
                <span>Amaro del capo</span>
                <div className="lineContainer">
                  <hr />
                </div>
                <span>€7.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="buttonContainer">
          <span onClick={() => navigate('/single-event')}>Torna al locale</span>
        </div>
      </div>
    </div>
  )
}

export default Menu
