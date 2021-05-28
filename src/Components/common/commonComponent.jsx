import { Avatar, Box, Grid, Typography } from "@material-ui/core";
import { useStyles } from "../HeadersComponents/HeaderStyles";
import { useStyles as BodyStyles } from "../BodyComponents/BodyStyles";

export const Decorator = ({ label, withIcon, Icon, styles }) => {
  const classes = useStyles();
  return (
    <Box className={classes.decorator} style={styles}>
      <Typography component='span' className={classes.decoratorText}>
        {label}
      </Typography>
      {withIcon ? (
        <Typography component='span' className={classes.arrow}>
          {Icon}
        </Typography>
      ) : null}
    </Box>
  );
};

export const Divider = ({ style }) => {
  const classes = BodyStyles();
  return <div className={classes.divider} style={style}></div>;
};

export const RenderSectionHeading = ({
  smallText,
  heading,
  description,
  alignCenter,
}) => {
  const classes = BodyStyles();
  return (
    <Box className={classes.sectionHeadingCont}>
      {Decorator({
        label: smallText,
        withIcon: false,
        styles: alignCenter ? { width: "100px", margin: "10px auto" } : {},
      })}
      <Typography
        variant='h4'
        align={alignCenter ? "center" : "left"}
        className={classes.sectionHeading}>
        {heading}
      </Typography>
      {Divider({
        style: alignCenter ? { margin: "16px auto" } : { margin: "16px 0px" },
      })}
      <Typography
        variant='body1'
        component='h6'
        align={alignCenter ? "center" : "left"}
        className={classes.sectionDesc}>
        {description}
      </Typography>
    </Box>
  );
};
// () => () /// retun directly
// () => { return}

export const CardMedia = ({ label, Desc, Icon, key }) => {
  const classes = BodyStyles();
  return (
    <Grid container style={{ marginTop: "16px" }}>
      <Grid item xs={3} className={classes.AvatarCont}>
        <Avatar className={classes.avatar}>{Icon}</Avatar>
      </Grid>
      <Grid item xs={9} className={classes.MediaText}>
        <Typography variant='body1' componen='h6'>
          {label}
        </Typography>
        <Typography variant='caption'>{Desc}</Typography>
      </Grid>
    </Grid>
  );
};
