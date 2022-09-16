import React from "react";
import "./Contact.css";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:sumran150ak@gmail.com">
        <Button>Contact: sumran150ak@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;