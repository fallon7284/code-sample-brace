import React from 'react'
import BeerThumb from './BeerThumb'
import BeerFull from './BeerFull'
import Header from './Header'
import '../App.css'

export default class BeerPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            beers: [],
            viewingSingleBeer: false,
            selectedBeer: null,
            page: 1,
            perPage: 10,
            currentFilter: ''
        }
        this.fetchBeers = this.fetchBeers.bind(this)
        this.selectBeer = this.selectBeer.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.filterBeers = this.filterBeers.bind(this)
    }

    componentDidMount(){
        this.fetchBeers(this.state.page, this.state.perPage)
    }


    toggleViewingSingle(){
        this.setState({viewingSingleBeer: !this.state.viewingSingleBeer})
    }

    selectBeer(id){
        const selectedBeer = this.state.beers.filter(beer => {
            return beer.id === id
        })
        this.setState({selectedBeer})
    }

    async fetchBeers(page, perPage){
        try{
            const data = await fetch(`https://api.openbrewerydb.org/breweries?page=${page}&per_page=${perPage}`)
            const beers = await data.json()
            this.setState({beers})
        } catch(error){
            console.log(error)
        }  
    }

    handleChange = (evt) => {
        this.setState({currentFilter: evt.target.value})
        // this.filterBeers(this.state.currentFilter)
    }

    filterBeers(beers){
        if (this.state.currentFilter === ''){
            return beers
        }
        return this.state.beers.filter(beer => {
            return (beer.name.includes(this.state.currentFilter))
        })
    }

    render(){
        const beers = 
        <div className="beer-content">
        <div>{this.state.currentFilter}</div>
        <input name="beer" onChange={this.handleChange} placeholder="Filter by state"></input>
            {this.state.beers.map(beer => {
                return (
                    <BeerThumb beer={beer} key={beer.id} selectBeer={this.selectBeer}/>
                )
                })}

            {this.state.page > 1 && 
            <button className="button" onClick={() => {
                this.setState({page: this.state.page - 1})
                this.fetchBeers(this.state.page - 1, this.state.perPage)
            }}>
            Previous Page</button>}

            {this.state.perPage < 50 && 
            <button className="button" onClick={() => {
                this.setState({perPage: this.state.perPage + 10})
                this.fetchBeers(this.state.page, this.state.perPage + 10)
            }}>
            See 10 more breweries on the page!
            </button>}

            {this.state.perPage > 10 && 
            <button className="button" onClick={() => {
                this.setState({perPage: 10})
                this.fetchBeers(this.state.page, 10)
            }}>
            See fewer brewers!
            </button>}

            <button className="button" onClick={() => {
                this.setState({page: this.state.page + 1})
                this.fetchBeers(this.state.page + 1, this.state.perPage)
                }}>Next page!</button>
        </div>


        return (
            <div>
                <Header/>
                {this.state.selectedBeer === null ? beers : <BeerFull beer={this.state.selectedBeer}/>}
            </div>
            
        )
    }
}