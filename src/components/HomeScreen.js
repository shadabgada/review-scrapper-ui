import React from 'react'
import Header from './Header'
import ReviewPage from './ReviewPage'
import "./HomeScreen.css"
import Footer from './Footer'

function HomeScreen({data}) {
    return (
        <div className="home-screen">
            <Header/>

            <ReviewPage data={data}/>

            <Footer/>
            
        </div>
    )
}

export default HomeScreen
