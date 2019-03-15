# Home Searcher
Full stack coding challenge for Shogun.
> We’d like you to build a simple home address search that returns matching houses from a large set of houses – think Zillow but without the map. You will build the frontend that allows for user input to search and see results from that search. You will also build the backend which contains one endpoint that filters the homes from the search query and returns matching homes.
## Criteria
- Search returns homes related to address query (123 Fake St.) 
- HTML/CSS/JS web app frontend (React or similar frontend framework, basic design) 
- Backend with single endpoint (Rails, Node, etc) and ability to parse csv of homes (see 
below for getting csv of homes) 
- Readme with instructions on how to run the app 
- Basic styling and design 
## Outcome
The app is hosted [here.](https://warm-earth-32641.herokuapp.com/)

### Usage
- You can start typing an address into the search bar and it will auto-suggest addresses for you, which you can then select. You can also just hit enter on your query and the app will return results with (exact) matches for the keywords you have entered.
- Each result shows the address along with a few interesting details about the property and a link to the property's Redfin page.
- On the left-hand side, you can filter the results being shown to you by either neighborhood, property type, or price range.

### Takeaways
I'd never actually made a full-stack web app by myself before so this was definitely a challenge! I had to do a lot of research before getting started as I'd only had limited experience with React and Node. I have experience with parsing csvs in Python, but I couldn't figure out how to incorporate that into my web app. Additionally, I looked into how to read, parse, and return search results from a csv in Node but couldn't quite figure out how to get it working. So for my back-end I primarily relied on the Elasticsearch engine, which allows you to store and search data quickly. I uploaded my data to appbase.io, made sure the key mappings for the data worked properly, and added the read token to my app. I then learned how to use the ReactiveSearch library for React in order to build the components on my page, which took more trial and error than I expected. Finally, I added some CSS to style the app. If I had more time, in the future I would try to attempt the parsing of data and returning of search results entirely on my own. I would also add more filters on the side bar, and also potentially try to scrape the Redfin webpage for each property for an image I could display in the search results.
