import {
  Badge,
  Container,
  Grid,
  IconButton,
  withStyles,
} from "@material-ui/core";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { SearchBarStyle } from "./SearchBarStyle";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";

const useStyles = makeStyles(SearchBarStyle);

const SearchBar = (props) => {
  const classes = useStyles();
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      backgroundColor: "white",
      padding: "0 4px",
      color: "#6D28D9",
      fontWeight: 600,
    },
  }))(Badge);

  return (
    <>
      <section className={classes.SearchBar}>
        <Container maxWidth="lg" className={classes.Container}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={2}>
              <div className="">
                <Image
                  src="/images/logo.png"
                  width={120}
                  height={40}
                  passHref
                  alt="logo"
                />
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className={classes.SearchContainer}>
                <input
                  type="text"
                  placeholder="Search By Product Name"
                  className={classes.SearchInput}
                />
                <button className={classes.SearchBtn}>Search</button>
              </div>
            </Grid>

            <Grid item xs={4}>
              <Grid container justifyContent="flex-end" alignItems="center">
                <div style={{marginRight:"-1%"}}>
                  <Link href="/login" passHref>
                    <span style={{ color: "white", cursor: "pointer",fontSize:"16px" }}>
                      Log In | register
                    </span>
                  </Link>
                  <Link href="/login" passHref>
                    <IconButton className={classes.LogInIcon} aria-label="cart">
                      <StyledBadge color="secondary">
                        <AiOutlineUser
                          style={{ color: "white", fontSize: "34px" }}
                        />
                      </StyledBadge>
                    </IconButton>
                  </Link>
                </div>
                <div style={{marginRight:"2%"}}>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FiShoppingCart
                        style={{ color: "white", fontSize: "30px" }}
                      />
                    </StyledBadge>
                  </IconButton>
                </div>
                <div>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart
                        style={{ color: "white", fontSize: "30px" }}
                      />
                    </StyledBadge>
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={classes.MbleNav}>
        <Container maxWidth="lg" className={classes.Container}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={5}>
              <div>
                <Image
                  src="/images/Dashboardlogo.png"
                  width={120}
                  height={40}
                  passHref
                  alt="logo"
                />
              </div>
            </Grid>
            <Grid item xs={7}>
              <Grid container justifyContent="flex-end" alignItems="center">
                <Grid className={classes.Items}>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <AiOutlineUser
                        style={{ color: "#6D28D9", fontSize: "30px" }}
                      />
                    </StyledBadge>
                  </IconButton>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FiShoppingCart
                        style={{ color: "#6D28D9", fontSize: "30px" }}
                      />
                    </StyledBadge>
                  </IconButton>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart
                        style={{ color: "#6D28D9", fontSize: "30px" }}
                      />
                    </StyledBadge>
                  </IconButton>
                </Grid>
                <Grid className={classes.Items}>
                  <MenuIcon
                    onClick={() => props.setMbleMenu(!props.MbleMenu)}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};
export default SearchBar;
