import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 140,
  },
});

function Classes() {
  const classes = useStyles();
  return (
    <div className="classesContainer">
      <div className="firstRow">
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h3" component="h2">
                Beginner's Yoga
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Every Wednesday night at 7pm CST
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                In Beginner Yoga class we will focus on the fundamentals of yoga
                alignment and how to safely and effectively journey with our
                minds and bodies into yoga poses.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Sign Up
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h3" component="h2">
                Children's Yoga
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Every Sunday afternoon at 4pm CST
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                In Child’s Yoga class we focus on the <span>mindFUNness</span>.
                We’ll focus not only on calming strategies for our minds but
                story based exercises that many yoga fun for any age!
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Sign Up
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h3" component="h2">
                Advanced Yoga
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Every Saturday morning at 9am CST
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                In Advanced Yoga we will explore more advanced asanas (poses)
                through a combination of hatha, vinyasa and alignment based
                practice.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Sign Up
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h3" component="h2">
                Restorative Yoga
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Every Thursday night at 7pm CST
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                In Restorative Yoga we will focus on restoring and rejuvenating
                our bodies in a slower paced practice.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Sign Up
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Classes;
