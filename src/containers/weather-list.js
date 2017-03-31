import React, { Component } from "react";
import { connect } from "react-redux";
import {countries} from "country-data";
import CountryData from 'country-data'

console.log("CountryData.countries", CountryData.countries);
// const CountryData2 = require(CountryData)
class WeatherList extends Component {

  weatherDetails() {
    console.log("countries", CountryData.countries, CountryData.countries["US"])
    console.log(JSON.stringify(countries['US']));
    console.log(JSON.stringify(CountryData.countries['US']));


    //console.log("countries", CountryData, CountryData.countries, CountryData.countries.all, CountryData.countries["TW"])
    return this.props.weatherList.map((weather) => {

      const temps = weather.list.map((data) => data.main.temp);
      console.log("temps", temps);

      return (
        <tr key={weather.city.name}>
          <td>{ weather.city.name }</td>
          {/* }<td> {CountryData.countries[weather.city.country]}</td> */}
          <td>{ Math.round(10*(weather.list[0].main.temp - 273.15)) / 10 } °C</td>
          <td>{ weather.list[0].main.humidity } %</td>
          <td>{ weather.list[0].weather[0].description }</td>
          <td></td>
        </tr>
      )

    })
  }

  render() {
    return (
      <table className="table table-hover">
      <thead>
      <th>City</th>
      <th>Country</th>
      <th>Temperature</th>
      <th>Description</th>
      </thead>
      <tbody>
        {this.weatherDetails()}
      </tbody>
      </table>
    );
  }
}



function mapStateToProps(state) {    // HOW TO CONNECT APP STATE TO CONTAINER: map the app level state to props
  return {
    weatherList: state.weather
  }
}

export default connect(mapStateToProps)(WeatherList);    // HOW TO CONNECT APP STATE TO CONTAINER: export this smart component, AKA container
