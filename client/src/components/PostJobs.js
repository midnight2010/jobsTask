import React, { useContext } from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { AppContext } from '../AppContext'
const PostJobs = () => {
  const {specializations,postJob} = useContext(AppContext)
  return (
    <div className='basic_posts'>
       <h1>Post a job</h1>
       <section className="posts">
          {specializations.map((specialization,index) => {
            return (<div className="posts__job" key={index}>
                <div className="top">
                  <h1>Post a {specialization} job</h1>
                  <MdKeyboardArrowRight size={20} onClick={() => postJob(specialization)}/>
                </div>
                <p>Clicking this button will create a job for {specialization + 's'}</p>
            </div>
            )
          })}
       </section>  
    </div>
   
  )
}

export default PostJobs