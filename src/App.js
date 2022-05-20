import React from 'react'
import Search from './components/Search.js'
import Display from './components/Display.js'
import Warning from './components/Warning.js'
import Weather from './components/Weather.js'
import Movies from './components/Movies.js'
import './App.css';
import {Container} from "react-bootstrap";

import WeatherAPI from "./apis/WeatherAPI";
import CityAPI from "./apis/CityAPI";
import MovieAPI from "./apis/MovieAPI";

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      cityName: null,
      lon: null,
      lat: null,
      map: null,
      errors: false,
      errorMessage: null,
      weather: [],
      moveList: [],
      hasMovies: false
    }
  }

  resetStateData = () => {
    this.setState({
      cityName: null,
      lon: null,
      lat: null,
      map: null,
      errors: false
    })
  }

  getCityData = async (e) => {
    this.resetStateData()
    e.preventDefault()
    const city = this.state.cityName

    try {
      const cityData = await CityAPI.get('', {
        params: {
          city: city,
          format: 'json'
        },
      })

      const latitude = cityData.data[0].lat
      const longitude = cityData.data[0].lon

      const cityMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${latitude},${longitude}&zoom=12`

      const theData = await WeatherAPI.get('', {
        params: {
          lat: latitude,
          lon: longitude
        }
      })

      const movieList = await MovieAPI.get('', {
        params: {
          city: city
        }
      })

      this.setState({
        lon: longitude,
        lat: latitude,
        map: cityMap,
        cityName: city,
        weather: theData.data,
        movieList: movieList.data,
        hasMovies: true
      })

    } catch(err) {
      this.setState({
        errors: true,
        errorMessage: err.message
      })
      console.log(err.message)
    }
  }

  updateCityName = (e) => {
    this.setState({
      cityName: e.target.value
    })
  }

  render() {

    let item;

    if (this.state.errors) {
      item = <Warning errorMessage={this.state.errorMessage}/>
    } else if (this.state.lon && this.state.lat) {
      item = <Display
          cityName={this.state.cityName}
          longitude={this.state.lon}
          latitude={this.state.lat}
          map={this.state.map}
      />
    }

    let weather;
    if (this.state.weather) {
      weather = <Weather forcast={this.state.weather}/>
    }

    return (
      <>
        <Search updateCityName={this.updateCityName} getCityData={this.getCityData}/>
        <Container style={{ display: 'flex', justifyContent: 'center' }}>
          {item}
        </Container>
        {weather}
        {this.state.hasMovies && <Movies movieList={this.state.movieList}/> }
      </>
    )
  }
}

export default App;
