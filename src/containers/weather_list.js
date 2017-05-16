import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    //const temps = cityData.list.map(weather => weather.main.temp);
    // or below with Celsius conversion
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp-273 );
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    //console.log(temps);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="blue" units="C" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="orange" units="%" /></td>
      </tr>
    );

  }

  render() {
    return (

      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>

    );
  }
}

//function mapStateToProps(state) {
//  return { weather: state.weather }; // OR
//}
// same as below - write above one or below. .. both are same

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect (mapStateToProps)(WeatherList);
