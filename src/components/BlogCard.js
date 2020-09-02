import React from "react";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import Img from "gatsby-image";
import { ThemeProvider } from '@material-ui/core';
import theme from '../styles/global';

export default function BlogCard(props) {
    const useStyles = makeStyles(() => {
        return {

        };
    });

    const classes = useStyles();
    
    return (
        <ThemeProvider theme={theme}>
            <Link to={props.slug} style={{ textDecoration: "none" }}>
                <CardActionArea style={{ height: '100%' }}>
                    <Card style={{ height: '100%'}}>

                        <div style={{ marginTop: "5%", marginBottom: "5%", marginRight: "30%", marginLeft: "30%"}}>
                            <Img
                                fluid={props.image}
                                objectFit='cover'
                            />
                        </div>
                        <div style={{ paddingLeft: "20%", paddingRight: "20%", marginBottom: "5%" }}>
                            <Typography gutterBottom variant="h6" align="center" style={{ lineHeight: "115%" }}>
                                <b>
                                    {props.title}
                                </b>
                            </Typography>
                        </div>
                        <div style={{ paddingLeft: "8%", paddingRight: "8%", marginTop: "5%", marginBottom:"5%"}}>
                            <Typography align="center" style={{ lineHeight: "115%" }} color='textSecondary'>
                                {props.description}
                            </Typography>
                        </div>
                    </Card>
                </CardActionArea>
            </Link>
        </ThemeProvider >
    );
};