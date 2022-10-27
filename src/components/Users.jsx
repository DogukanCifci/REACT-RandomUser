import "./Users.css";
import emailImage from "../assets/email.svg";
import phoneImage from "../assets/phone.svg";
import locationImage from "../assets/location.svg";
import axios from "axios";
import { useState, useEffect } from "react";

const Users = () => {
  const [dataa, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => setData(response.data.results));
  }, []);

  return (
    <div className="">
      {dataa.map((eleman) => {
        const { id, name, email, phone, location } = eleman;
        const { title, first, last } = name;
        const { city, country } = location;
        console.log(eleman);
        return (
          <div className="container bg-warning text-center" key={id}>
            <div className="kapsayici baslik">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/18/19/13/buildings-1836478_1280.jpg"
                alt=""
                className="usersPhoto"
              />
            </div>
            <div className="kapsayici names">
              {title} {first} {last}
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
          </div>
        );
      })}
    </div>
  );
};
export default Users;
