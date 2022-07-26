import {Outlet} from 'react-router-dom'

import Header from './Header'
import Navbar from './Navbar'

const SharedLayout = () => {
  return (
    <div className='main'>
        <Navbar/>
        <div className="container">
          <Header/>
          <Outlet/> 
        </div>
    </div>
    
  )
}

export default SharedLayout