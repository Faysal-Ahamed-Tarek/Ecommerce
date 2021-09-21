import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MainMenuStyle } from "./MainMenuStyle";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import Link from "next/link";

const useStyles = makeStyles(MainMenuStyle);
const MainMenu = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.MainMenu}>
        <Container maxWidth="lg" className={classes.Container}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={7}>
              <div>
              <li className={classes.ListItem}>
                <Link href="/">
                  <a className={classes.Item}>Home</a>
                </Link>
              </li>
              <li className={classes.ListItem}>
                <Link href="/shop">
                  <a className={classes.Item}>Shop</a>
                </Link>
              </li>
              <li className={classes.ListItem}>
                <Link href="/about">
                  <a className={classes.Item}>About</a>
                </Link>
              </li>
              <li className={classes.ListItem}>
                <Link href="/contact">
                  <a className={classes.Item}>Contact</a>
                </Link>
              </li>
              <li className={classes.ListItem}>
                <Link href="/">
                  <a className={classes.Item}>Admin</a>
                </Link>
              </li>
              </div>
            </Grid>
            <Grid item xs={5}>
              <Grid container justifyContent="flex-end" alignItems="center">
                  
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};
export default MainMenu;
