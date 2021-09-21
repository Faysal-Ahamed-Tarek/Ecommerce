import { Drawer, List, ListItem, useMediaQuery } from "@material-ui/core";
import clsx from "clsx";
import Image from "next/image";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "next/link";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 200,
    flexShrink: 0,
    border: 0,
    top:100,
    height:"80%",
    border:"1px solid #ddd",
    left:30,
    borderRadius: 6,
    padding: "20px 14px",
    whiteSpace: "nowrap",
    [theme.breakpoints.down('sm')]: {
      top:0,
      height:"100%",
      left:0,
    borderRadius: 0,
    },
  },
  drawerOpen: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(25) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  ListItem: {
    marginTop: 10,
  },
  Navigations: {
    marginTop: 5,
    padding: "10px 0px 10px 10px",
    borderRadius: 6,
    color: "black",
    fontSize: 16,
    fontWeight: 500,
    textTransform: "Capitalize",
    "&:hover": {
      backgroundColor: "#febd69",
    },
  },
  MbleLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  MbleListItem: {
    marginTop: "10px",
  },
  ListIcon: {
    minWidth: 48,
  },
}));

export default function DashBoradSidebar({ open, MbleMenu, MbleMenuClose }) {
  const matches = useMediaQuery("(min-width:800px)");
  const classes = useStyles();

  return (
    <>
      <Drawer
        variant={matches ? "permanent" : "temporary"}
        open={MbleMenu}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
          paperAnchorLeft: classes.drawer,
        }}
      >
        {!matches && (
          <div className={classes.MbleLogo}>
            <Image
              src="/images/Dashboardlogo.png"
              alt="Dashboard Logo"
              width={100}
              height={40}
            />
          </div>
        )}
        <List
          className={clsx(classes.ListItem, !matches && classes.MbleListItem)}
        >
          <Link href="/admin/dashboard" passHref>
            <ListItem
              button
              onClick={MbleMenuClose}
              className={classes.Navigations}
            >
              <ListItemIcon className={classes.ListIcon}>
                <DashboardIcon />
              </ListItemIcon>
              <a className={classes.anchor}>dashboard</a>
            </ListItem>
          </Link>

          <Link href="/admin/all-product" passHref>
            <ListItem
              button
              onClick={MbleMenuClose}
              className={classes.Navigations}
            >
              <ListItemIcon className={classes.ListIcon}>
                <ShoppingCartIcon />
              </ListItemIcon>
              <a>All Product</a>
            </ListItem>
          </Link>

          <Link href="/admin/new-product" passHref>
            <ListItem
              button
              onClick={MbleMenuClose}
              className={classes.Navigations}
            >
              <ListItemIcon className={classes.ListIcon}>
                <AddShoppingCartIcon />
              </ListItemIcon>
              <a>New Product</a>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </>
  );
}
