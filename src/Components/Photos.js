import React from "react";

import photoArray from "../Utils/PhotoArray.js";
import partyArray from "../Utils/PartyArray.js";
import chillArray from "../Utils/ChillArray";
import familyArray from "../Utils/FamilyArray";
import morePartyArray from "../Utils/MorePartyArray";
import officialArray from "../Utils/OfficialArray";
import tortureArray from "../Utils/TortureArray";

export default function Photos() {
  return (
    <div className="photo-container">
      <div className="photo-block-one">
        {photoArray.map(name => {
          return <img className="block-photo" src={name} alt="engagement" />;
        })}
      </div>
      <hr className="main-hr" />
      <h2 className="photo-sub-header">We Partied</h2>
      <div className="photo-block-two">
        {partyArray.map(name => {
          return <img className="block-photo-two" src={name} alt="party" />;
        })}
      </div>
      <hr className="main-hr" />
      <h2 className="photo-sub-header">We Chilled</h2>
      <div className="photo-block-two">
        {chillArray.map(name => {
          return <img className="block-photo-two" src={name} alt="chill" />;
        })}
      </div>
      <hr className="main-hr" />
      <h2 className="photo-sub-header">We Inflicted Seft Torture</h2>
      <div className="photo-block-two">
        {tortureArray.map(name => {
          return <img className="block-photo-two" src={name} alt="torture" />;
        })}
      </div>
      <hr className="main-hr" />
      <h2 className="photo-sub-header">We Had a Lot of Family Time</h2>
      <div className="photo-block-two">
        {familyArray.map(name => {
          return <img className="block-photo-two" src={name} alt="family" />;
        })}
      </div>
      <hr className="main-hr" />
      <h2 className="photo-sub-header">We Partied Some More</h2>
      <div className="photo-block-two">
        {morePartyArray.map(name => {
          return (
            <img className="block-photo-two" src={name} alt="More Party" />
          );
        })}
      </div>
      <hr className="main-hr" />
      <h2 className="photo-sub-header">We Made Some Things Official</h2>
      <div className="photo-block-two">
        {officialArray.map(name => {
          return <img className="block-photo-two" src={name} alt="Official" />;
        })}
      </div>
    </div>
  );
}
