import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import LogoSVG from 'src/assets/icons/logo.svg'
import SearchSVG from 'src/assets/icons/search.svg'
import { AutoComplete, Button, TextField } from 'src/components'
import { errorAlert } from 'src/helpers/alerts'

import { useStyle } from './style'
import { keys } from '@material-ui/core/styles/createBreakpoints'

const getFinalCats = (originalCats, filteredItems) => {
  const filtered = originalCats?.filter(cat => {
    console.log({ cat, keys: Object.keys(filteredItems) })
    return (
      Object.keys(filteredItems)
        .map(key => Number(key))
        .indexOf(cat.id) !== -1
    )
  })
  return filtered
}

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

const Menu = ({
  data,
  resId,
  resName,
  resCategory,
  searchText,
  setSearchText,
}) => {
  const classes = useStyle()
  const navigate = useNavigate()
  const [filteredMenu, setFilteredMenu] = useState(null)

  const categories = data?.categories

  const groupedItems = groupMenuItems(data)

  const onSearchClick = () => {
    if (searchText === '') {
      setFilteredMenu(null)
      return
    }
    const keys = Object.keys(groupedItems)

    let result = {}
    keys.forEach(k => {
      const foundCat = data?.categories.find(item => item.id === Number(k))
      if (foundCat.name.toLowerCase().includes(searchText.toLowerCase())) {
        result[k] = groupedItems[k]
      } else {
        const filteredProducts = groupedItems[k].filter(({ name }) =>
          name.toLowerCase().includes(searchText.toLowerCase()),
        )
        if (filteredProducts.length) result[k] = filteredProducts
      }
    })
    setFilteredMenu(result)
  }

  const finalGroupedItems = filteredMenu || groupedItems
  const finalCats = filteredMenu
    ? getFinalCats(categories, finalGroupedItems)
    : categories

  return !data ? null : (
    <div className={classes.container}>
      <div className="header">
        <div className="searchInputContainer">
          <img onClick={onSearchClick} alt="search" src="./images/search.png" />
          <input
            onChange={e => setSearchText(e.target.value)}
            value={searchText}
            placeholder="cerca"
          />
        </div>
      </div>
      <div className="body">
        <div className="nameContainer">
          <span className="name">{resName}</span>
          <span className="type">{resCategory}</span>
        </div>
        <span className="menuText">Menu</span>
        <div className="menuContainer">
          {finalCats.map(cat => {
            return (
              <div>
                <span className="category">{cat.name}</span>
                <div className="itemsContainer">
                  {finalGroupedItems[cat.id].map(({ name, price }) => (
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
