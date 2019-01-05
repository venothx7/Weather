import React, { Component } from "react";
import "./App.css";
import Weather from "./components/Weather";

const API_KEY = "0775e8c654bde69682b77b834f79a657";
class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  //`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
  handleClick = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`
    ).catch(e => {
      console.log(e);
    });
    const data = await api_call.json();
    if (city && country && data.cod === 200) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Error: " + data.cod + " " + data.message
      });
    }
  };

  render() {
    return (
      <div className="container">
        <center>
          <div className="card" id="card1">
            <h2>Weather App</h2>
            <form onSubmit={this.handleClick}>
              <input
                type="text"
                placeholder="City.."
                name="city"
                className="form-control"
              />
              <br />
              <input
                type="text"
                placeholder="Country.."
                name="country"
                className="form-control"
              />
              <br />
              <button className="btn btn-info">Get Weather</button>
            </form>
            <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            />
          </div>
        </center>
      </div>
    );
  }
}

export default App;
