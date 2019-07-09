import React from 'react'

export default class BeerList extends React.Component{
    constructor(){
        super()
        this.state = {
            beers: [],
            selectedBeer: null,
            page: 1,
            perPage: 10
        }
    }

    componentDidMount(){
        this.setBeers()
    }

    async setBeers(){
        let beers = await fetch(`https://api.openbrewerydb.org/breweries?page=${this.state.page}&per_page=${this.state.perPage}`)
        beers = await beers.json()
        this.setState({beers})
    }

    render(){
        console.log(this.state.beers)
        return (
            <div>Beers go here</div>
        )
    }
}