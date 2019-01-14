import React, { Component } from 'react';
import FadeIn from 'react-fade-in';


import { BrowserRouter, Route, Link } from 'react-router-dom';
import {Doughnut} from 'react-chartjs-2';


export default class Portfolio extends Component {
  constructor(props)
  {
    super(props);
    window.scrollTo(0, 0);
    
  }
  

 
  render() {
      
    const chartData = {
    	labels: [
    		'Technology',
    		'Pharmaceuticals',
    		'Real estate',
    		'Retail',
    		'Coffee'
    	],
    	datasets: [{
    		data: [10, 1, 2, 1, 1],
    		backgroundColor: [
    		'#21ce99',
    		'#21ce99',
    		'#21ce99',
    		'#21ce99',
    		'#21ce99'
    		],
    		hoverBackgroundColor: [
    		'#21ce99',
    		'#21ce99',
    		'#21ce99',
    		'#21ce99',
    		'#21ce99'
    		]
    	}]
    };
    
    const options={
    legend: {
        display: false,
        },
    };
    
    const stocks = [
        {
            name: "Apple",
            ticker: "AAPL",
            sector: "Technology"
        },
        {
            name: "Cypress Semiconductor",
            ticker: "CY",
            sector: "Technology, Semiconductor"
        },
        {
            name: "Micron Technology",
            ticker: "MU",
            sector: "Technology, Semiconductor"
        },
        {
            name: "Tesla, Inc.",
            ticker: "TSLA",
            sector: "Technology, Automotive"
        },
        {
            name: "OPKO Health",
            ticker: "OPK",
            sector: "Pharmaceuticals"
        },
        {
            name: "Snap Inc",
            ticker: "SNAP",
            sector: "Technology"
        },
        {
            name: "GoPro",
            ticker: "GPRO",
            sector: "Technology"
        },
        {
            name: "Macy's",
            ticker: "M",
            sector: "Retail, Consumer Cyclical"
        },
        {
            name: "Realty Income Corp",
            ticker: "O",
            sector: "Real estate"
        },
        {
            name: "Simon Property Group",
            ticker: "SPG",
            sector: "Real estate"
        },
        {
            name: "VMware",
            ticker: "VMW",
            sector: "Technology"
        },
        {
            name: "Starbucks",
            ticker: "SBUX",
            sector: "Coffee"
        },
        {
            name: "Square",
            ticker: "SQ",
            sector: "Technology"
        },
        {
            name: "Amazon",
            ticker: "AMZN",
            sector: "Technology"
        },
        {
            name: "Target",
            ticker: "TGT",
            sector: "Retail"
        },
        {
            name: "Walmart",
            ticker: "WMT",
            sector: "Retail"
        },
        {
            name: "Microsoft",
            ticker: "MSFT",
            sector: "Technology"
        },        
    ];
    
  const listOfStocks = (
    <div>
      {stocks.map((stock, index) =>
        <div className="description" key={index}>
            <div className="ui card" style={{ marginBottom: "10px" }}>
              <div className="content">
                <div className="header">{stock.name}</div>
                <div className="description">
                  <p>{ stock.sector }</p>
                </div>
              </div>
              <div className="extra content">
                <span className="right floated star">
                  <i className="chart line icon" />
                  {stock.ticker}
                </span>
              </div>
            </div>

        </div>
      )}
    </div>
  );
    return (
        <div className="portfolio" style={{ background: "white", minHeight: "100vh", height: "auto" }}>
          <div style={{ width: "100%", height: "120px" }}></div>
            <FadeIn>
                <h1 style={{ textAlign: "center", fontSize: "46px" }}>Portfolio </h1>
                <br/>
            </FadeIn>
            <div style={{ width: "100%", height: "20px" }}></div>            
            <div className="ui card" style={{ margin: "0 auto" }}>
              <div className="image">
                <Doughnut data={chartData} 	width={100} height={50} options={options} />
              </div>
              <div className="content">
                <a className="header">Stocks</a>
                <div className="meta">
                  <span className="date">Sectors interested: Technology, Semiconductor, Biotech, Pharmaceuticals, & Real Estate</span>
                </div>
                { listOfStocks }
              </div>
            </div>

        </div>
    );
  }
}