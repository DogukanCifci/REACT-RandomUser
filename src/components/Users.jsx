import "./Users.css";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";
import axios from "axios";
import { useState, useEffect } from "react";

const Users = () => {
  const [data, setData] = useEffect([]);
  console.log(data);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => setData(response));
  }, []);

  return (
    <div className="container bg-warning text-center">
      <div className="kapsayici baslik">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/18/19/13/buildings-1836478_1280.jpg"
          alt=""
          className="usersPhoto"
        />
      </div>
      <div className="kapsayici names">Dogukan</div>
      <div className="kapsayici mail">
        <img src={email} alt="" />
      </div>
      <div className="kapsayici">alksdaklsdjasasdasdasda</div>
      <div className="kapsayici tel">
        <img src={phone} alt="" />
      </div>
      <div className="kapsayici">asdasd</div>
      <div className="kapsayici location">
        <img src={location} alt="" />
      </div>
      <div className="kapsayici">asdasdsa</div>
    </div>
  );
};
export default Users;
