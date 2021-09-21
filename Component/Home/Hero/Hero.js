import { HeroSectionStyle } from "./HeroStyle";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const useStyles = makeStyles(HeroSectionStyle);

const HeroSection = () => {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className={classes.HeroSection}>
        <Container maxWidth="lg" className={classes.Container}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item lg={3}>
              <div className={classes.CatergorySidebar}>
                item
              </div>
            </Grid>
            <Grid item lg={9} xs={12}>
              <Slider {...settings}>
                <div>
                  <Grid
                    container
                    className={classes.SliderContainer}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid list lg={4} xs={12}>
                      <p className={classes.SliderTitle}>Swivel<span style={{color:"#6D28D9",fontSize:"30px"}}> wooden </span> Custom Chair</p>
                      <span>Easy to pair with a variety of outfits.</span><br/><br/>
                      <button className={classes.ShopNow}>Shop now</button>
                    </Grid>
                    <Grid list lg={8} xs={12}>
                      <div className={classes.SliderImage}>
                      <Image
                        src="/images/chair.png"
                        width={250}
                        height={350}
                        alt="slider img"
                      />
                      </div>
                    </Grid>
                  </Grid>
                </div>


                <div>
                  <Grid
                    container
                    className={classes.SliderContainer}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid list lg={4} xs={12}>
                      <p className={classes.SliderTitle}>Swivel<span style={{color:"#6D28D9",fontSize:"30px"}}> wooden </span> Custom Chair</p>
                      <span>Easy to pair with a variety of outfits.</span><br/><br/>
                      <button className={classes.ShopNow}>Shop now</button>
                    </Grid>
                    <Grid list lg={8} xs={12}>
                      <div className={classes.SliderImage}>
                      <Image
                        src="/images/chair.png"
                        width={250}
                        height={350}
                        alt="slider img"
                      />
                      </div>
                    </Grid>
                  </Grid>
                </div>

                <div>
                  <Grid
                    container
                    className={classes.SliderContainer}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid list lg={4} xs={12}>
                      <p className={classes.SliderTitle}>Swivel<span style={{color:"#6D28D9",fontSize:"30px"}}> wooden </span> Custom Chair</p>
                      <span>Easy to pair with a variety of outfits.</span><br/><br/>
                      <button className={classes.ShopNow}>Shop now</button>
                    </Grid>
                    <Grid list lg={8} xs={12}>
                      <div className={classes.SliderImage}>
                      <Image
                        src="/images/chair.png"
                        width={250}
                        height={350}
                        alt="slider img"
                      />
                      </div>
                    </Grid>
                  </Grid>
                </div>

                <div>
                  <Grid
                    container
                    className={classes.SliderContainer}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid list lg={4} xs={12}>
                      <p className={classes.SliderTitle}>Swivel<span style={{color:"#6D28D9",fontSize:"30px"}}> wooden </span> Custom Chair</p>
                      <span>Easy to pair with a variety of outfits.</span><br/><br/>
                      <button className={classes.ShopNow}>Shop now</button>
                    </Grid>
                    <Grid list lg={8} xs={12}>
                      <div className={classes.SliderImage}>
                      <Image
                        src="/images/chair.png"
                        width={250}
                        height={350}
                        alt="slider img"
                      />
                      </div>
                    </Grid>
                  </Grid>
                </div>


              </Slider>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};
export default HeroSection;
