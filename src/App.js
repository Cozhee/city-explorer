import React from 'react'
import Search from './components/Search.js'
import Display from './components/Display.js'
import Warning from './components/Warning.js'
import Weather from './components/Weather.js'
import axios from "axios";
import './App.css';
import {Container} from "react-bootstrap";


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
    const cityUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${city}&format=json`
    const lat = 48.86
    const lon = 2.35
    const weatherUrl = `${process.env.REACT_APP_SERVER}/weather/?city=${city}&lat=${lat}&lon=${lon}`

    try {
      const response = await axios.get(cityUrl)
      const weatherData = await axios.get(weatherUrl)
      console.log(weatherData.data)
      const latitude = response.data[0].lat
      const longitude = response.data[0].lon
      const cityMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${latitude},${longitude}&zoom=12`
      this.setState({
        lon: longitude,
        lat: latitude,
        map: cityMap,
        cityName: city,
        weather: weatherData.data
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
          {weather}
        </Container>


      </>

    )
  }
}

export default App;
