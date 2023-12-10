import React from "react";
import "./App.css"

// COMPONENTS
import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// PROPS => strings, arrays, booleans, function, objects, todo tipo de datos

const user1 = "Stereo Receiver & Amplifier"
const user2 = "Vintage Kodak Camera"
const user3 = "Vintage Compact Stereo System"
const user4 = "Vintage Preamp System"

class App extends React.Component {
  render() {
    return (
      <div className="App">
       
        <Header
          title="Soy otra title con un title"
          subtitle="Soy otro subtitulo desde una prop"
        />

        <NavBar />
        <ItemListContainer />

        <div className="UserSection">
          <UserCard
            img="https://www.lifewire.com/thmb/-XzfSzwECtdVWm0dcHvrKaskquY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-182145942IvanWuPI-59270da13df78cbe7ef31ca8.jpg"
            name={user1}
            offer="$650 (40% off)"
            date="Offer Avalible Until March 2024"
          />
          <UserCard
            img="https://littlevisuals.co/images/brownie.jpg"
            name={user2}
            offer="$95 (15% off)"
            date="Offer Avalible Until March 2024"
          />
          <UserCard
            img="https://media.istockphoto.com/id/1364243700/es/foto/sistemas-de-componentes-de-audio-vintage-receptor-est%C3%A9reo-altavoces-y-auriculares.jpg?s=612x612&w=0&k=20&c=qlKCLZtLywW7SLwft8bHrf-TB1X-XmQUAdWjPyH3FYg="
            name={user3}
            offer="$250 (20% off)"
            date="Offer Avalible Until March 2024"
          />
          <UserCard
            img="https://media.istockphoto.com/id/949475016/es/foto/sistema-est%C3%A9reo-de-audio-anal%C3%B3gico-amplificador-auriculares-altavoces.jpg?s=2048x2048&w=is&k=20&c=SQYY87Y-HnAAfgfLDmAonqlDZHv3p1mtALtKLssbAGo="
            name={user4}
            offer="$650 (40% off)"
            date="Offer Avalible Until March 2024"
          />
        </div>
      </div>
    )
  }
}

export default App;