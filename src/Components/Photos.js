import React from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import photoArray from "../Utils/PhotoArray.js";
import partyArray from "../Utils/PartyArray.js";
import chillArray from "../Utils/ChillArray";
import familyArray from "../Utils/FamilyArray";
import morePartyArray from "../Utils/MorePartyArray";
import officialArray from "../Utils/OfficialArray";
import tortureArray from "../Utils/TortureArray";

export default function Photos() {
  return (
    <div className="main">
      <Header />
      <Nav />

      <div className="photo-block-one">
        {photoArray.map(name => {
          return <img className="block-photo" src={name} alt="engagement" />;
        })}
      </div>
      <h2 className="photoSubHeader">We Partied</h2>
      <div className="photo-block-two">
        {partyArray.map(name => {
          return <img className="block-photo-two" src={name} alt="party" />;
        })}
      </div>
      <h2 className="photoSubHeader">We Chilled</h2>
      <div className="photo-block-two">
        {chillArray.map(name => {
          return <img className="block-photo-two" src={name} alt="chill" />;
        })}
      </div>
      <h2 className="photoSubHeader">We Inflicted Seft Torture</h2>
      <div className="photo-block-two">
        {tortureArray.map(name => {
          return <img className="block-photo-two" src={name} alt="torture" />;
        })}
      </div>
      <h2 className="photoSubHeader">We Had a Lot of Family Time</h2>
      <div className="photo-block-two">
        {familyArray.map(name => {
          return <img className="block-photo-two" src={name} alt="family" />;
        })}
      </div>
      <h2 className="photoSubHeader">We Partied Some More</h2>
      <div className="photo-block-two">
        {morePartyArray.map(name => {
          return (
            <img className="block-photo-two" src={name} alt="More Party" />
          );
        })}
      </div>
      <h2 className="photoSubHeader">We Made Some Things Official</h2>
      <div className="photo-block-two">
        {officialArray.map(name => {
          return <img className="block-photo-two" src={name} alt="Official" />;
        })}
      </div>
    </div>
  );
}
