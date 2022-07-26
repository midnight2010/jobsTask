import React, { useContext,createContext } from 'react'
import {MdSearch,MdNotificationsNone,MdKeyboardArrowDown} from 'react-icons/md'
import {AppContext} from '../AppContext'

export const CopyContext = createContext()

const Header = () => {
  const {setSearch} = useContext(AppContext)
  
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div className="desktop">
            <div className="search">
            <MdSearch/>
            <input type="text" placeholder='Search here' onChange={handleSearch}/>
          </div>
          <div className="profile">
            <MdNotificationsNone/>
            <img src="./47508.jpg" alt="david"/>
            <p>David</p>
            <MdKeyboardArrowDown/>
          </div>
      </div>
      
    </>
  )
}

export default Header