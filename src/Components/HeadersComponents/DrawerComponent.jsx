import React from "react";
import { Box, Drawer, ListItem, ListItemText, List } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";

export default function DrawerComponent({
  initialState,
  navlinks,
  handleDrawerToogler,
}) {
  const classes = useStyles();
  return (
    <Drawer
      anchor='left'
      open={initialState}
      onClose={handleDrawerToogler}
      className={classes.drawer}>
      <Box className={classes.drawerContainer}>
        <List style={{ paddingTop: "30px" }}>
          {navlinks.map((item, i) => (
            <ListItem key={i} className={classes.listItem}>
              <ListItemText>{item.label}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
