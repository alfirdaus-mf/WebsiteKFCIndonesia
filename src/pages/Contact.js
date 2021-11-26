import React from "react";
import Burger from "../assets/burger.jpg";
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Burger})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlfor="name">Nama Lengkap</label>
          <input id="name" placeholder="Nama Anda..." type="text" />
          <label htmlfor="email">Email</label>
          <input id="email" placeholder="Email Anda..." type="email" />
          <label htmlfor="message">Pesan</label>
          <textarea
            rows="6"
            placeholder="Pesan Anda..."
            name="message"
            id="message"
            required
          ></textarea>
          <button type="submit">Kirim Pesan</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
