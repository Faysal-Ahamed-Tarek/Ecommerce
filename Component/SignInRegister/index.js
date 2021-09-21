import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import SignIn from './SignIn';
import Register from './Register';

const useStyles = makeStyles(SignInRegisterStyle);
const LogInRegistration = () => {
  const classes = useStyles();
  //Tab Switcher
  const [TabSwitcher, setTabSwitcher] = useState(true);

  return (
    <>
      <section>
        <Container maxWidth="lg">
          <div className={classes.Wrapper}>
            <Grid container alignItems="center" justifyContent="center">
              <Grid list xs={6}>
                <h2
                  className={`${classes.LogInTitle} ${
                    TabSwitcher ? classes.activeTab : ""
                  }`}
                  onClick={() => setTabSwitcher(true)}
                >
                  Log In
                </h2>
              </Grid>
              <Grid list xs={6}>
                <h2
                  className={`${classes.registerTitle} ${
                    TabSwitcher ? "" : classes.activeTab
                  }`}
                  onClick={() => setTabSwitcher(false)}
                >
                  Register
                </h2>
              </Grid>
            </Grid>
             {
               TabSwitcher ? <SignIn /> : <Register /> 
             }    
          </div>
        </Container>
      </section>
    </>
  );
};
export default LogInRegistration;
