import { RegisterStyle } from './RegisterStyle';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(RegisterStyle);
const Register = () => {
    const classes = useStyles();
    return(
        <>
        <h1>register</h1>
        </>
    )
}
export default Register;