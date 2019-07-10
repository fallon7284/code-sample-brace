import React from 'react'
import { Link } from 'react-router-dom'


export default (props) => {
    const { id, name, brewery_type, city, state, phone } = props.beer
    let type
    if (brewery_type !== undefined){
        if (brewery_type === 'brewpub'){
            type = `a ${brewery_type}`
        }
        else {
            type =`a ${brewery_type} brewery`
        }
    }
    else {
        type = ''
    }
    const phoneNumber = phone && ` They can be reached at ${phone}.`

    return (
        <div>
            <h1>
                {name}
            </h1>
            <p>{`${name} is ${type} located in ${city}, ${state}.${phoneNumber}`}</p>
            <Link to={`beers/${id}`}>
            <button onClick={() => {
                props.selectBeer(id)
                }}>See more!</button>
            </Link>
            
        </div>
    )   
}