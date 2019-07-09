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
        this.incrementBeersPerPage = this.incrementBeersPerPage.bind(this)
        this.nextPage = this.nextPage.bind(this)
        this.setBeers = this.setBeers.bind(this)
    }

    componentDidMount(){
        this.setBeers(this.state.page, this.state.perPage)
    }

    async incrementBeersPerPage(){
        if (this.state.perPage <= 40){
            this.setState({perPage: this.state.perPage + 10})
            this.setBeers(this.state.page, this.state.perPage + 10)
        }

    }

    async nextPage(){
        this.setState({page: this.state.page + 1})
        this.setBeers()
        //this may cause a problem if I am on the last page and try to increment.  
        //I won't rerender the page but I will increment the page value on state. 
        //In this case a previous page button will no longer work correctly.
    }

    async setBeers(page, perPage){
        console.log(`now we should fetch ${perPage} beers`)
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
                const { id, name, brewery_type, city, state, phone, website_url } = beer

                return (
                    <div key={id}>
                        <a href={website_url}>
                            <h1>
                                {name}
                            </h1>
                        </a>
                        <p>{`${name} is a ${brewery_type} brewery located in ${city}, ${state}. They can be reached at ${phone}.`}</p>
                    </div>
                )
            })}
            {this.state.perPage < 50 && <button onClick={this.incrementBeersPerPage}
            >See 10 more breweries on the page!</button>}
        </div>

        return (
            this.state.beers.length ? beers : loading
        )
    }
}