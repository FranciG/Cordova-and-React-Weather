import React from "react";

class Titles extends React.Component {
    render(){
        return(
            <div>
                <h1>Search weather</h1>
                <p>Find out what clothes to wear</p>
            </div>
        );
    }
}

//In order for app.js to find titles.js, we export it and then import it in app.js
export default Titles;