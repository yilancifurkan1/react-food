import React, {useEffect, useState} from 'react'
import FoodCard from '../komponentler/FoodCard'



export default function AnaSayfa() {
    //states
    const [yemekler, setYemekler] = useState([])


    useEffect(() =>{
        const make_api_request = async () => {
            const request = await fetch("data.json")
            const response = await request.json()
        
            console.log("Gelen Apiden Veriler:", response)
        
            setYemekler(response)
        }

        make_api_request()

    }, [])

    const generate_html = () => {
         return yemekler.map((yemek => {
            return <FoodCard yemek = {yemek}></FoodCard>
        }))
    }

    return (
        <>
            <h1>Yöresel Yemekler</h1>
            <hr />
            {generate_html()} 
        </>
    )
}