import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./HeaderStyles";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import { Link } from "react-scroll";
import { Theme } from "../Theme";

export default function Navbar({ navlinks, handleDrawerToogler }) {
  const classes = useStyles();

  return (
    <AppBar
      position='fixed'
      className={classes.navbar}
      style={{ backgroundColor: Theme.colors.base1 }}>
      <Toolbar className={classes.ToolBar}>
        <Typography variant='h5' component='h6'>
          {"< GreatCoders />"}
        </Typography>

        {/* navlinks  */}
        <Box component={Hidden} xsDown>
          <Box>
            {navlinks.map((item, i) => (
              <Button
                key={i}
                className={classes.navlinks}
                to={`${item.Id}`}
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                component={Link}
                color='inherit'>
                {item.label}
              </Button>
            ))}
          </Box>
        </Box>
        <Box component={Hidden} smUp>
          <IconButton color='inherit' onClick={handleDrawerToogler}>
            <MenuOpenRoundedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
