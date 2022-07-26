import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import SingleJob from './SingleJob'
import { AppContext } from '../AppContext'

const DashboardJobs = ({favJobs}) => {
  const {jobs} = useContext(AppContext)
  const newJobs = jobs.filter(job => !job.isFavorite)
  return (
    <div className="jobsViews">
        <div className="jobsViews__info">
          <h1>Jobs </h1>
          <NavLink to ='/jobs' className={({isActive}) => isActive ? 'selected' : ''}>View All</NavLink> 
        </div>
      <div className="jobs">
        {newJobs.slice(-3).map((job,index) => (
          <SingleJob key={index} job={job}/>
        ))}
      </div>
        
    </div>
  )
}

export default DashboardJobs