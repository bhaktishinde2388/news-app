import React from 'react'
import {useState,useEffect } from "react"
import axios from "axios"
import "./Home.css"

function Home() {
    const [news , setNews] =useState([])

    const localNews = async() => {
        const response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-06-24&sortBy=publishedAt&apiKey=8063435e33c3466c9ecbe13a5737392e");
       setNews(response.data.articles)
    }
    useEffect(()=>{
          localNews()
    },[])


  return (
    <div>
       
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