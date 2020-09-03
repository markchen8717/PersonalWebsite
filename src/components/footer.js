import React from 'react'
import Typography from "@material-ui/core/Typography"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { IconButton, Grid, makeStyles} from '@material-ui/core';
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
                padding: "5%",
            },
        };
    });
    const classes = useStyles();
    return (

        <Grid container justify="center" alignItems="center" className={classes.container} direction="row">
            <Grid item xs={12}>
                <Grid container justify="center" alignItems="center" >
                    <IconButton href="https://ca.linkedin.com/in/markchen8717">
                        <LinkedInIcon color="primary" fontSize="large" />
                    </IconButton>
                    <IconButton href="https://github.com/markchen8717">
                        <GitHubIcon color="primary" />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Copyright />
            </Grid>
        </Grid>
    );
};
export default Footer;