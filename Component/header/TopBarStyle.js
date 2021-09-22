import theme from '../../theme';

export const TopbarStyle = {
    TopBar:{
        backgroundColor: 'white',
        padding:"10px 0px"
    },
    Container:{
        maxWidth:"96%"
    },
    [theme.breakpoints.down('xs')]: {
        TopBar:{
            display: 'none',
        }
    },
    ListItem:{
        padding:"0px 10px"
    }
}