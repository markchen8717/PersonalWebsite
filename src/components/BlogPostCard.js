import React from "react";
import { Card, Typography, CardActionArea, CardMedia, CardContent, makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    media: {
        height: 200,
    },
});
export default function BlogPostCard(props) {
    const classes = useStyles();
    return (
        <Card >
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <b>
                            Heading
                        </b>
                    </Typography>
                    <Typography>
                        This is a media card. You can use this section to describe the content.
                        This is a media card. You can use this section to describe the content.
                        
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};