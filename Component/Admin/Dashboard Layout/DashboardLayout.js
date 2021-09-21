import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useMediaQuery } from "@material-ui/core";
import DashBoradHeader from "./../Header/Header";
import DashBoradSidebar from "./../Sidebar/Sidebar";
import DashBoardContent from "./../Content/Content";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "92%",
    margin: "auto",
  },
}));

export default function DashboardLayout(props) {
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [MbleMenu, setMbleMenu] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const MbleMenuTrigger = () => {
    setMbleMenu(!MbleMenu);
  };

  const MbleMenuClose = () => {
    setMbleMenu(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <DashBoradHeader
        handleDrawerOpen={handleDrawerOpen}
        MbleMenuTrigger={MbleMenuTrigger}
      />
      <DashBoradSidebar
        open={open}
        MbleMenu={MbleMenu}
        MbleMenuClose={MbleMenuClose}
      />
      <DashBoardContent />
    </div>
  );
}
