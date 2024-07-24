import React from 'react'
import {useState,useEffect } from "react"
import axios from "axios"
import "./Home.css"

function Home() {
    const [news , setNews] =useState([])

    const localNews = async() => {
        const response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-06-24&sortBy=publishedAt&apiKey=8063435e33c3466c9ecbe13a5737392e");
      
    }
    useEffect(()=>{
          localNews()
    },[])


  return (
    <div>
       
       <h1>news</h1>
    </div>
  )
}

export default Home