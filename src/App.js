import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Login from './AuthPages/Login'
import Register from './AuthPages/Register'
import Footer from './Footer/Footer'
// import Home from './Pages/Home'
import CommiteeAndEvent from './CommiteeAndEvent/CommiteeAndEvents'
import CommitteeDetail from './CommiteeAndEvent/CommitteeDetail'
import Favourite from './Navbar/Favourite'
import Participant from './CommiteeAndEvent/Participants/Participant'


function App() {
  return (
    <ChakraProvider>
      <Router>

        {/* <Routes>
          <Route path='/' element={<Home />} />
        </Routes> */}
        <Routes>
          <Route path='/' element={<Participant/>} />
        </Routes>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
        <Routes>
          <Route path='/register' element={<Register />} />
        </Routes>
        <Routes>
          <Route path='/comandevent' element={<CommiteeAndEvent />} />
        </Routes>
        <Routes>
          <Route path='/fav' element={<Favourite/>} />
        </Routes>
        <Routes>
          <Route path='/CommitteeDetail' element={<CommitteeDetail />} />
        </Routes>

        <Footer />

      </Router>
    </ChakraProvider>
  )
}

export default App
