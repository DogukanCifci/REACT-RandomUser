import "./Users.css";
import emailImage from "../assets/email.svg";
import phoneImage from "../assets/phone.svg";
import locationImage from "../assets/location.svg";
import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [dataa, setData] = useState([]);

  useEffect(() => {
    newUser();
  }, []);

  const newUser = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => setData(response.data.results));
  };
  return (
    <div>
      <div className="">
        {dataa.map((eleman) => {
          const { id, name, email, phone, location, picture, registered, dob } =
            eleman;
          const { title, first, last } = name;
          const { city, country } = location;
          const { large } = picture;
          console.log(eleman);
          return (
            <div className="container text-center" key={id}>
              <div className="kapsayici baslik">
                <img src={large} alt="" className="usersPhoto" />
              </div>
              <div className="kapsayici names">
                <h5>
                  {title} {first} {last}
                </h5>
              </div>
              <div className="kapsayici mail">
                <img src={emailImage} alt="" />
              </div>
              <div className="kapsayici">{email}</div>
              <div className="kapsayici tel">
                <img src={phoneImage} alt="" />
              </div>
              <div className="kapsayici">{phone}</div>
              <div className="kapsayici location">
                <img src={locationImage} alt="" />
              </div>
              <div className="kapsayici">
                {city} {country}{" "}
              </div>

              <div className="footer text-center">
                <p>Age : {dob.age} </p>
                <p>Register Date : {registered.date}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="button text-center mt-4">
        <button className="btn text-center mx-auto" onClick={newUser}>
          Random User
        </button>
      </div>
    </div>
  );
};
export default Users;
