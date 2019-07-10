import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    return (
        <div className="home">
        <h1>Click on the button below to see some of the finest breweries in the United States</h1>
            <Link to='/beers'>
            <button><h1 className="header">Click Here To Find Beers</h1></button>
            </Link> 
        </div>
    )
}