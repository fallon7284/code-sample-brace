import React from 'react'


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
        <div key={id}>
            <h1>
                {name}
            </h1>
            <p>{`${name} is ${type} located in ${city}, ${state}.${phoneNumber}`}</p>
            <button >See more!</button>
        </div>
    )   
}