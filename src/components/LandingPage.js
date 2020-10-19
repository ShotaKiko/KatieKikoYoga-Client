import React from "react";
import "../styles/Landing.scss";

import Typography from "@material-ui/core/Typography";

function LandingPage() {
  return (
    <div className="landingContainer">
      <div className="contentContainer">
        <div className="contentTextDiv">
          <Typography variant="h2" gutterBottom>
            KatieKikoYoga
          </Typography>
          <Typography variant="h5" gutterBottom>
            There has never been a better time to experience the wonderful
            benefits of yoga in the comforts of your own home!
          </Typography>
          <Typography variant="body1" gutterBottom>
            I am yoga instructor who teaches a variety of online yoga
            classes. I am a registered 223 hour yoga teacher with experience
            teaching both kid's and adult's classes.I teach four different
            styles of classes, <span>beginners yoga, kids yoga, advanced and
            restorative yoga</span>.
          </Typography>

          <Typography variant="body1" gutterBottom>
            My work as a elementary teacher has lead me to be quite the
            storyteller but my love for true healing of the mind body and soul
            is what continues to drive and motivate my yoga teachings. I have
            been doing yoga for the past 16 years as a way for myself to cope
            with chronic pain and stress.
          </Typography>
        </div>
        <div className="imageDiv">
          <img src="./katiePortrait.jpg" alt="Katie Kiko" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
