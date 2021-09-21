import { Container,Grid } from '@material-ui/core';
import SignIn from './../../Component/SignInRegister/SignIn';
import Register from './../../Component/SignInRegister/Register';
import { SignInRegisterStyle } from "../../Component/SignInRegister/SignRegisterStyle";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from 'react';
import { providers, signIn, getSession, csrfToken } from "next-auth/client";

const useStyles = makeStyles(SignInRegisterStyle);
const SignInRegistration = ({ providers }) => {
    const classes = useStyles();
    //Tab Switcher
    const [TabSwitcher, setTabSwitcher] = useState(true);

    return(
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
            {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        );
      })}
          </div>
        </Container>
      </section>
    )
}
export default SignInRegistration;

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/admin/dashboard" },
    };
  }

  return {
    props: {
      providers: await providers(context),
      csrfToken: await csrfToken(context),
    },
  };
}