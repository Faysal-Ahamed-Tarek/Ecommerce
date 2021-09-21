import React from "react";
import { SignInStyle } from "./SigninStyle";
import { makeStyles } from "@material-ui/core/styles";
import {
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  TextField,
  OutlinedInput,
  Button,
  Input,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import clsx from "clsx";

const useStyles = makeStyles(SignInStyle);

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //Material Ui Style clsses
  const classes = useStyles();

  //Sign In Form
  const [SignInFormValue, setSignInFormValue] = React.useState({
    Gmail: "",
    Password: "",
  });

  //Password Type Switcher
  const [PassWordType, setPassWordType] = React.useState(false);

  //Sign In Form Update
  const FieldUpdate = (e) => {
    setSignInFormValue({ ...SignInFormValue, [e.target.name]: e.target.value });
  };

  //password Type Changer
  const PasswordTypeChanger = () => {
    setPassWordType(!PassWordType);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //Sign In Form Submit
  const SignInForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <form className={classes.Form} onSubmit={handleSubmit(SignInForm)} method="POST">
        <TextField
          id="standard-search"
          label="Gmail"
          type="search"
          variant="outlined"
          name="Gmail"
          {...register("Gmail",{ required: true})}
          size="small"
          className={classes.Input}
          onChange={FieldUpdate}
          value={SignInFormValue.Gmail}
        />
        <FormControl variant="outlined" className={classes.InputContainer}>
          <InputLabel
            htmlFor="outlined-adornment-password"
            classes={{ outlined : classes.passwordLabel}}
          >
            Password
          </InputLabel>
          <OutlinedInput
          {...register("Password")}
            labelWidth={90}
            classes={{ input: classes.passwordInput }}
            name="Password"
            id="outlined-adornment-password"
            type={PassWordType ? "text" : "password"}
            value={SignInFormValue.Password}
            onChange={FieldUpdate}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={PasswordTypeChanger}
                  onMouseDown={handleMouseDownPassword}
                >
                  {PassWordType ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.SubmitBtn}
        >
          Login
        </Button>
      </form>
    </>
  );
};
export default SignIn;
