import React from 'react'
import { Link } from 'react-router-dom'
import brewImageArray from '../images/brewImageArray'


export default class BeerFull extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            beer: []
        }
        this.fetchBeer = this.fetchBeer.bind(this)
    }

    componentDidMount(){
        const beer = this.props.beer
        if (beer){
            this.setState({beer: beer[0]})
        } 
        else {
            this.fetchBeer()
        }
    }

    async fetchBeer(){
        try{
            const data = await fetch(`https://api.openbrewerydb.org/breweries/${this.props.match.params.id}`)
            const beer = await data.json()
            this.setState({beer})
        } catch(error){
            console.log(error)
        }
    }



    render(){
        const { beer } = this.state
        const {brewery_type, name, city, state, street, phone, website_url } = beer

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

        const location = city && state && `${city}, ${state}`
        
        return(
            <div className="full-back">
                <div className="beer-full">
                    {name ? 
                    <div 
                        className="title" 
                        style={{textAlign: 'center'}}>
                        {beer.name.toUpperCase()}
                    </div> : <div></div>}
                    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                        <img 
                        src={brewImageArray[beer.id % 7]} 
                        alt="a randomly generated brewery interior">
                        </img>
                    </div>
                    
                    <div 
                    style={{
                        paddingLeft: '150px', 
                        paddingRight: '150px'
                        }}>
                    {`A ${location} based ${type} located at ${street}, ${name} can be reached by phone at ${phone} or online.`}
                    </div>
                    <div 
                    style={{paddingLeft: '150px', 
                    paddingRight: '150px',
                    display: 'flex',
                    justifyContent: 'space-between'
                    }}>
                        <a 
                        className="button" 
                        rel="noopener noreferrer"
                        target="_black" 
                        href={website_url}>
                        {`Visit ${name} online`}
                        </a>
                        <Link to={'/beers'} className="button">Find more breweries</Link>
                    </div>
                    
                </div>
            </div>
        )
    }
}