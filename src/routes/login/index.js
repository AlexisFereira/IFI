import React, {useRef, useState} from "react";
import styled from "@emotion/styled";
import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import {Link,withRouter} from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import {animated, useTransition} from "react-spring";
import { Formik } from 'formik';
import * as Yup from 'yup';



const Container = styled(Box)`
    width:100%;
    flex:1 0 70%
`;

const LoginSchema = Yup.object().shape({
    pass: Yup.string()
        .required('Debe ingresar una contraseña.'),
    email: Yup.string()
        .email('Correo no válido.')
        .required('Debe ingresar un correo.'),
});

const recoverSchema = Yup.object().shape({
    email: Yup.string()
        .email('Correo no válido.')
        .required('Debe ingresar un correo.'),
});


function Login(props) {

    let [recover,Setrecover] = useState(false);

    let TheForm = useRef(null);
    let Therecover = useRef(null);

    let Transitions = useTransition(recover,k=>k,{
        initial:{
            opacity:0,
            transform:recover ? "translateX(50%)" : "translateX(0)"
        },
       from:{
           opacity:0,
           transform:recover ? "translateX(50%)" : "translateX(-50%)"
       },
       enter:{
           opacity:1,
           transform:"translateX(0)"
       },
       leave:{
           position:"absolute",
           opacity:0,
           transform:recover ? "translateX(-50%)" : "translateX(50%)"
       }
    });

    let sections = {
        0: ()=>
            <Formik
                validationSchema={LoginSchema}
                initialValues={{
                    email:"",
                    pass:""
                }}
                onSubmit={ values =>{
                    console.log(values)
                }}
            >
                {({errors, touched,handleChange,values,handleSubmit}) => (
                    <Grid container direction={"row"} justify={"center"} alignItems={"center"}>
                        <Grid item xs={12} sm={8} md={6} lg={4}>
                            <Paper elevation={3}>
                                <Box px={[0, 2, 3]}>
                                    <form ref={TheForm} onSubmit={e =>{
                                        e.preventDefault();
                                        handleSubmit()
                                    }}>
                                        <Box pt={3} color={"text.secondary"}>
                                            <Typography variant={"h5"} align={"center"}>
                                                Inicio de sesión
                                            </Typography>
                                        </Box>
                                        <Box px={2} pt={3}>
                                            <TextField
                                                variant={"outlined"}
                                                label={"Usuario"}
                                                fullWidth
                                                name={"email"}
                                                value={values.email}
                                                error={(errors.email && touched.email) && errors.email}
                                                helperText={(errors.email && touched.email) && errors.email}
                                                onChange={handleChange}
                                            />
                                        </Box>
                                        <Box px={2} pt={3}>
                                            <TextField
                                                type={'password'}
                                                variant={"outlined"}
                                                label={"Contraseña"}
                                                fullWidth
                                                name={"pass"}
                                                value={values.pass}
                                                error={(errors.pass && touched.pass) && errors.pass}
                                                helperText={(errors.pass && touched.pass) && errors.pass}
                                                onChange={handleChange}
                                            />
                                        </Box>
                                        <Box px={4} pt={3}>
                                            <Button
                                                size={"large"}
                                                color={"primary"}
                                                fullWidth
                                                variant={"contained"}
                                                onClick={()=>{
                                                TheForm.current.dispatchEvent(new Event("submit"))
                                                }}
                                                disabled={(errors.pass && touched.pass) && errors.pass}
                                            >
                                                Inciar sesión
                                            </Button>
                                            <Box py={2} align={"center"} color={"text.primary"}>
                                                <Link py={2} onClick={() => Setrecover(true)}>
                                                    <small>Recuperar contraseña</small>
                                                </Link>
                                            </Box>
                                            <Divider/>
                                        </Box>
                                        <Box px={4} py={3} color={"text.secondary"}>
                                            <Typography variant={"subtitle1"} align={"center"}>
                                                ¿Aún no posse una cuenta?
                                            </Typography>
                                            <Box pt={1}>
                                                <Button
                                                    onClick={() => history.push("/register")}
                                                    size={"large"}
                                                    color={"primary"}
                                                    fullWidth
                                                    variant={"outlined"}
                                                >
                                                    Registrarme
                                                </Button>
                                            </Box>
                                        </Box>
                                    </form>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                )}
            </Formik>,
        1:()=>
            <Formik
                validationSchema={LoginSchema}
                initialValues={{
                    email:"",
                }}
                onSubmit={ values =>{
                    console.log(values)
                }}
            >
                {({errors, touched, handleChange, values, handleSubmit}) => (
                    <Grid container direction={"row"} justify={"center"} alignItems={"center"}>
                        <Grid item xs={12} sm={8} md={6} lg={4}>
                            <Paper elevation={3}>
                                <form ref={Therecover} onSubmit={e=>{
                                    e.preventDefault();
                                    handleSubmit()
                                }}>
                                <Box p={[3, 3, 4]} color={"text.secondary"}>
                                    <Typography variant={"h5"} align={"center"}
                                    >
                                        Recuperar contraseña
                                    </Typography>
                                    <Box fontSize={14} pt={1} pb={3} color={"text.secondary"} align={"center"}>
                                        Le enviaremos un enlace a su correo electrónico para que pueda reestablecer su
                                        nueva contraseña.
                                    </Box>
                                    <Box>
                                        <TextField
                                            fullWidth
                                            variant={"outlined"}
                                            label={"Correo electrónico"}
                                            name={"email"}
                                            onChange={handleChange}
                                            value={values.email}
                                            helperText={(errors.email && touched.email )&& errors.email}
                                            error={(errors.email && touched.email )&& errors.email}
                                        />
                                    </Box>
                                    <Box p={3}>
                                        <Button
                                            size={"large"}
                                            variant={"contained"}
                                            fullWidth
                                            disabled={(errors.email && touched.email )&& errors.email}
                                            onClick={()=>{
                                                Therecover.current.dispatchEvent(new Event("submit"))
                                            }}
                                            color={"primary"}>

                                            Recuperar contraseña
                                        </Button>
                                    </Box>
                                    <Box align={"center"} color={"text.primary"}>
                                        <Link onClick={() => Setrecover(false)}>
                                            <Icon fontSize={"small"}
                                                  style={{verticalAlign: "middle"}}>keyboard_backspace
                                            </Icon>
                                            Volver
                                        </Link>
                                    </Box>
                                </Box>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                )}
            </Formik>
    };

    let {history} = props;

    return (
        <Container py={5} display={"flex"} flexDirection={"column"} justifyContent={["flex-start","","center"]}>
            {Transitions.map(({item,props,key})=>{
                let Section = item ? sections[1] : sections[0];
                return(
                    <animated.div style={{...props,width:"100%"}} key={item}>
                        <Section/>
                    </animated.div>
                )
            })}
        </Container>
    )
};

export default withRouter(Login);
