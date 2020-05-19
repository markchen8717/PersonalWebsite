import React from "react";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import Img from "gatsby-image";

const useStyles = makeStyles({
    media: {
        height: 200,
    },
});
export default function BlogCard(props) {
    const classes = useStyles();
    return (
        <Link to={props.slug} style={{ textDecoration: "none" }}>
            <Card >
                <CardActionArea>
                    {/* <CardMedia
                        className={(props.cardMediaClass !== undefined) ? props.cardMediaClass : classes.media}
                        image={props.image}
                        title={props.title}
                    /> */}
                    <Img
                        className={(props.cardMediaClass !== undefined) ? props.cardMediaClass : classes.media} 
                        fluid={props.image} 
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <b>
                                {props.title}
                            </b>
                        </Typography>
                        <Typography>
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};