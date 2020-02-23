import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function RecoverPass() {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            flex={"1 0 70%"}
            justifyContent={["flex-start","center"]}
        >
            <Grid container dierection={"row"} justify={"center"}>
                <Grid item  xs={12} sm={8} md={6} lg={"4"} >
                    <Box px={[0,2,3,4]}>
                        <Box color={"text.secondary"} pt={4}>
                            <Typography variant={"h5"} align={"center"}>
                                Reestablecer nueva contraseña
                            </Typography>
                        </Box>
                        <Box pt={3}>
                            <TextField
                                variant={"outlined"}
                                fullWidth
                                label={"Nueva contraseña"}
                            />
                        </Box>
                        <Box pt={3}>
                            <TextField
                                variant={"outlined"}
                                fullWidth
                                label={"Confirmar contraseña"}
                            />
                        </Box>
                        <Box pt={3} pb={5}>
                            <Button
                                fullWidth
                                variant={"contained"}
                                size={"large"}
                                color={"primary"}
                            >
                                Reestablecer contraseña
                            </Button>
                        </Box>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
};

export default RecoverPass;
