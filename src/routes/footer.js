import React from "react";
import {Box, Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import styled from "@emotion/styled";


const FooterS =styled(Box)`
    background: #f1f1f2;
    width:100%;
    flex: 0 0 60px;
    color:#3a3a3a;
`

function Footer() {
    return (
        <FooterS py={2}>
            <Container>
                <Grid container >
                    <Grid item xs={12} md={6}>
                        <Box fontWeight={500} variant={""} component={"p"}>
                            Instituto Francés de Idiomas
                        </Box>
                        <Typography component={"small"} color={"text.primary"}>Todos los derechos reservados. 2020</Typography>
                    </Grid>
                </Grid>
            </Container>
        </FooterS>
    )
}

export default Footer;
