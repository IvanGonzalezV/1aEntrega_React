import React from "react";
import "./App.css"

// COMPONENTS
import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard";

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
          <UserCard img="https://imgs.search.brave.com/nNu6ObsmmaFhfuzeHWxgh02UKedrXh9U8VyX93LflkU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlmZXdpcmUuY29t/L3RobWIvd2tZR0N2/UXQwcEU4STVua1JW/NzBGWDF5a29zPS8x/NTAweDAvZmlsdGVy/czpub191cHNjYWxl/KCk6bWF4X2J5dGVz/KDE1MDAwMCk6c3Ry/aXBfaWNjKCkvR2V0/dHlJbWFnZXMtMTgy/MTQ1OTQySXZhbld1/UEktNTkyNzBkYTEz/ZGY3OGNiZTdlZjMx/Y2E4LmpwZw" name="Stereo Receiver & Amplifier" offer="$650 (40% off)" date="Offer Avalible Until March 2024" 
          />
          <UserCard img="https://imgs.search.brave.com/nNu6ObsmmaFhfuzeHWxgh02UKedrXh9U8VyX93LflkU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlmZXdpcmUuY29t/L3RobWIvd2tZR0N2/UXQwcEU4STVua1JW/NzBGWDF5a29zPS8x/NTAweDAvZmlsdGVy/czpub191cHNjYWxl/KCk6bWF4X2J5dGVz/KDE1MDAwMCk6c3Ry/aXBfaWNjKCkvR2V0/dHlJbWFnZXMtMTgy/MTQ1OTQySXZhbld1/UEktNTkyNzBkYTEz/ZGY3OGNiZTdlZjMx/Y2E4LmpwZw" name="Stereo Receiver & Amplifier" offer="$650 (40% off)" date="Offer Avalible Until March 2024"
          />
          <UserCard img="https://imgs.search.brave.com/nNu6ObsmmaFhfuzeHWxgh02UKedrXh9U8VyX93LflkU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlmZXdpcmUuY29t/L3RobWIvd2tZR0N2/UXQwcEU4STVua1JW/NzBGWDF5a29zPS8x/NTAweDAvZmlsdGVy/czpub191cHNjYWxl/KCk6bWF4X2J5dGVz/KDE1MDAwMCk6c3Ry/aXBfaWNjKCkvR2V0/dHlJbWFnZXMtMTgy/MTQ1OTQySXZhbld1/UEktNTkyNzBkYTEz/ZGY3OGNiZTdlZjMx/Y2E4LmpwZw" name="Stereo Receiver & Amplifier" offer="$650 (40% off)" date="Offer Avalible Until March 2024"
          />
        </div>
      </div>
    )
  }
}

export default App;