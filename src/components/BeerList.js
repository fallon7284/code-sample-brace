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

    async incrementBeersPerPage(){
        if (this.state.perPage <= 40){
            this.setState({perPage: this.state.perPage + 10})
        }
        this.setBeers()
    }

    async nextPage(){
        this.setState({page: this.state.page + 1})
        this.setBeers()
        //this may cause a problem if I am on the last page and try to increment.  
        //I won't rerender the page but I will increment the page value on state. 
        //In this case a previous page button will no longer work correctly.
    }

    async setBeers(){
        const data = await fetch(`https://api.openbrewerydb.org/breweries?page=${this.state.page}&per_page=${this.state.perPage}`)
        const beers = await data.json()
        if (beers.length){
            this.setState({beers})
        }
    }

    render(){
        console.log(this.state.beers)
        const loading = <div>FETCHING BEERS...</div>
        const beers = 
        <div>
            {this.state.beers.map(beer => {
                const { id, name, brewery_type, city, state, phone, website_url } = beer
                // const link = <a href={website_url}>{website_url}</a>
                return (
                    <div key={id}>
                        <a href={website_url}>
                            <h1>
                                {name}
                            </h1>
                        </a>
                        <p>{`${name} is a ${brewery_type} brewery located in ${city}, ${state}. \n They can be reached at ${phone}.`}</p>
                    </div>
                )
            })}
        </div>

        return (
            this.state.beers.length ? beers : loading
        )
    }
}