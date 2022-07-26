import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Jobs from './components/Jobs';
import SharedLayout from './components/SharedLayout';
import './scss/index.scss'

function App() { 
  return ( <BrowserRouter>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
         <Route index element={<Dashboard/>}/>
         <Route path=':view' element={<Jobs/>}/>
         {/* <Route path='jobs' element={<Jobs/>}/>
         <Route path='messages' element={<Jobs/>}/>
         <Route path='calendar' element={<Jobs/>}/> */}
      </Route>


    </Routes>
  </BrowserRouter>
  );
}

export default App;
