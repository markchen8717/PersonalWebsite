import React from 'react';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import { graphql } from 'gatsby';
import theme from '../styles/global';
import {ThemeProvider,Container,makeStyles,Typography,Grid,CssBaseline} from '@material-ui/core';
import HeaderBar from '../components/HeaderBar';


const useStyles = makeStyles(() => {
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
            maxHeight: 200,
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

export default function BlogPage(props) {
    // console.log(props);
    const posts = props.data.allContentfulBlogPost.edges.map((edge, index) => {
        return {
            blogTitle: edge.node.blogTitle,
            postTitle: edge.node.postTitle,
            postDescription: edge.node.postDescription.postDescription,
            postImage: edge.node.postImage.fluid,
            postSlug: props.path + "/" + edge.node.postTitle.replace(/\s+/g, '-').toLowerCase(),
            key: index,
        };
    });
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HeaderBar/>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            {props.pageContext.blogTitle}
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            {props.pageContext.blogDescription}
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
                        justify="center"
                        alignItems="flex-start"
                        // style={{ backgroundColor: 'green' }}
                        spacing={4}
                    >
                        {
                            posts.map((post) => (
                                <Grid item xs={12} sm={6} md={4} key={post.key}
                                // style={{ backgroundColor: 'purple' }}
                                >
                                    <BlogCard
                                        cardMediaClass={classes.cardMedia}
                                        image={post.postImage}
                                        title={post.postTitle}
                                        description={post.postDescription}
                                        slug={post.postSlug}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </main>
            <Footer className={classes.footer} />
        </ThemeProvider>
    );
};

export const pageQuery = graphql`
query($blogTitle: String!){
    allContentfulBlogPost(filter: { blogTitle: { eq: $blogTitle } }){
		edges{
            node{
                blogTitle
                postTitle
                postImage{
                    fluid{
                        ...GatsbyContentfulFluid
					}
                }
                postDescription{
                    postDescription
                }
            }
        }
    }
}
`;