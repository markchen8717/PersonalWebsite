import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, Button, Typography } from '@material-ui/core';
import theme from '../styles/global'

export default function ContactForm(props) {
    const useStyles = makeStyles(() => {
        return {
            root: {
                backgroundColor: theme.palette.common.black,
            },
            container: {
                padding: "5%",
                paddingLeft: "15%",
                paddingRight: "15%"

            },
            header: {

            }
        }
    });
    const useStylesTextField = makeStyles((theme) => ({
        root: {
            // border: "1px solid #e2e2e1",
            overflow: "hidden",
            borderRadius: 4,
            backgroundColor: "#fcfcfb",
            width: "100%",
            // transition: theme.transitions.create(["border-color", "box-shadow"]),
            "&:hover": {
                backgroundColor: "#fff"
            },
            "&$focused": {
                backgroundColor: "#fff",
                borderColor: theme.palette.primary.main
            }
        },
        focused: {}

    }));
    function MyTextField(props) {
        const classes = useStylesTextField();
        return (
            <TextField InputProps={{ classes, disableUnderline: true }} style={{ width: "100%" }} {...props} />
        );
    }
    console.log(theme.palette.primary.main)
    const classes = useStyles();
    return (
        <Grid item xs={12} className={classes.root}>
            <form
                name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                autoComplete="off"
            >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                    <label>
                        Don’t fill this out: <input name="bot-field" />
                    </label>
                </p>
                <Grid
                    spacing={4}
                    container direction="column" justify="center" alignItems="center" className={classes.container}
                >
                    <Grid className={classes.header}>
                        <Typography align='center' variant='h5' color="secondary">
                            Let's Collab!
                        </Typography>
                        <Typography color="primary" align='center'>
                            Have an idea that you wish to make it come to life?
                    </Typography>
                    </Grid>
                    <Grid container item direction="row" justify="center" alignItems="center" spacing={4}>
                        <Grid container item xs={12} sm={6}>
                            <MyTextField
                                label="Name"
                                variant="filled"
                                id="outlined-textarea"
                                type="text"
                                name="name"
                            />
                        </Grid>
                        <Grid container item xs={12} sm={6}>
                            <MyTextField
                                id="outlined-textarea"
                                label="Email"
                                variant="filled"
                                type="text"
                                name="email"
                            />
                        </Grid>
                    </Grid>

                    <Grid container item xs={12} >
                        <MyTextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={10}
                            variant="filled"
                            name="message"
                        />
                    </Grid>

                    <Grid>
                        <Button type="submit" style={{ border: "4px solid", borderColor: "#2CB2FF", color: "#2CB2FF", textTransform: "none" }} variant="outlined">
                            <Typography>
                                <b>Let's Chat!</b>
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>

    );
}
