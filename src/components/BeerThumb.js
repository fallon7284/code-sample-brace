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
            <h1>
                {name}
            </h1>

            <div>{`${type} \n ${city}, ${state}.`}</div>
            <Link to={`beers/${id}`}>
            <button className="button" onClick={() => {
                props.selectBeer(id)
                }}>More info</button>
            </Link>   
        </div>
    )   
}