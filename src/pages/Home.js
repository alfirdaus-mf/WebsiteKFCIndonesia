import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/kfc.jpg";
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>KFC Super Family</h1>
        <p>Cocok Untuk Dinikmati Bersama Keluarga</p>
        <Link to="/menu">
          <button>Lihat Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
