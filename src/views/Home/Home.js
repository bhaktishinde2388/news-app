import React from 'react'
import {useState,useEffect } from "react"
import axios from "axios"
import "./Home.css"

function Home() {
    const [news , setNews] =useState([])

    const [search , setSearch] = useState("")

    const localNews = async() => {
       try{
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${search}&from=2024-06-24&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`);
        setNews(response.data.articles)
     }
      catch(e)
       {
        console.log(e)
       }
    }
    useEffect(()=>{
          localNews()
    },[])

    useEffect(()=>{
        localNews()
  },[search])


  return (
    <div>
       <h1>NEWS📌</h1>

        <input  className='input-box'
        type='text' value={search} 
           onChange={(e) =>{
            setSearch(e.target.value)
           }}
        />

    

        <div className='news-cards-container'>
        {
            news.map((article,index)=>{

            const {author,title,description,url,urlToImage,publishedAt,content} = article

                return(
                    
                    <div className="news-card" key={index}>
                     <img src={urlToImage} className='news-article-img'/>
                     <h2 className="news-title">{title}</h2>

                     <div className="article-body">
                     <span className="news-article-author">{author}</span>
                     <span className='published'>{publishedAt}</span>
                    </div>

                    <p className="news-description">{description}</p>

                    <a href={url} target='_blank' className="readmore-btn">Read More</a>

                    </div>
                    
                )
            })
        }
        </div>
    </div>
  )
}

export default Home