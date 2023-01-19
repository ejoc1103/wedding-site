import '../../App.css';
import mainPhoto from '../../images/mainPhoto.jpg';
import venue from '../../images/reception.jpg';
import after from '../../images/river-rock.jpg';

function Home() {
  return (
    <>
      <div></div>
      <img className='main-photo' src={mainPhoto} alt='main couple shot' />
      <div></div>
      <div className='wedding-info'>
        <h1 className='wedding-day'>Wedding Day</h1>
        <h1>July 23rd, 2023</h1>
        <h1>
          Ceremony <br /> Starts at 4:30 pm
        </h1>
      </div>
      <div></div>
      <hr className='main-hr' />
      <div></div>
      <h1 className='reception-header'>Ceremony and Reception</h1>
      <div></div>
      <div></div>
      <img className='main-photo' src={venue} alt='Ceremony Location' />
      <div></div>
      <h1 className='wedding-day'>Crystall Point Ballroom</h1>
      <div></div>
      <div></div>
      <div className='wedding-info'>
        <div className='event-info'>
          <h2>
            Cocktail Hour <br /> From 5 pm to 6 pm <br /> Reception <br /> From
            6 pm to 10 pm
          </h2>
          <h2>3900 River Rd, Point Pleasant, NJ 08742</h2>
        </div>
      </div>
      <div></div>
      <hr className='main-hr' />
      <div></div>
      <h1 className='reception-header'>After Party </h1>
      <div></div>
      <div></div>
      <img className='main-photo' src={after} alt='Ceremony Location' />
      <div></div>

      <h1 className='wedding-day'>The River Rock</h1>
      <div></div>
      <div></div>
      <div className='wedding-info'>
        <div className='event-info'>
          <h2 className='bottom-info'>10pm - Midnight</h2>
          <h2 className='bottom-info'>1600 NJ-70, Brick Township, NJ 08724</h2>
          <div></div>
          <h2 className='bottom-info'>Right Across the Street</h2>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Home;
