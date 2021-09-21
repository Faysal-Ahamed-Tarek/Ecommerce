import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/dist/client/router";
import NewProduct from './../New Product/NewProduct';
import Dashboard from './../Dashboard/Dashboard';
import AllProduct from './../All Products/AllProduct';

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
}))

export default function DashBoardContent(){
    const classes = useStyles();
    const router = useRouter();
    return(
        <>
        <main className={classes.content}>
        <div className={classes.toolbar} />
        {router.asPath === "/admin/new-product" && <NewProduct />}
        {router.asPath === "/admin/dashboard" && <Dashboard />}
        {router.asPath === "/admin/all-product" && <AllProduct />}        
      </main>
        </>
    )
}