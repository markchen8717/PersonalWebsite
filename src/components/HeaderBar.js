import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Slide, AppBar, Button, useScrollTrigger, makeStyles, Typography } from '@material-ui/core';
import logo from "../images/Mark_logo.png"
const useStyles = makeStyles(() => {
    return {
        container: {
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingRight: "50px",
            paddingLeft: "50px",
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
            textTransform: 'none',
            '& Button': {
                textTransform: 'none'

            },
            '& AnchorLink': {
                textTransform: 'none',
                textDecoration: 'none',

            },
        },
        links: {
            boxShadow: 'none',
            textTransform: 'none',
            textDecoration: 'none',
            '& Button': {
                color: "#262626"
            }
        }
    };
});

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const HeaderBar = (props) => {
    console.log(props)
    const classes = useStyles();
    return (
        <HideOnScroll>
            <AppBar className={classes.container}>
                <div>
                    <AnchorLink to="/" className={classes.links}>
                        <img src={logo} style={{ width: "40px", height: "40px" }} />
                    </AnchorLink>
                </div>
                <div>
                    <AnchorLink to="/#about" className={classes.links}>
                        <Button color="inherit" >
                            <Typography>
                                About
                            </Typography>
                        </Button>
                    </AnchorLink>
                    <AnchorLink to="/#services" className={classes.links} >
                        <Button color="inherit">
                            <Typography>
                                Services
                            </Typography>
                        </Button>
                    </AnchorLink>
                    <AnchorLink to="/#projects" className={classes.links}>
                        <Button color="inherit">
                            <Typography>
                                Projects
                            </Typography>
                        </Button>
                    </AnchorLink>
                    <AnchorLink to="/#contact" className={classes.links}>
                        <Button style={{ border: "4px solid", borderColor: "#2CB2FF", color: "#2CB2FF" }} variant="outlined">
                            <Typography>
                                <b>Let's Chat!</b>
                            </Typography>
                        </Button>
                    </AnchorLink>
                </div>
            </AppBar>
        </HideOnScroll>);
}
export default HeaderBar;
