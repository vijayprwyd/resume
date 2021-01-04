import React from "react";
import "./profile.css";
import linkedin from '../assets/linkedin.png';
import stackoverflow from '../assets/stack_overflow.png';


export function Profile({ name, designation, email, phone, location }) {
  return (
    <div className="box">
      <div className="flex-profile">
        <div>
          <h1> {name} </h1>
          <h2 className="highlight">
            <b> {designation} </b>{" "}
          </h2>
        </div>

        <address>
          <div>
            <div className="profile-field highlight">
              <i class="fa fa-envelope icon"></i>
              <a href={`mailto: ${email}`}> {email} </a>
            </div>
            <div className="profile-field highlight">
              <i class="fa fa-mobile icon" aria-hidden="true"></i>
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
            <div className="profile-field highlight">
              <i class="fa fa-map-marker icon" aria-hidden="true"></i>
              {location}{" "}
            </div>
          </div>
        </address>
      </div>

      <div style={{ display: "flex" }}>
        <div>
          <a href="#">
            <img src={linkedin} height="40" width="40"></img>
          </a>

          <a href="#">
            <img src={stackoverflow} height="40" width="40"></img>
          </a>

        </div>
      </div>
    </div>
  );
}
