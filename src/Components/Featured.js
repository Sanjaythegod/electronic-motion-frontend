import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Product from "./Product";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';   


export default function Featured() {
    return(
        <div style={{
            marginLeft: '300px',
            marginRight: '300px',
            marginTop:'50px'

        }}>
            <Typography variant="h4" style={{
                color: 'white',
                marginBottom: '30px'
            }}>
                Featured Products:
            </Typography>
            <Product />
            <Grid container style={{
                marginTop: '50px'
            }}>
                <Grid item xs={10}></Grid>
                <Grid item xs={1}>
                    <IconButton>
                        <InstagramIcon style={{color:'white'}} />
                    </IconButton>
                </Grid>
                <Grid item xs={1}>
                    <IconButton>
                        <FacebookIcon style={{color:'white'}} />
                    </IconButton>
                </Grid>

            </Grid>

        </div>
    )
}