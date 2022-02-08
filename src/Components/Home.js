import "../App.css";
import Nav from "../Components/Nav";
import mainPhoto from "../images/mainPhoto.jpg";
import Header from "../Components/Header";
import venue from "../images/reception.jpg";
import after from "../images/river-rock.jpg";

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
      <div></div>
      <h1 className="weddingDay">Ceremony and Reception</h1>
      <div></div>
      <div></div>
      <img className="mainPhoto" src={venue} alt="Ceremony Location" />
      <div></div>
      <h1 className="weddingDay">Crystall Point Ballroom</h1>
      <div></div>
      <div></div>
      <div className="weddingInfo">
        <div className="eventInfo">
          <h2>Times still TBD</h2>
          <h2>3900 River Rd, Point Pleasant, NJ 08742</h2>
        </div>
      </div>
      <div></div>
      <div></div>
      <h1 className="weddingDay">After Party </h1>
      <div></div>
      <div></div>
      <img className="mainPhoto" src={after} alt="Ceremony Location" />
      <div></div>

      <h1 className="weddingDay">The River Rock</h1>
      <div></div>
      <div></div>
      <div className="weddingInfo">
        <div className="eventInfo">
          <h2>Times still TBD</h2>
          <h2>1600 NJ-70, Brick Township, NJ 08724</h2>
          <div></div>
          <h2>Right Across the Street</h2>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
