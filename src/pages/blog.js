import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BlogCard from '../components/BlogCard';
import Footer from '../components/footer';
import { useStaticQuery, graphql } from 'gatsby';


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
            height: 200,
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

export default function Blog() {
    const classes = useStyles();
    const staticQuery = useStaticQuery(graphql`
    query{
        allContentfulBlog{
            edges{
                node{
                    blogTitle
                    blogDescription{
                        blogDescription
                    }
                    blogImage{
                        fluid{
                            ...GatsbyContentfulFluid
                        }         
                    }
                }
            }
        }
    }
    `)

    const blogs = staticQuery.allContentfulBlog.edges.map((edge, index) => {
        const node = edge.node
        return {
            blogTitle: node.blogTitle,
            blogSlug: "/blog/" + node.blogTitle.replace(/\s+/g, '-').toLowerCase(),
            blogDescription: node.blogDescription.blogDescription,
            blogImage: node.blogImage.fluid,
            key: index,
        }
    });

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
                            My Blogs
                        </Typography>
                        {/* <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Page description
                        </Typography> */}
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
                            blogs.map((blog) => (
                                <Grid item xs={12} sm={6} md={4} key={blog.key}
                                // style={{ backgroundColor: 'purple' }}
                                >
                                    <BlogCard
                                        cardMediaClass={classes.cardMedia}
                                        image={blog.blogImage}
                                        title={blog.blogTitle}
                                        description={blog.blogDescription}
                                        slug={blog.blogSlug}
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