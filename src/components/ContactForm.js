import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

export default function ContactForm() {
    return (
        <form 
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            autoComplete="off"
        >
            <p style={{ visibility: "hidden" }}>
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <Container
            // style={{ backgroundColor: "blue" }}
            >
                <Grid
                    spacing={1}
                    container direction="column" justify="center" alignItems="center"
                // style={{ backgroundColor: "green" }}
                >
                    <Grid item >
                        <Typography variant="h6" align="center" gutterBottom>
                            Contact Me
                        </Typography>
                    </Grid>
                    <Grid container item direction="row" justify="center" alignItems="center"
                    // style={{ backgroundColor: "purple" }}
                    >
                        <Grid container item xs={12} sm={6}
                        // style={{ backgroundColor: "red" }}
                        >
                            <TextField
                                id="outlined-textarea"
                                label="Name"
                                variant="outlined"
                                style={{ width: "100%" }}
                                type="text"
                                name="name"
                            />
                        </Grid>
                        <Grid container item xs={12} sm={6}
                        // style={{ backgroundColor: "orange" }}
                        >
                            <TextField
                                id="outlined-textarea"
                                label="Email"
                                variant="outlined"
                                type="text"
                                name="email"
                                style={{ width: "100%" }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item justify="center" alignItems="center"
                    // style={{ backgroundColor: "yellow" }}
                    >
                        <Grid container item xs={12}
                        // style={{ backgroundColor: "green" }}
                        >
                            <TextField
                                id="outlined-multiline-static"
                                label="Message"
                                multiline
                                rows={5}
                                variant="outlined"
                                style={{ width: "100%" }}
                                name="message"
                            />
                        </Grid>
                    </Grid>
                    <Grid >
                        <Button variant="contained" color="primary" type="submit" >
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </form>
    );
}
