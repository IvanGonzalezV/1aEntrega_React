import React from "react";
import "./App.css"

// COMPONENTS
import Header from "./components/Header/Header";

// PROPS => strings, arrays, booleans, function, objects, todo tipo de datos

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* 
        <Header
          title="Soy un title desde una prop"
          subtitle="Soy un subtitulo desde una prop"
          bgColor="orange"
        /> */}
        <Header
          title="Soy otra title con un title"
          subtitle="Soy otro subtitulo desde una prop"
        />

        <div className="UserSection">
          <span>Usuarios</span>
        </div>
      </div>
    )
  }
}

export default App;