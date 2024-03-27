import {Route, Routes} from 'react-router-dom'
import './App.css'


import AnaSayfa from './sayfalarım/AnaSayfa'
import YemekDetay from './sayfalarım/YemekDetay'


export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AnaSayfa></AnaSayfa>}></Route>
        <Route path='/yemekler/:yemekId' element={<YemekDetay></YemekDetay>}></Route>
      </Routes>
    </>
  )
}
