import React from 'react'
import {MdOutlineSpaceDashboard,MdWorkOutline,MdMessage,MdCalendarToday,MdAccountCircle,MdOutlineSettings,MdOutlineHome,MdOutlineLocalHospital} from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links-desktop">
        <div className="links">
              <NavLink to='/' className={({isActive})=> isActive ? 'selected' : ''}> <span><MdOutlineSpaceDashboard/></span> Dashboard</NavLink>
              <NavLink to='/jobs' className={({isActive})=> isActive ? 'selected' : ''}><span><MdWorkOutline/></span>Jobs</NavLink>
              <NavLink to='/messages' className={({isActive})=> isActive ? 'selected' : ''}><span><MdMessage/></span>Messages</NavLink>
              <NavLink to='/calendar' className={({isActive})=> isActive ? 'selected' : ''}><span><MdCalendarToday/></span>Calendar</NavLink>
              <NavLink to='/account' className={({isActive})=> isActive ? 'selected' : ''}><span><MdAccountCircle/></span>My Account</NavLink>   
          </div>
            <NavLink to='/settings' className={(isActive) => isActive ? 'active' : ''}><span><MdOutlineSettings/></span>Settings</NavLink>   
      </div>
      <div className="links-mobile">
              <NavLink to='/' className={({isActive})=> isActive ? 'selected' : ''}> <span><MdOutlineHome/></span> Home</NavLink>
              <NavLink to='/jobs' className={({isActive})=> isActive ? 'selected' : ''}><span><MdWorkOutline/></span>Jobs</NavLink>
              <NavLink to='/'><MdOutlineLocalHospital size={35}/></NavLink>
              <NavLink to='/messages' className={({isActive})=> isActive ? 'selected' : ''}><span><MdMessage/></span>Messages</NavLink>
              <NavLink to='/account' className={({isActive})=> isActive ? 'selected' : ''}><span><MdAccountCircle/></span>Account</NavLink>   
      </div>
        
    </div>
  )
}

export default Navbar