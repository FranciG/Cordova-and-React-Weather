import React from "react";

import Titles from "./components/Titles"; 
//import it from Titles.js The same is done with the other components, like form file
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY ="fd11d171b4de657d0b5d721ce7feba34";

class App extends React.Component {
  state={ //The state changes when we press the button
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
 getWeather= async (e) => { //Crate a method getweather
  e.preventDefault();//So when we press the button from form it doesn't refresh the page
 const city = e.target.elements.city.value; //value is what we type to the input form
 const country = e.target.elements.country.value;
  const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`); //Template strings ``. This makes the call to the url
 const data = await api_call.json(); //pass variable api_call and call the method json to get data converted to json
if (city && country) { //Condition to do not get errors if the putton is pressed without data in the city and country fields
 console.log(data);  //the else value will just return the error message

//Make show what we get back from the API using the method setstate from react
this.setState({
temperature: data.main.temp, //we get it from const data, updating the temperature state once we press the button
city: data.name,
country: data.sys.country, //sys.country is where we get it from the json data
humidity: data.main.humidity,
description: data.weather[0].description, //it is an array
error: ""
});
} else {
  this.setState({
    temperature: undefined, 
    city: undefined,
    country: undefined,
    humidity:undefined,
    description: undefined,
    error: "Please enter city and country."
    });

  

  } 
}

render() {
  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                <Weather 
                  temperature={this.state.temperature} 
                  humidity={this.state.humidity}
                  city={this.state.city}
                  country={this.state.country}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
};

export default App;