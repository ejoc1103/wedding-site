import "../App.css";
import Nav from "../Components/Nav";
import mainPhoto from "../images/mainPhoto.jpg";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import venue from "../images/reception.jpg";
import after from "../images/river-rock.jpg";

//todo work on RSVP page

function Home() {
  return (
    <>
      <div className="main" id="main-id ">
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
        <hr className="main-hr" />
        <div></div>
        <h1 className="reception-header">Ceremony and Reception</h1>
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
        <hr className="main-hr" />
        <div></div>
        <h1 className="reception-header">After Party </h1>
        <div></div>
        <div></div>
        <img className="mainPhoto" src={after} alt="Ceremony Location" />
        <div></div>

        <h1 className="weddingDay">The River Rock</h1>
        <div></div>
        <div></div>
        <div className="weddingInfo">
          <div className="eventInfo">
            <h2 className="bottom-info">Times still TBD</h2>
            <h2 className="bottom-info">
              1600 NJ-70, Brick Township, NJ 08724
            </h2>
            <div></div>
            <h2 className="bottom-info">Right Across the Street</h2>
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
