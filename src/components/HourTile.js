import React, { Component } from 'react';
import Timestamp from 'react-timestamp';

class HourTile extends Component {
    render() {
        var temp = Math.round(this.props.data.main.temp);
        return (
            <div className="slds-m-around_xxx-small slds-box slds-box_x-small HourTile">               
                <div className="slds-grid slds-wrap slds-grid_vertical-align-center">
                    <div className="slds-col slds-order_1 slds-medium-order_2 slds-large-order_2 slds-size_4-of-12 slds-medium-size_1-of-1 slds-large-size_1-of-1">
                        <i className={`hourly-icon wi wi-owm-${this.props.data.weather[0].id}`}></i>
                        <p className="conditions">{this.props.data.weather[0].main}</p>
                    </div>
                    <div className="slds-col slds-order_2 slds-medium-order_1 slds-large-order_1 slds-size_4-of-12 slds-medium-size_1-of-1 slds-large-size_1-of-1">
                        <Timestamp className="time" time={this.props.data.dt_txt} format='time' />
                    </div>
                    <div className="slds-col slds-order_3 slds-medium-order_3 slds-large-order_3 slds-size_4-of-12 slds-medium-size_1-of-1 slds-large-size_1-of-1">
                        <p className="temp">{temp} &#8457;</p>     
                    </div>
                </div>
            </div>
        );
      }
}

export default HourTile;