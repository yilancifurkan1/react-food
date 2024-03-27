import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function YemekDetay() {

  const { yemekId } = useParams() 
  const [ yemek, setYemek ] = useState(null)
  
  useEffect(() => {
    const make_api_request = async () => {
        const request = await fetch("../data.json")
        const response = await request.json()
    
        const yemekObjesi = response.find(yemek => yemek.id === Number(yemekId))
        console.log("Bulunan Veri: ", yemekObjesi)
    
        setYemek(yemekObjesi)
    }

    make_api_request()
  }, [])

  if (yemek === null) {
    return <p>Yükleniyor Lütfen Bekleyiniz.</p>
  }
  
  
  return (
    <>
      <h1>{yemek.name} Yemek İçin Bilgiler</h1>
      
      <hr />

      <p>{yemek.detay}</p>
      
    </>
  )
}
