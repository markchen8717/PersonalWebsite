import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BlogCard from '../components/BlogCard'
import Footer from '../components/footer'
import { graphql } from 'gatsby'

const useStyles = makeStyles((theme) => {
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
            maxHeight:200,
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
    const posts = props.data.allContentfulBlogPost.edges.map((edge,index) => {
        return {
            blogTitle:edge.node.blogTitle,
            postTitle: edge.node.postTitle,
            postDescription: edge.node.postDescription.postDescription,
            postImage: edge.node.postImage.fluid,
            postSlug: props.path+"/"+edge.node.postTitle.replace(/\s+/g, '-').toLowerCase(),
            key:index,
        };
    });
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
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
        </React.Fragment>
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