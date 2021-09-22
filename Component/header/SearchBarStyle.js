import theme from '../../theme';

export const SearchBarStyle = {
  Container: {
    maxWidth: "96%",
  },
  [theme.breakpoints.down("xs")]: {
    Container: {
      maxWidth: "100%",
    },
  },
  SearchBar: {
    backgroundColor: "#6d28d9",
    padding: "5px 0px 5px 0px",
  },
  [theme.breakpoints.down("sm")]: {
    SearchBar: {
      display: "none",
    },
  },
  SearchInput: {
    width: "99.50%",
    margin: "auto",
    padding: "13px 110px 14px 20px",
    outline: "none",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    fontFamily: "Maven Pro",
    fontWeight: 500,
  },
  SearchContainer: {
    position: "relative",
    textAlign: "center",
  },
  SearchBtn: {
    position: "absolute",
    cursor: "pointer",
    top: "11%",
    right: "1%",
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
  MbleNav: {
    backgroundColor: "white",
    padding: "10px 0px",
    borderBottom: "1px solid #e1e1e1",
  },
  [theme.breakpoints.up("md")]: {
    MbleNav: {
      display: "none",
    },
  },
  [theme.breakpoints.down("xs")]: {
    SearchBtn: {
      display: "none !important",
    },
  },
};
