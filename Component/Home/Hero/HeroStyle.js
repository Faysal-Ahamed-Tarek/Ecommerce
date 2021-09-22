import theme from '../../../theme';
export const HeroSectionStyle = {

    Container:{
        maxWidth:"96%"
    },
    SliderContainer:{
        padding:"30px 0px 0px 100px",
        backgroundColor:"white",
        borderRadius:"4px",
        backgroundImage:"url(https://image.freepik.com/free-photo/abstract-blur-pastel-beautiful-peach-pink-color-sky-warm-tone-background-design-as-banner-slide-show-others_1258-63756.jpg)",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
    },
    [theme.breakpoints.down('xs')]: {
        SliderContainer: {
            padding:"20px 30px 30px 30px"
        },
      },
    HeroSection:{
        marginTop:"40px"
    },
    CatergorySidebar:{
        backgroundColor:"white",
        padding:"10px 20px",
        borderRadius:"4px",
        height:"100%"
    },
    [theme.breakpoints.down('md')]: {
        CatergorySidebar: {
            display:"none"
        },
      },
    SliderImage:{
        display:"flex",
        alignItem:"center",
        justifyContent:"center"
    },
    SliderTitle:{
        fontSize:"30px",
        fontWeight:500,
        marginBottom:"5px"
    },
    ShopNow:{
        backgroundColor:"#6D28D9",
        padding:"10px 20px",
        border:"none",
        color:"white",
        borderRadius:"8px",
        fontSize:"16px",
        fontFamily:"montserrat",
        cursor:"pointer"
    }
}