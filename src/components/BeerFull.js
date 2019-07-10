import React from 'react'

export default class BeerFull extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            beer: null
        }
        this.fetchBeer = this.fetchBeer.bind(this)
    }

    componentDidMount(){
        this.fetchBeer()
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
        return(
            beer ? <div>This is the full {beer.name} page!</div> : <div></div>
        )
    }
}