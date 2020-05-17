import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import BlogPostCard from '../components/BlogPostCard'
import Footer from '../components/footer'

const useStyles = makeStyles((theme) => {
    console.log("default", theme);
    return {
        icon: {
            marginRight: theme.spacing(2),
        },
        heroContent: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(8, 0, 6),
        },
        heroButtons: {
            marginTop: theme.spacing(4),
        },
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        },
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        cardMedia: {
            paddingTop: '56.25%', // 16:9
        },
        cardContent: {
            flexGrow: 1,
        },
        footer: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(6),
        },
    };
});

const data = {
    blogTitle: "Blog Title",
    blogDescription: "Blog description",
    blogPosts: [
        {
            postTitle:"",
            postDescription:"",
            postSlug:"",
            // postImage
        },
    ]
};

export default function Blog() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Album layout
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Something short and leading about the collection below—its contents, the creator, etc.
                            Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                            entirely.
                        </Typography>
                    </Container>
                </div>
                {/* End hero unit */}
                <Container
                    className={classes.cardGrid}
                // maxWidth="md" 
                // style={{ backgroundColor: "green" }}
                >
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                        // style={{ backgroundColor: 'green' }}
                        spacing={4}
                    >
                        <Grid item xs={12} sm={6} md={4}
                        // style={{ backgroundColor: 'purple' }}
                        >
                            <BlogPostCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}
                        // style={{ backgroundColor: 'gray' }}
                        >
                            <BlogPostCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}
                        // style={{ backgroundColor: 'orange' }}
                        >
                            <BlogPostCard />
                        </Grid>
                    </Grid>
                </Container>
            </main>
            <Footer className={classes.footer} />
        </React.Fragment>
    );
};