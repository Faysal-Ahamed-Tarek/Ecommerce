import { makeStyles, useTheme } from "@material-ui/core/styles";
import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
import MainMenu from "./MainMenu";
import { Drawer, Grid, List, ListItem } from "@material-ui/core";
import { useState } from "react";
import Image from "next/image";
import ClearIcon from "@material-ui/icons/Clear";
import { HeaderStyle } from "./Headerstyle";
import { useRouter } from 'next/router';

const useStyles = makeStyles(HeaderStyle);

const MainHeader = () => {
  //mobile Menu toggle
  const [MbleMenu, setMbleMenu] = useState(false);
  const classes = useStyles();
  const Route = useRouter();

  //Drawer close 
  const DrawerClose = (Routes) => {
    setMbleMenu(!MbleMenu);
    Route.push(Routes);
  }
  return (
    <>
      {/* <TopBar /> */}
      <SearchBar setMbleMenu={setMbleMenu} MbleMenu={MbleMenu} />
      <MainMenu />
      <Drawer
        variant="temporary"
        open={MbleMenu}
        classes={{ paper: classes.Drawer }}
      >
        <>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid list xs={8}>
              <Image
                src="/images/Dashboardlogo.png"
                width={120}
                height={40}
                passHref
                alt="logo"
              />
            </Grid>
            <Grid list>
              <ClearIcon
                color="primary"
                fontSize="medium"
                style={{ fontSize: 30, marginTop: "-10px" }}
                onClick={() => setMbleMenu(!MbleMenu)}
              />
            </Grid>
          </Grid>
          <br />
          <Grid container>
            <Grid list xs={12}>
              <div className={classes.SearchContainer}>
                <input
                  type="text"
                  placeholder="Product Name"
                  className={classes.SearchInput}
                />
                <button className={classes.SearchBtn}>Search</button>
              </div>
            </Grid>
          </Grid>
          <br />
          <List>
            <ListItem button onClick={() => DrawerClose("/")} >
              <span>Home</span>
            </ListItem>
            <ListItem button onClick={() => DrawerClose("/shop")} >
              <span>Shop</span>
            </ListItem>
            <ListItem button onClick={() => DrawerClose("/about")} >
              <span>About</span>
            </ListItem>
            <ListItem button onClick={() => DrawerClose("/contact")} >
              <span>Contact</span>
            </ListItem>
            <ListItem button onClick={() => DrawerClose("/admin/dashboard")} >
              <span>Admin</span>
            </ListItem>
          </List>
        </>
      </Drawer>
    </>
  );
};
export default MainHeader;
