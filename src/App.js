
import './scss/app.scss'
import { Header } from './comp/head';
import React from 'react'
import Home from './pages/home';
import Not from './comp/NoteFound';
import {  Routes, Route } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './redux/slice/filterslice'
import Cart from './pages/cart';
export  const MyContext = React.createContext('');
function App() {
  const [searchvalue ,setsearchvalue]=React.useState('')
  return (
    <div className="wrapper">
      <MyContext.Provider value={{searchvalue ,setsearchvalue}}>
      <Header/>
      <div className="content">
         <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='*' element={<Not />} />
            <Route path='/cart' element={<Cart />} />
         </Routes>
        </div>
        </MyContext.Provider>
      </div>

  );
}

export default App;
