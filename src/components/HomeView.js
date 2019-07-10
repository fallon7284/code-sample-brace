import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    return (
        <div className="home">
        <h1 style={{width: '50%'}}>Welcome to Brewery Finder</h1>
            <Link to='/beers'>
            <button className="home-button"><h1>Click Here To Find The Best Brewers</h1></button>
            </Link>
        </div>
    )
}