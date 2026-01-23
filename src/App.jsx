import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'

function App() {

  const titles = ["Kategori", "Om oss", "Produkter"]

  return (
    <main>

      {titles.map((item)=> <Title title={item}/>)}
        <Title title="Mitt første react prosjekt"/>
        <Title title="Donald"/>
       <h2>Dette er kjempegøy</h2>
   </main>
  )
}

export default App
