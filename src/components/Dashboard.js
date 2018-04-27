import React, { Component } from 'react';
import CurrentDetails from './CurrentDetails.js';
import DayBar from './DayBar.js';
import cities from '../cities.json';
import sampleData from '../sampleData.json';
import sampleForecast from '../sampleForecast.json';

import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {city: "MKE", data: sampleData, icon: 'wi-owm-800', forecast: sampleForecast};
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount() {
        this.changeCity("MKE");
    }

    handleClick(e) {
        this.changeCity(e.target.value);
    }

    changeCity(selectedCity) {
        this.setState({
            city: selectedCity
        });
        var cityID = cities[selectedCity].id;
        var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&units=imperial&appid=928dcfe948d6f29e01cd683d7b8cc3f0'
        var forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?id='+ cityID +'&units=imperial&appid=928dcfe948d6f29e01cd683d7b8cc3f0';
        axios({
            method:'get',
            url: requestUrl,
          })
        .then((response) => {
            this.setState({
                data: response.data,
                icon: 'wi-owm-' + response.data.weather[0].id
            });
        }); 
        axios({
            method:'get',
            url: forecastUrl,
          })
        .then((response) => {
            this.setState({
                forecast: response.data,
            });
        });
    }

    render() {
        return (
            <div className="slds-grid slds-p-horizontal_medium slds-grid_vertical slds-grid_align-center">
                <div className="slds-col section slds-order_2 slds-medium-order_1 slds-large-order_1">
                    <div className="slds-grid slds-grid_align-center slds-wrap">  
                        <div className="slds-col slds-size_1-of-1 slds-medium-size_10-of-12 slds-large-size_10-of-12">
                            <h2 className="slds-text-title_caps section-header">Location</h2>
                        </div>
                        <div className="slds-col slds-size_10-of-12">
                            <div className="slds-grid slds-wrap">
                                <div className="slds-col slds-size_1-of-2 slds-medium-size_6-of-12 slds-large-size_3-of-12">
                                    <button className="slds-button slds-button_neutral city-button" value="MKE" onClick={this.handleClick}>Milwaukee</button>   
                                </div>
                                <div className="slds-col slds-size_1-of-2 slds-medium-size_6-of-12 slds-large-size_3-of-12">
                                    <button className="slds-button slds-button_neutral city-button" value="CHI" onClick={this.handleClick}>Chicago</button>
                                </div>
                                <div className="slds-col slds-size_1-of-2 slds-medium-size_6-of-12 slds-large-size_3-of-12">
                                    <button className="slds-button slds-button_neutral city-button" value="MIN" onClick={this.handleClick}>Minneapolis</button>
                                </div>
                                <div className="slds-col slds-size_1-of-2 slds-medium-size_6-of-12 slds-large-size_3-of-12">
                                    <button className="slds-button slds-button_neutral city-button" value="DAL" onClick={this.handleClick}>Dallas</button>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="slds-col section slds-order_1 slds-medium-order_2 slds-large-order_2">
                    <CurrentDetails data={this.state.data} icon={this.state.icon}/>
                </div>
                <div className="slds-col section slds-order_3 slds-medium-order_3 slds-large-order_3">
                    <DayBar data={this.state.data} forecast={this.state.forecast}/>
                </div>
            </div>          
        );
    }

    
}

export default Dashboard;