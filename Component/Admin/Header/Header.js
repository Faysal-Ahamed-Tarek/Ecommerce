import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  Menu,
  MenuItem,
  Badge,
  Button,
} from "@material-ui/core";
import Image from "next/image";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { signOut } from 'next-auth/client';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
    borderBottom: "1px solid #ddd",
    padding: "0px 20px",
    [theme.breakpoints.down('sm')]: {
      padding:"10px 20px",
    },
    backgroundColor: "white",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: 10,
  },
  AppbarLogo: {
    marginTop: 10,
  },
  Left:{
    flex:1,
    display:"flex"
  },
  UserBtn:{
    backgroundColor:"#F6F8FB",
    padding:"8px 20px"
  },
  UserMenu:{
    boxShadow:"none",
    border: "1px solid #ddd",
    top:"64px !important",
  },
  anchor:{
    fontWeight:500,
    textTransform:"capitalize",
    "&:hover": {
      backgroundColor: "#febd69",
    },
  }
}));

const DashBoradHeader = ({ handleDrawerOpen, MbleMenuTrigger}) => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:800px)");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed" className={clsx(classes.appBar)}>
        <Toolbar>
          <div className={classes.Left}>
            <IconButton
              color="primary"
              aria-label="open drawer"
              onClick={matches ? handleDrawerOpen : MbleMenuTrigger}
              edge="start"
              className={clsx(classes.menuButton)}
            >
              <MenuIcon fontSize="medium" />
            </IconButton>
            <div className={classes.AppbarLogo}>
              <Image
                src="/images/Dashboardlogo.png"
                alt="Dashboard Logo"
                width={80}
                height={30}
              ></Image>
            </div>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className={classes.UserBtn}
            >
            <AccountCircleOutlinedIcon />
            &nbsp;  Faysal
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              classes={
                {paper : classes.UserMenu}
              }
            >
              <MenuItem className={classes.anchor} onClick={handleClose}>profile</MenuItem>
              <MenuItem className={classes.anchor} onClick={handleClose}>My account</MenuItem>
              <MenuItem className={classes.anchor} onClick={signOut}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default DashBoradHeader;
