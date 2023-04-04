import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import SplitScreen from './AuthPages/Login'
import './App.css'


function App() {
  return (
    <ChakraProvider>
    <Router>
      
      <Routes>
        <Route path='/' element={<p>Welcome</p>}/>
      </Routes>
      <Routes>
        <Route path='/login' element={<SplitScreen/>}/>
      </Routes>

    </Router>
    </ChakraProvider>
  )
}

export default App
