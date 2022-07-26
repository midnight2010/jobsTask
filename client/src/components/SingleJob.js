import React,{useContext} from 'react'
import { MdFavoriteBorder,MdThumbDownOffAlt} from 'react-icons/md'
import { AppContext } from '../AppContext'

const SingleJob = ({job}) => {
  const {favoriteJob} = useContext(AppContext)
  return (
    <section className='jobs__section'>
          <div className="top">
                <div className="top__left">
                  <img src="/heart.jpg" alt="null" />
              
                  <div className="description">
                    <h4>{job.specialization} job</h4>
                    <p>Clinic Name</p>
                  </div>
              </div>
              <div className="top__buttons">
                <button><MdThumbDownOffAlt size={22} onClick={() => favoriteJob(false,job._id,job.isFavorite)}/></button> 
                <button><MdFavoriteBorder size={22} onClick={() => favoriteJob(true,job._id,job.isFavorite)} className={job.isFavorite ? 'red' : ''}/></button>
              </div>
          </div>
          <div className="middle">
            {job.tags.map((tag,index) => {
              return <p key={index}>
              {tag}
              </p>
            })}
          </div>
          <div className="bottom">
             <button>Quick Apply</button>
          </div>
        </section>
  )
}

export default SingleJob