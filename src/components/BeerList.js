import React from 'react'
import BeerThumb from './BeerThumb'

export default class BeerList extends React.Component{
    constructor(){
        super()
        this.state = {
            beers: [],
            selectedBeer: null,
            page: 1,
            perPage: 10
        }
        this.incrementBeersPerPage = this.incrementBeersPerPage.bind(this)
        this.fetchBeers = this.fetchBeers.bind(this)
    }

    componentDidMount(){
        this.fetchBeers(this.state.page, this.state.perPage)
    }

    async incrementBeersPerPage(){
        if (this.state.perPage <= 40){
            this.setState({perPage: this.state.perPage + 10})
            this.fetchBeers(this.state.page, this.state.perPage + 10)
        }
    }


    async fetchBeers(page, perPage){
        const data = await fetch(`https://api.openbrewerydb.org/breweries?page=${page}&per_page=${perPage}`)
        const beers = await data.json()
        this.setState({beers})
    }

    render(){
        console.log(this.state.beers.length, "<--- length of data", this.state.beers, this.state.perPage, "<------ beers per page")
        const loading = <div>FETCHING BEERS...</div>
        const beers = 
        <div>
            {this.state.beers.map(beer => {
                return (
                    <BeerThumb beer={beer} />
                )
                })}

            {this.state.page > 1 && <button onClick={() => {
                this.setState({page: this.state.page - 1})
                this.fetchBeers(this.state.page - 1, this.state.perPage)
            }}>Previous Page</button>}

            {this.state.perPage < 50 && 
            <button 
            onClick={this.incrementBeersPerPage}
            >See 10 more breweries on the page!
            </button>}

            {this.state.perPage > 10 && 
            <button onClick={() => {
                this.setState({perPage: 10})
                this.fetchBeers(this.state.page, 10)
            }}>
            See fewer brewers!
            </button>}

            <button onClick={() => {
                this.setState({page: this.state.page + 1})
                this.fetchBeers(this.state.page + 1, this.state.perPage)
                }}>Next page!</button>
        </div>

        return (
            this.state.beers.length ? beers : loading
        )
    }
}