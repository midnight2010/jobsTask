import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import SingleJob from './SingleJob'
import { AppContext } from '../AppContext'

const DashboardJobs = () => {
  const {jobs} = useContext(AppContext)
  const favJobs = jobs.filter(job => job.isFavorite)
  return (
    <div className="jobsViews">
        <div className="jobsViews__info">
          <h1>Favorites </h1>
          <NavLink to ='/fav' className={({isActive}) => isActive ? 'selected' : ''}>View All</NavLink> 
        </div>
      <div className="jobs">
        {favJobs.slice(-3).map((job,index) => (
          <SingleJob key={index} job={job}/>
        ))}
      </div>
        
    </div>
  )
}

export default DashboardJobs