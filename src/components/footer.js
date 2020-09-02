import React from 'react'
import Typography from "@material-ui/core/Typography"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { IconButton, Button, Grid, makeStyles } from '@material-ui/core';
import theme from '../styles/global';


const Footer = (props) => {
    function Copyright() {
        return (
            <Typography variant="body2" color="primary" align="center">
                {'Copyright © '}
                {new Date().getFullYear()}
                {' Mark Chen'}
            </Typography>
        );
    };
    const useStyles = makeStyles(() => {
        return {
            container: {
                backgroundColor: theme.palette.common.black,
                padding:"5%"
            }
        };
    });
    const classes = useStyles();
    return (

        <Grid container xs={12} sm={12} md={12} justify="center" alignItems="center" className={classes.container} direction="row">
            <Grid container  xs={12} sm={12} md={12} justify="center" alignItems="center" >
                <IconButton href="https://ca.linkedin.com/in/markchen8717"> 
                    <LinkedInIcon color="primary" fontSize="large" />
                </IconButton>
                <IconButton href="https://github.com/markchen8717">
                    <GitHubIcon color="primary" />
                </IconButton>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Copyright />
            </Grid>
        </Grid>
    );
};
export default Footer;