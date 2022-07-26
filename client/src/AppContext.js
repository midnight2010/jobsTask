import React,{useState,useEffect,createContext} from 'react'
export const AppContext = createContext(null);

const tags = ['Stockholm','9 Dec - 12 Jan','Kr60.00/h','90% Match']
const specializations = ['Doctor','Nurse','Pharmacist']

const AppProvider = ({children}) => {
  const [jobs,setJobs] = useState([]);

  const fetchData = async() => {
    const response = await fetch('http://localhost:8080/');
    const data = await response.json();
    setJobs(data)
  }

  
  const favoriteJob = async(checker,id,isFavorite) => {
      if(checker && isFavorite) return;
      if(!checker && !isFavorite) return;
      const newJobs = jobs.map(job => job._id === id ? {...job,isFavorite:!job.isFavorite} : job)
      const updatedJob = newJobs.find(job => job._id === id)
      try {
        await fetch('http://localhost:8080/update',{
          method:'POST',
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(updatedJob),
        })
        setJobs([...jobs,updatedJob])
      } catch (error) {
        console.error(error)
      }
    
  }

  const postJob = async(specialization) => {
      const body = {
        specialization,
        tags,
        isFavorite:false,
        date:new Date().getTime()
      }
      try {
        await fetch('http://localhost:8080/job',{
          method:'POST',
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(body)
        })
        setJobs([...jobs,body])
      } catch (error) {
        console.error(error)
      }
  }

  useEffect(() => {
    fetchData();
  },[jobs])

  return <AppContext.Provider value = {{tags,specializations,jobs,setJobs,postJob,favoriteJob}}>
     {children}
  </AppContext.Provider>
}

export default AppProvider