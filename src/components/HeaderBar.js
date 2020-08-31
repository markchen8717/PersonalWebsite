import React from 'react';
import { Slide, AppBar, Button, useScrollTrigger, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => {
    return {
        default: {
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
        },
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
    const classes = useStyles();
    return (
        <HideOnScroll>
            <AppBar className={(props.style !== undefined) ? props.style : classes.default}>
                <div>
                    <Button color="inherit">Mark</Button>
                </div>
                <div>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Services</Button>
                    <Button color="inherit">Projects</Button>
                    <Button style={{ border: "4px solid", borderColor: "#2CB2FF", color: "#2CB2FF" }} variant="outlined"><b>Let's Chat!</b></Button>
                </div>
            </AppBar>
        </HideOnScroll>);
}
export default HeaderBar;