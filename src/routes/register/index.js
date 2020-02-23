import React, {Fragment, useRef} from "react";
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import styled from "@emotion/styled";
import { withRouter } from "react-router";
import * as Yup from "yup";
import {Formik} from "formik";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}));

const Hola = styled(Grid)`
    text-align:center;
    
    @media all and (min-width: 900px){
        position:sticky;
        top:calc(50% - 5vh);
        min-height:10vh;
    }
`;

const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Debe ingresar al menos 3 caracteres.")
        .required('Debe ingresar almenos un nombre.'),
    surname: Yup.string()
        .min(3, "Debe ingresar al menos 3 caracteres.")
        .required('Debe almenos un apellido.'),
    typedoc: Yup.string()
        .required('Seleccione un tipo de documento.'),
    docNumber: Yup.string()
        .min(5,'Número no válido.')
        .required('Debe ingresar un número de doc.'),
    age: Yup.string()
        .required('Debe seleccionar una edad.'),
    citisen: Yup.string()
        .min('Debe ingresar almenos 5 caracteres.')
        .required('Debe seleccionar una edad.'),
    email: Yup.string()
        .email('Correo no válido.')
        .required('Debe ingresar un correo.'),
});

function Register(props) {

    let theRegister = useRef(null);

    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = event => {
        setAge(event.target.value);
    };

    let {history} = props;



    return (
        <Fragment>
            <Formik
                validationSchema={RegisterSchema}
                initialValues={{
                    email:"",
                    pass:""
                }}
                onSubmit={ values =>{
                    console.log(values)
                }}
            >
                {({errors, touched,handleChange,values,handleSubmit}) => (
            <Grid container justify={"center"} direction={"row"} alignItems={"flex-start"}>
                <Hola item  xs={12} md={4} lg={5}>
                    <h1>Instituto frances de idiomas</h1>
                </Hola>
                <Grid item xs={12} sm={10} md={6} lg={5} xl={4}>
                    <Box p={[2, 3]}>
                        <Box textAlign={"center"} py={4}>
                            <Typography variant={"h4"} >
                                Registro para nuevos usuarios
                            </Typography>
                            <Typography color="textSecondary" variant="subtitle1">
                                Complete los siguientes campos prara realizar su registro
                            </Typography>
                        </Box>
                        <form>
                            <Grid container display={"flex"} spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField flex={"1 0 100%"} label="Nombres" variant="outlined" fullWidth/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField xs={12} md={6} label="Apellidos" variant="outlined" fullWidth/>
                                </Grid>
                                <Grid item xs={5} sm={4}>

                                    <FormControl variant="outlined" fullWidth>
                                        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                                            Tipo de doc.
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={age}
                                            onChange={handleChange}
                                            labelWidth={labelWidth}
                                        >
                                            <MenuItem value={10}>Cédula de Ciudadanía</MenuItem>
                                            <MenuItem value={20}>Pasaporte</MenuItem>
                                            <MenuItem value={30}>Cédula de extrangería</MenuItem>
                                        </Select>
                                    </FormControl>

                                </Grid>
                                <Grid item xs={7} sm={5}>
                                    <TextField label="Número de doc." variant="outlined" fullWidth/>
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <FormControl variant="outlined" fullWidth>
                                        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                                          Edad
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={age}
                                            onChange={handleChange}
                                            labelWidth={labelWidth}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField label="Nacionalidad" variant="outlined" fullWidth/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl variant="outlined" fullWidth>
                                        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                                            Estado civíl
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={age}
                                            onChange={handleChange}
                                            labelWidth={labelWidth}
                                        >
                                            <MenuItem value={"Soltero"}>Soltero(a)</MenuItem>
                                            <MenuItem value={"Casado"}>Casado(a)</MenuItem>
                                            <MenuItem value={"Viudo"}>Viudo(a)</MenuItem>
                                            <MenuItem value={"Union libre"}>Unión libre</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Dirección" variant="outlined" fullWidth/>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField label="Teléfono" variant="outlined" fullWidth/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField label="Correo electrónico" variant="outlined" fullWidth/>
                                </Grid>


                                <Grid item xs={12}>
                                    <Divider/>
                                </Grid>

                                <Grid item xs={12}>
                                    Información del Representante
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControl variant="outlined" fullWidth>
                                        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                                            Parentesco
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={age}
                                            onChange={handleChange}
                                            labelWidth={labelWidth}
                                        >
                                            <MenuItem value={"Soltero"}>Madre</MenuItem>
                                            <MenuItem value={"Casado"}>Padre</MenuItem>
                                            <MenuItem value={"Casado"}>Abuelo(a)</MenuItem>
                                            <MenuItem value={"Viudo"}>Tio(a)</MenuItem>
                                            <MenuItem value={"Viudo"}>Hermano(a)</MenuItem>
                                            <MenuItem value={"Viudo"}>Primo(a)</MenuItem>
                                            <MenuItem value={"Viudo"}>Amigo(a)</MenuItem>
                                            <MenuItem value={"Viudo"}>Otro</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField label="Nombre y apellido" variant="outlined" fullWidth/>
                                </Grid>

                                <Grid item xs={12}>
                                    {/*<TextField label={"Número de contacto"} variant={"outlined"} fullWidth  />*/}

                                    <FormControl  variant="outlined" fullWidth>
                                        <InputLabel htmlFor="outlined-adornment-password">Número de contacto</InputLabel>
                                        <OutlinedInput
                                            varia
                                            id="filled-adornment-weight"
                                            value={values.weight}
                                            onChange={handleChange('weight')}
                                            startAdornment={<InputAdornment position="end">+59</InputAdornment>}
                                            aria-describedby="filled-weight-helper-text"
                                            inputProps={{
                                                'aria-label': 'weight',
                                            }}
                                            labelWidth={150}
                                        />
                                        <FormHelperText id="filled-weight-helper-text">

                                        </FormHelperText>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField label={"Observaciones"} variant={"outlined"} rows={3} fullWidth  multiline/>
                                </Grid>

                                <Grid item xs={12}>
                                    <Divider/>
                                </Grid>

                                <Grid item xs={12}>
                                    Datos de acceso
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField label={"Contraseña"} variant={"outlined"} fullWidth  />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField label={"Confirma contraseña"} variant={"outlined"} fullWidth  />
                                </Grid>




                            </Grid>
                            <Box pt={5}>
                                <Grid container justify={"center"} direction={"row"}>
                                    <Grid item xs={12} sm={8}>
                                        <Button size={"large"} fullWidth variant={"contained"} color={"primary"}>Registrarme</Button>
                                    </Grid>
                                </Grid>
                            </Box>

                        </form>

                    </Box>
                    <Divider/>
                    <Box pt={3} pb={5}>
                        <Box pb={2} color="text.secondary">
                            <Typography variant={"subtitle1"} align={"center"} pb={2}>
                                ¿Ya posee una cuenta?
                            </Typography>
                        </Box>
                        <Grid container direction={"row"} justify={"center"}>
                            <Grid item xs={12} sm={7}>
                                <Button
                                    size={"large"}
                                    fullWidth
                                    variant={"outlined"}
                                    color={"primary"}
                                    onClick={()=> history.push("/login")}
                                > Iniciar sesión </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
                    )}
            </Formik>
        </Fragment>
    )
};

export default withRouter(Register);
