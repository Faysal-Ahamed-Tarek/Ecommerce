import theme from './../../pages/theme';

export const HeaderStyle = {

  Drawer: {
    width: "83%",
    margin: "auto",
    padding: "20px 20px 0px 20px",
  },
  SearchContainer: {
    position: "relative",
    textAlign: "center",
  },
  SearchBtn: {
    position: "absolute",
    cursor: "pointer",
    top: "10%",
    right: "2%",
    backgroundColor: "#6D28D9",
    outline: "none",
    border: "none",
    color: "white",
    padding: "9px 18px",
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: "Montserrat",
    borderRadius: "8px",
  },
  [theme.breakpoints.down("sm")]: {
    SearchBtn: {
        right: "1%"
    },
  },
  SearchInput: {
    width: "100%",
    margin: "auto",
    padding: "13px 110px 14px 20px",
    outline: "none",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    fontFamily: "montserrat",
    fontWeight: 500,
  },
};
