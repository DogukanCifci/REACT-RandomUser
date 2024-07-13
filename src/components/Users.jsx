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
     <div>WARNING!!!!</div>
      <div class="warning">Kisilel Bilgileriniz ve Adresiniz ele gecirilmistir!!</div>
      <div>Tarayiciyi kapat!</div>

    </div>
  );
};
export default Users;
