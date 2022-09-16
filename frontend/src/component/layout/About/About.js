import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/lifeatgametrain/?hl=en";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="data:image/png;base64,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"
              alt="Founder"
            />
            <Typography>Sumran Ali</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by **Sumran Ali**. This website 
              is designed for GameTrain project.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCrdPc_PpLS3NoNYs1EBVFuQ"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/lifeatgametrain/?hl=en" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;