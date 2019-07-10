
Clone the repo and run

### `npm start`

You should see the home view, where a button will allow you to check out a selection of breweries.

## Functionality

You will initially fetch 10 breweries.  If you click more brewers, you will add another 10.  You can continue to add breweries until you have 50 on the screen.  If you have 50 and you click next page, you'll fetch the next 50.  if you have 10 and click next page, you'll fetch the next 10.  Et cetera.

Enter text in the filter input to dynamically "filter your beer" by state, city, brewery type or name.

Click on the name of a brewery and you will be taken to a detailed view.

Brewery detail views can also be reached at /beers/id

There are over 8000 breweries in the database, so accessible ids run a bit beyond 8000.


