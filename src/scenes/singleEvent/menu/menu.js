import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import LogoSVG from 'src/assets/icons/logo.svg'
import SearchSVG from 'src/assets/icons/search.svg'
import { AutoComplete, Button, TextField } from 'src/components'
import { errorAlert } from 'src/helpers/alerts'

import { useStyle } from './style'

const groupMenuItems = resMenu => {
  const groupedProducts = {}
  resMenu?.products?.forEach(product => {
    if (!groupedProducts[product.idCategory]) {
      groupedProducts[product.idCategory] = []
    }
    groupedProducts[product.idCategory].push(product)
  })
  return groupedProducts
}

const Menu = ({ data, resId, resName, resCategory }) => {
  const classes = useStyle()
  const navigate = useNavigate()

  const categories = data?.categories

  const groupedItems = groupMenuItems(data)

  console.log({ data })

  console.log(groupedItems)
  return !data ? null : (
    <div className={classes.container}>
      <div className="header">
        <input placeholder="cerca" />
      </div>
      <div className="body">
        <div className="nameContainer">
          <span className="name">{resName}</span>
          <span className="type">{resCategory}</span>
        </div>
        <span className="menuText">Menu</span>
        <div className="menuContainer">
          {categories.map(cat => {
            return (
              <div>
                <span className="category">{cat.name}</span>
                <div className="itemsContainer">
                  {groupedItems[cat.id].map(({ name, price }) => (
                    <div className="item">
                      <span>{name}</span>
                      <div className="lineContainer">
                        <hr />
                      </div>
                      <span>€{price}.00</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <div className="buttonContainer">
          <span onClick={() => navigate(`/single-event/${resId}`)}>
            Torna al locale
          </span>
        </div>
      </div>
    </div>
  )
}

export default Menu
