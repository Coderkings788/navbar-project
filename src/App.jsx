
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Pages } from './Components/Pages'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import { Jobs } from './Components/jobs'
import { Error } from './Components/Error'
import { Galary } from './Components/Galary'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='*' element={<Error/>}  />
          <Route path='/' element={<Pages/>}  />
          <Route path='/home' element={<Pages/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/jobs' element={<Jobs/>} />
          <Route path='/galary' element={<Galary/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
