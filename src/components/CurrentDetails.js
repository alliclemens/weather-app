import React, { Component } from 'react';
import '../assets/styles/weather-icons-master/css/weather-icons.css';

class CurrentDetails extends Component {

    render() {
        var visibility = (this.props.data.visibility * 0.00062137).toFixed(1);
        var temp = Math.round(this.props.data.main.temp);
    return (
        <div className="slds-grid slds-grid_align-center slds-wrap">  
            <div className="slds-col slds-size_1-of-1 slds-medium-size_10-of-12 slds-large-size_10-of-12">
                <h2 className="slds-text-title_caps section-header">Current</h2>
            </div>
            <div className="slds-col slds-size_1-of-1 slds-medium-size_5-of-12 slds-large-size_4-of-12">              
               <div className="slds-grid slds-wrap slds-grid_vertical-align-center">  
                    <div className="slds-col slds-size_1-of-1 slds-large-size_6-of-12">
                        <div id="current-city">{this.props.data.name}</div>
                        <div><i id="current-weather-icon" className={`wi ${this.props.icon}`}></i></div>
                        <div id="current-conditions">{this.props.data.weather[0].main}</div>
                    </div>
                    <div className="slds-col slds-size_1-of-1 slds-large-size_6-of-12">
                        <p id="current-temp">{temp} &#8457;</p>
                    </div>
                </div>
            </div> 
            <div className="slds-col slds-size_1-of-1 slds-medium-size_5-of-12 slds-large-size_4-of-12">
                <div className="slds-grid slds-grid_vertical-align-center">
                    <p className="slds-col current-weather-details">
                        <span>
                            <i className="wi wi-strong-wind"></i>
                            <b> Wind Speed: </b>{this.props.data.wind.speed} mph
                        </span><br />
                        <span>
                            <i className="wi wi-humidity"></i>
                            <b> Humidity: </b>{this.props.data.main.humidity}%
                        </span><br />
                        <span>
                            <i className="wi wi-barometer"></i>
                            <b> Pressure: </b>{this.props.data.main.pressure} hPa
                        </span><br />
                        <span>
                            <i className="wi wi-fog"></i>
                            <b> Visibility: </b>{visibility} mi
                        </span>
                    </p>
                </div>         
            </div> 
        </div>
    );
  }
}

export default CurrentDetails;