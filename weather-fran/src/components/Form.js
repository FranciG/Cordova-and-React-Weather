import React from "react";

class Form extends React.Component {
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City name"/>
                <input type="text" name="country" placeholder="Country name"/>
            <button>Find weather</button>
            </form>
                
        );
    }
};
export default Form;