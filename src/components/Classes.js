import React from "react";
import "../styles/Classes.scss";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import plankPose from "../courseImages/plankPose.jpg";
import boatPose from "../courseImages/boatPose.jpg";
import shoulderFourPose from "../courseImages/shoulderFourPose.jpg";
import sphinxPose from "../courseImages/sphinxPose.jpg";


function Classes() {
  return (
    <div className="classesContainer">
      <div className="firstRow">
        <div className="classDescription">
              <Typography gutterBottom variant="h3" component="h2">
                Beginner's Yoga
              </Typography>
              <Typography gutterBottom variant="h5" color="textSecondary" component="h2">
                Every Wednesday night at 7pm CST
              <Typography variant="body2"  component="p">
                Please sign up before 6pm CST
              </Typography>
              </Typography>
              <Typography variant="body1"  component="p">
                In Beginner Yoga class we will focus on the fundamentals of yoga
                alignment and how to safely and effectively journey with our
                minds and bodies into yoga poses.
                
                This class is for people brand new to yoga or 
                for those who may be returning back to yoga.
              </Typography>
            
            <div className="optionsButtons">
              <Button size="small" color="primary">
                Sign Up
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </div>
         </div>
        <img src={plankPose} alt="Plank Pose for beginners yoga" />
      </div>

      <div className="secondRow">
        <img src={shoulderFourPose} alt="Shoulder stretch pose for kids yoga" />
            <div className="classDescription2">
              <Typography gutterBottom variant="h3" component="h2">
                Kid's Yoga
              </Typography>
              <Typography gutterBottom variant="h5" color="textSecondary" component="h2">
                Every Sunday afternoon at 4pm CST
                <Typography variant="body2"  component="p">
                  Please sign up before 3pm CST
                </Typography>
              </Typography>
              <Typography variant="body1" component="p">
                In Child’s Yoga class we focus on the <span>mindFUNness</span>.
                We’ll focus not only on calming strategies for our minds but
                story based exercises that many yoga fun for any age!

                Time flies by while we exercise our minds and muscles!
              </Typography>
            
              <div className="optionsButtons">
                <Button size="small" color="primary">
                  Sign Up
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </div>
          </div>
      </div>

      <div className="thirdRow">
              <div className="classDescription" >
                <Typography gutterBottom variant="h3" component="h2">
                  Advanced Yoga
                </Typography>
                <Typography gutterBottom variant="h5" color="textSecondary" component="h2">
                  Every Saturday morning at 9am CST
                  <Typography variant="body2"  component="p">
                    Please sign up before 8am CST
                  </Typography>
                </Typography>
                <Typography variant="body1" component="p">
                  In Advanced Yoga we will explore more advanced asanas (poses)
                  through a combination of hatha, vinyasa and alignment based
                  practice.

                  Once you’ve got down the basics, anyone is welcome to try an 
                  Advanced Yoga Class!
                </Typography>
              
                <div className="optionsButtons">
                  <Button size="small" color="primary">
                    Sign Up
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </div>
              </div>
        <img src={boatPose} alt="boat pose for advanced yoga" />
      </div>

      <div className="fourthRow">
        <img src={sphinxPose} alt="sphinx pose for restorative yoga" />
            <div className="classDescription2">
              <Typography gutterBottom variant="h3" component="h2">
                Restorative Yoga
              </Typography>
              <Typography gutterBottom variant="h5" color="textSecondary" component="h2">
                Every Thursday night at 7pm CST
                <Typography variant="body2"  component="p">
                  Please sign up before 6pm CST
                </Typography>
              </Typography>
              <Typography variant="body1" component="p">
                In Restorative Yoga we will focus on restoring and rejuvenating
                our bodies in a slower paced practice.

                This style of yoga encourages physical and mental relaxation and 
                moves at a slower pace than my Beginner Class.
              </Typography>
              
              <div className="optionsButtons">
                <Button size="small" color="primary">
                  Sign Up
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </div>
            </div>
      </div>
    </div>
  );
}

export default Classes;
