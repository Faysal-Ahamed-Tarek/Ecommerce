import theme from '../../theme';

export const SignInRegisterStyle = {
    Wrapper:{
        backgroundColor:"white",
        maxWidth:"35%",
        margin:"auto",
        marginTop:"8%",
        padding:"10px 20px 20px 20px"
    },
    [theme.breakpoints.down('sm')]: {
        Wrapper: {
            maxWidth:"98%"
        }
      },
    LogInTitle:{
        textAlign:"right",
        fontWeight:600,
        paddingRight:"15px",
        cursor:"pointer",
        color:"#777"
    },
    registerTitle:{
        textAlign:"left",
        fontWeight:600,
        paddingLeft:"15px",
        cursor:"pointer",
        color:"#777"
    },
    activeTab:{
        color:"black"
    }
}