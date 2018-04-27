import React, { Component } from 'react';
import HourTile from './HourTile.js';

class DayBar extends Component {

    render() {
    return (
        <div className="slds-grid slds-grid_align-center slds-gutters slds-wrap">  
            <div className="slds-col slds-size_1-of-1 slds-medium-size_10-of-12 slds-large-size_10-of-12">
                <h2 className="slds-text-title_caps section-header">Hourly</h2>
            </div>
            <div className="slds-col slds-size_1-of-1 slds-medium-size_10-of-12 slds-large-size_10-of-12">
                <div className="forecast-box slds-box">
                    <div className="slds-grid slds-wrap slds-grid_align-center">
                        <div className="slds-col slds-size_1-of-1 slds-medium-size_4-of-12 slds-large-size_2-of-12">
                            <HourTile data={this.props.forecast.list[0]} />
                        </div>
                        <div className="slds-col slds-size_1-of-1 slds-medium-size_4-of-12 slds-large-size_2-of-12">
                            <HourTile data={this.props.forecast.list[1]} />        
                        </div>
                        <div className="slds-col slds-size_1-of-1 slds-medium-size_4-of-12 slds-large-size_2-of-12">
                            <HourTile data={this.props.forecast.list[2]} />
                        </div>
                        <div className="slds-col slds-size_1-of-1 slds-medium-size_4-of-12 slds-large-size_2-of-12">
                            <HourTile data={this.props.forecast.list[3]} />
                        </div>
                        <div className="slds-col slds-size_1-of-1 slds-medium-size_4-of-12 slds-large-size_2-of-12">
                            <HourTile data={this.props.forecast.list[4]} />
                        </div>
                        <div className="slds-col slds-size_1-of-1 slds-medium-size_4-of-12 slds-large-size_2-of-12">
                            <HourTile data={this.props.forecast.list[5]} />
                        </div>   
                    </div>
                </div>
            </div> 
        </div>
    );
  }
}

export default DayBar;