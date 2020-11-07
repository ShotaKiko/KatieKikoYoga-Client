import React from "react";
import "../styles/Landing.scss";

import Typography from "@material-ui/core/Typography";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

function LandingPage() {
  return (
    <div className="landingContainer">
      <div className="contentContainer">
        <div className="contentTextDiv">
          <Typography variant="h5" gutterBottom>
            <Typography variant="h3" gutterBottom>
              KatieKikoYoga
            </Typography>
            There has never been a better time to experience the wonderful
            benefits of yoga in the comforts of your own home!
          </Typography>
          <Typography variant="body1" gutterBottom>
            I am a yoga instructor who teaches a variety of online yoga styles
            and flows for beginners to more advanced yogis! I am a registered
            223 hour yoga teacher with experience teaching both kid's and
            adult's classes. <br></br> Currently I teach four different styles of classes:<br></br>
          </Typography>

          <Typography variant="body1" gutterBottom>
            <span>
              Beginner's Yoga, Kid's Yoga, Advanced and Restorative Yoga
            </span>
            <br></br>and I also offer <span>Private Yoga Classes</span>.
          </Typography>

          <Typography variant="body1" gutterBottom>
            My work as a elementary teacher has lead me to become quite the
            storyteller but my love for true healing of the mind body and soul
            is what continues to drive and motivate my yoga teachings. I have
            been doing yoga for the past 16 years as a way for myself maintain <span>balance </span>
            and meditate upon my <span>inner peace</span>.
            {/* to cope with chronic pain and stress. */}
          </Typography>
        </div>
        <div className="imageDiv">
          <LazyLoadImage
            alt="test"
            src="gracefulTree.jpg"
            effect="black-and-white"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
