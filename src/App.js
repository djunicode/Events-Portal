import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Login from './AuthPages/Login'
import Register from './AuthPages/Register'


function App() {
  return (
    <ChakraProvider>
    <Router>
      
      <Routes>
        <Route path='/' element={<p>Welcome</p>}/>
      </Routes>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Routes>
        <Route path='/register' element={<Register/>}/>
      </Routes>

    </Router>
    </ChakraProvider>
  )
}

export default App
