import React,{useContext} from 'react'
import {AppContext} from '../AppContext'
import SingleJob from './SingleJob';
import { NavLink, useParams } from 'react-router-dom'
import {BiSortAlt2} from 'react-icons/bi'

const Jobs = () => {
  const {view} = useParams();
  const {jobs} = useContext(AppContext)

  let newJobs;

    if(view === 'fav') {
       newJobs = jobs.filter(job => job.isFavorite)
    }
    else {
       newJobs = jobs.filter(job => !job.isFavorite)
    }
    

  return (
    <>
    <div className="mobile">
         <div className="mobile__links">
          <NavLink to='/jobs' className={({isActive})=> isActive ? 'selected' : ''}>For you</NavLink>
          <NavLink to='/fav' className={({isActive})=> isActive ? 'selected' : ''}>Favorites</NavLink>
         </div>
         <div className="mobile__sort">
            <p>Showing {newJobs.length} jobs</p>
            <button><BiSortAlt2 size={20}/></button>
         </div>
      </div>
    <div className="jobs">
        {newJobs.map((job,index) => (
          <SingleJob key={index} job={job}/>
        ))}
      </div>  
    </>
    
  )
}

export default Jobs