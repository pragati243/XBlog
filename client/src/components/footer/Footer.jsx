import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#000",
    color: "#fff",
    padding: theme.spacing(3),
  },
  icons: {
    marginBottom: theme.spacing(2),
  },
  iconLink: {
    marginRight: theme.spacing(2),
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      color: "orange",
    },
  },
  links: {
    marginTop: theme.spacing(2),
  },
  footerRow: {
    marginBottom: theme.spacing(2),
  },
  categoryLink: {
    marginRight: theme.spacing(2),
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      color: "orange",
    },
  },
  supportLink: {
    marginRight: theme.spacing(2),
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      color: "orange",
    },
  },
  permalinksLink: {
    marginRight: theme.spacing(2),
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      color: "orange",
    },
  },
  copyright: {
    marginTop: theme.spacing(2),
    color: "#888",
  },
}));


const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item className={classes.icons}>
          <Link to="https://youtube.com" className={classes.iconLink}>
            <YouTubeIcon />
          </Link>
          <Link to="https://facebook.com" className={classes.iconLink}>
            <FacebookIcon />
          </Link>
          <Link to="https://instagram.com" className={classes.iconLink}>
            <InstagramIcon />
          </Link>
          <Link to="https://linkedin.com" className={classes.iconLink}>
            <LinkedInIcon />
          </Link>
          <Link to="https://twitter.com" className={classes.iconLink}>
            <TwitterIcon />
          </Link>
        </Grid>
        <Grid item className={classes.links}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <div className={classes.footerRow}>
                <Typography variant="h6">Categories</Typography>
                <Link to="/" className={classes.categoryLink}>
                  Politics
                </Link>
                <Link to="/" className={classes.categoryLink}>
                  Technology
                </Link>
                <Link to="/" className={classes.categoryLink}>
                  Sports
                </Link>
                <Link to="/" className={classes.categoryLink}>
                  Entertainment
                </Link>
                <Link to="/" className={classes.categoryLink}>
                  Music
                </Link>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className={classes.footerRow}>
                <Typography variant="h6">Support</Typography>
                <Link to="/contact" className={classes.supportLink}>
                  Online Support
                </Link>
                <Link to="/contact" className={classes.supportLink}>
                  Phone Numbers
                </Link>
                <Link to="/contact" className={classes.supportLink}>
                  Emails
                </Link>
                <Link to="/contact" className={classes.supportLink}>
                  Sports
                </Link>
                <Link to="/about" className={classes.supportLink}>
                  About
                </Link>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className={classes.footerRow}>
                <Typography variant="h6">Permalinks</Typography>
                <Link to="/" className={classes.permalinksLink}>
                  Home
                </Link>
                <Link to="/blogs" className={classes.permalinksLink}>
                  Blogs
                </Link>
                <Link to="/news" className={classes.permalinksLink}>
                  News
                </Link>
                <Link to="/contact" className={classes.permalinksLink}>
                  Contact
                </Link>
                <Link to="/login" className={classes.permalinksLink}>
                  Sign In
                </Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="body2" className={classes.copyright}>
        &copy; 2023 think &amp; ink
      </Typography>
    </div>
  );
};

export default Footer;
