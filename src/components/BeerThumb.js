import React from 'react'
import { Link } from 'react-router-dom'


export default (props) => {
    const { id, name, brewery_type, city, state } = props.beer
    let type
    if (brewery_type !== undefined){
        if (brewery_type === 'brewpub'){
            type = `${brewery_type[0].toUpperCase()}${brewery_type.slice(1)}`
        }
        else {
            type =`${brewery_type[0].toUpperCase()}${brewery_type.slice(1)} Brewery`
        }
    }
    else {
        type = ''
    }

    return (
        <div className="thumb">
            <Link to={`beers/${id}`} className="title-button">
            <h1 className="thumb-title">
                {name}
            </h1>
            </Link> 
            
            <div className="thumb-sub">{type}</div>
            {city && state && <div className="thumb-sub">{`${city}, ${state}.`}</div>}
        </div>
    )   
}