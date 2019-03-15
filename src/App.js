import React, { Component } from 'react';
import { ReactiveBase, DataSearch, ResultList, MultiList, MultiDropdownList, RangeInput } from '@appbaseio/reactivesearch';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="main-container">
        <ReactiveBase
          app="home-searcher"
          credentials="khQDfyk7W:063902a9-f4a3-40d9-98c7-7f167b2c0842"
         >
          <div className = "navbar">
            <div className = "logo">
              HomeSearcher
            </div>
          <DataSearch
          componentId = "mainSearch"
          dataField = {['ADDRESS', 'ADDRESS.search']}
          className = 'datasearch'
          queryFormat = "and"
          autosuggest = {true}
          placeholder = "Search for real estate"
          innerClass = {{
            "input": "searchbox",
            "list": "suggestionlist"
          }}
          />
          </div>
          <div className = "display">
          <div className = "leftSidebar">
            <h3>Filters</h3>
            <MultiDropdownList
              className = "filter"
              componentId = "locationSearch"
              dataField = "LOCATION.keyword"
              title = "Neighborhood"
              placeholder = "Select Neighborhood"
            />  
            <MultiList
              className = "property"     
              componentId = "propertySearch"
              dataField = "PROPERTY_TYPE.keyword"
              title = "Property Type"
              queryFormat = "or"
              showCheckbox = {true}
              showCount = {true}
              showSearch = {false}
              react = {{
                and: ["mainSearch", "results"]
              }}
              showFilter = {true}
              filterLabel = "Property Type"
            />      
            <RangeInput
              className = "filter"
              componentId="priceSearch"
              dataField="PRICE"
              title="Price"
              range={{
                "start": 100000,
                "end": 3000000
              }}
              rangeLabels = {{
                "start": "$100K",
                "end": "$3M"
              }}
              react = {{
                and: ["locationSearch", "propertySearch", "mainSearch", "results"]
              }}
            />                                          
          </div>
          <div className = "mainBar">
              <h3>Real Estate Listings</h3>
            <ResultList
              componentId = "results"
              dataField = "ADDRESS"
              react = {{
                and: ["mainSearch", "propertySearch", "locationSearch", "priceSearch"]
              }}
              onData = {(data) => ({
                "title": (
                  <div>
                    {data.ADDRESS}, {data.CITY}, {data.STATE_OR_PROVINCE} {data.ZIP_OR_POSTAL_CODE} 
                  </div>
                ),
                "description": (
                  <div>
                    <p>Price: ${data.PRICE}</p>
                    <p>Neighborhood: {data.LOCATION}</p>
                    <p>Property Type: {data.PROPERTY_TYPE}</p>
                    <p>Rooms: {data.BEDS} bed, {data.BATHS} bath</p>
                    <a href={data.URL__SEE_http___www["redfin"]["com_buy-a-home_comparative-market-analysis_FOR_INFO_ON_PRICING_"]}>View on Redfin</a>
                  </div>
                )
                })
              }
              pagination
              size = {10}
            />
          </div>
          </div>
        </ReactiveBase>   
      </section>
    );
  }
}

export default App;