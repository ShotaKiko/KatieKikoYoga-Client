import React from "react";
import "../styles/Contact.scss";

//Lazy Loading
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

//Material UI imports
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const fieldTheme = createMuiTheme({
  palette: {
    secondary: {
      main: green[800],
      backgroundColor: "#052738",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40vw",
      display: "flex",
      [theme.breakpoints.between("xs", "sm")]: {
        fontSize: ".4rem",
        width: "80vw",
        margin: "1vh 0px",
      },
      [theme.breakpoints.between("sm", "md")]: {
        fontSize: ".4rem",
        width: "60vw",
        margin: ".5vh 0px",
      },
    },
  },
  field: {
    "& > *": {
      color: "black",
      zIndex: "0",
    },
  },
  button: {
    color: "white",
    backgroundColor: "#265d0c",
    "&:hover": {
      background: "white",
      color: "#265d0c",
      borderColor: "#265d0c",
    },
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <section className="contactContainer">
      <div className="bannerImage">
        <LazyLoadImage
          alt="Contact Katie"
          src="../../optKatieContact.jpg"
          effect="blur"
          width={"100%"}
          height={"auto"}
        />
      </div>
      <div className="contactInfo">
        <div className="detailsDiv">
          <Typography variant="h2" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body1" gutterBottom>
            <span>General:</span>
            <Typography variant="body1"> katiekikoyoga@gmail.com</Typography>
            <span>Private Lessons:</span>
            <Typography variant="body1"> katiekikoyoga@gmail.com</Typography>
          </Typography>
        </div>

        <div className="form">
          <form className={classes.root} name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <ThemeProvider theme={fieldTheme}>
              <TextField
                className={classes.field}
                id="filled-basic"
                label="Your Name"
                variant="filled"
                defaultValue=""
                color="secondary"
                backgroundColor="main"
                name="name"
                type="text"
              />

              <TextField
                className={classes.field}
                id="filled-basic"
                label="Your Email"
                variant="filled"
                defaultValue=""
                color="secondary"
                name="email"
                type="text"
              />

              <TextField
                className={classes.field}
                id="filled-multiline-static"
                label=" Your Message"
                multiline
                rows={9}
                rowsMax={16}
                defaultValue=""
                variant="filled"
                color="secondary"
                name="message"
                type="text"
              />
            </ThemeProvider>
            <div className="submitContainer">
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
