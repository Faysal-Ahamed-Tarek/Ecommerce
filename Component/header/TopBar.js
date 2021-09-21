import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TopbarStyle } from "./TopBarStyle";

const useStyles = makeStyles(TopbarStyle);

const TopBar = () => {
  const classes = useStyles();

  return (
    <section className={classes.TopBar}>
      <Container maxWidth="lg" classes={{ maxWidthLg: classes.Container }}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <span>Free shipping during Besa Prime Day.</span>
          </Grid>
          <Grid item xs={6}>
            <Grid container justifyContent="flex-end">
              <span className={classes.ListItem}>Free shipping</span>
              <span className={classes.ListItem}>during Besa</span>
              <span className={classes.ListItem}>Prime Day</span>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
export default TopBar;
