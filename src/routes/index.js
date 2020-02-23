import React, {useEffect} from "react";
import {styled} from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import Login from "./login";
import Register from "./register"

import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import Footer from "./footer";
import RecoverPass from "./recoverPassword";
const Wrapper = styled(Box)({
    minHeight: "100%",
    width: "100%"
});


const  Routes = (props) =>  {

    let path = window.location.pathname;

    useEffect(()=>{
        console.log("actualiza")
    },[window.location]);

    return (

            <Switch>
                <Wrapper display={"flex"} flexDirection={"column"}>
                    {path !== "/register" &&
                    <Box flex={"0 0 50px"} border={1}>
                        este es el header   {path}
                    </Box>
                    }


                          <Route path={"/register"}  render={()=> <Register/>}/>
                          <Route path={"/login"}  render={()=> <Login/>}/>
                          <Route path={"/recoverPass"}  render={()=> <RecoverPass/>}/>

                        <Footer/>
                    </Wrapper>
            </Switch>

)
};

export default withRouter(Routes);
