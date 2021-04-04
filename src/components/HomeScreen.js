import React from 'react'
import Header from './Header'
import ReviewPage from './ReviewPage'
import "./HomeScreen.css"
import Footer from './Footer'

function HomeScreen() {
    return (
        <div className="home-screen">
            <Header/>

            <ReviewPage/>

            <Footer/>
            
        </div>
    )
}

export default HomeScreen
