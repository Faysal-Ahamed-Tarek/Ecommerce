import theme from "./../../pages/theme";
export const MainMenuStyle = {
  MainMenu: {
    backgroundColor: "white",
    borderTop: "1px solid #e1e1e1",
    borderBottom: "1px solid #e1e1e1",
  },
  Container: {
    maxWidth: "95%",
  },
  Catergory:{
    padding:"15px 10px",
    backgroundColor:"black",
    color:"white",
    fontWeight:600
  },
  Call: {
    color: theme.palette.primary,
    fontSize: "16px",
  },
  ListItem: {
    listStyle: "none",
    float: "left",
    paddingRight: "10px",
  },
  Item: {
    fontWeight: 600,
    textDecoration: "none",
    fontSize: "17px",
    marginRight:"15px",
    color: "#6d28d9",
    padding:"14px 0px",
    display:"block",
    "&:hover": {
      color: "#6d28d9",
    },
    transition: "0.5s",
  },
  [theme.breakpoints.down("sm")]: {
    MainMenu: {
      display: "none",
    },
  },
};
