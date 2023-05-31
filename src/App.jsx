import { Route, Router, Routes } from 'react-router-dom'
import './App.css';
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import AddProduct from './Components/Main/Product/AddProduct'

function App() {

  return (
    <div className='mainDiv'>
      <Navbar />
      <Main />
    </div>
  )
}

export default App
