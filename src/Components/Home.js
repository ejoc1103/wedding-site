import "../App.css";
import Nav from "../Components/Nav";
import mainPhoto from "../images/mainPhoto.jpg";
import Header from "../Components/Header";

function Home() {
  return (
    <div className="main">
      <Header />

      <Nav />

      <div></div>
      <img className="mainPhoto" src={mainPhoto} alt="main couple shot" />
      <div></div>
      <div className="weddingInfo">
        <h1 className="weddingDay">Wedding Day</h1>
        <h2>July 23rd, 2023</h2>
        <h2>Times still TBD</h2>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
