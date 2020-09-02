import { Link, graphql, useStaticQuery } from "gatsby";
import React, { useState, useEffect } from 'react';
import { Slide, AppBar, Button, useScrollTrigger, makeStyles, ThemeProvider, Grid, Container, CssBaseline } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Typing from 'react-typing-animation';
import theme from '../styles/global';
import typingGIF from '../images/typing.gif'
import Img from "gatsby-image";
import BlogCard from '../components/BlogCard';
import HeaderBar from '../components/HeaderBar';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../components/footer";
import ContactForm from '../components/ContactForm'






const Index = (props) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const useStyles = makeStyles(() => {
        return {
            typing: {
                marginTop: "120px",
                '& img': {
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "40%",
                    height: "40%"
                }
            },
            aboutMe: {
                backgroundColor: theme.palette.secondary.main,
            },
            whatIdo: {
                marginTop: "5%",
                paddingLeft: "5%",
                paddingRight: "5%"
            },
            featuredProjects: {
                padding: "5%",
                marginTop: "5%",
                backgroundColor: theme.palette.secondary.main,
            },
            carousel: {
                height: "100%"
            },
            carousel_items: {
                paddingLeft: "2%",
                height: "100%",
            },
            carousel_container: {
                height: "100%",
            },
            contact:{
                padding:"5%",
                backgroundColor:theme.palette.common.black,
            }

        };
    });
    const classes = useStyles();
    console.log(props.data)
    const blogs = props.data.allContentfulBlog.edges.map((edge, index) => {
        const node = edge.node
        return {
            blogTitle: node.blogTitle,
            blogSlug: "/blog/" + node.blogTitle.replace(/\s+/g, '-').toLowerCase(),
            blogDescription: node.blogDescription.blogDescription,
            blogImage: node.blogImage.fluid,
            key: index,
        }
    });
    const posts = props.data.allContentfulBlogPost.edges.map((edge, index) => {
        return {
            blogTitle: edge.node.blogTitle,
            postTitle: edge.node.postTitle,
            postDescription: edge.node.postDescription.postDescription,
            postImage: edge.node.postImage.fluid,
            postSlug: props.path + "/blog/" + edge.node.blogTitle.replace(/\s+/g, '-').toLowerCase() + "/" + edge.node.postTitle.replace(/\s+/g, '-').toLowerCase(),
            key: index,
        };
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HeaderBar />
            <div className={classes.typing}>
                <Typing>
                    <Typography align='center' variant='h3'><b>Greetings! I am Mark, a</b></Typography>
                    <Typography align='center' variant='h3'><b>programmer</b></Typography>
                    <Typing.Delay ms={800} />
                    <Typing.Backspace count={10} />
                    <Typography align='center' color='secondary' variant='h3'><b>software developer.</b></Typography>
                </Typing>
                <img src={typingGIF} alt="Typing animation" />
            </div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.aboutMe}
                id="about"
            >
                <Grid item xs={12} sm={6} md={4}
                    style={{ padding: "5%" }}
                >
                    <Typography align='center' variant='h5'>
                        <b>About Me</b>
                    </Typography>
                    <Typography color='textSecondary'>
                        I am a full-time student in the day, and a part-time software engineer in the night. As a programming enthusiast, I am always on the lookout for new ideas!
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}
                    style={{ padding: "2.5%" }}
                >
                    <Img fluid={props.data.aboutMePicture.childImageSharp.fluid} />
                </Grid>
            </Grid>


            <Grid container spacing={3} justify="center" className={classes.whatIdo} id="services">

                <Grid item xs={12} sm={12} md={12}>
                    <Typography align='center' variant='h5'>
                        <b>What I do</b>
                    </Typography>
                    <Typography align='center' color='textSecondary'>
                        I am a freelancer!
                        </Typography>

                </Grid>
                {
                    blogs.map((blog) => (
                        <Grid item xs={12} sm={6} md={4} key={blog.key}>
                            <BlogCard
                                
                                image={blog.blogImage}
                                title={blog.blogTitle}
                                description={blog.blogDescription}
                                slug={blog.blogSlug}
                            />
                        </Grid>
                    ))
                }
            </Grid>



            <Grid container className={classes.featuredProjects} direction="row" justify="center" alignItems="center" id="projects">
                <Grid item xs={12} sm={12} md={12}>
                    <Typography variant='h5' align='center'>
                        <b>Featured Projects</b>
                    </Typography>
                </Grid>
                <Button color="inherit" style={{ textTransform: "none", marginBottom: "1%" }}>
                    <Typography align='center'>
                        See All
                    </Typography>
                </Button>
                <Grid item xs={12} sm={12} md={12} className={classes.carousel}>
                    <Carousel responsive={responsive} itemClass={classes.carousel_items} containerClass={classes.carousel_container}>
                        {
                            posts.map((post) => (
                                <Grid item xs={12} sm={12} md={12} key={post.key}>
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
                    </Carousel>
                </Grid>
            </Grid >
                <ContactForm  className={classes.contact}/>
            <Footer />
            <Link>
            </Link>
        </ThemeProvider >
    );
};

export default Index;
export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
export const pageQuery = graphql`
query {
    aboutMePicture: file(relativePath: { eq: "src/images/aboutMePicture.jpg" }) {
        ...fluidImage
    }
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
    allContentfulBlogPost(sort:{fields:[rank], order:ASC}) {
        edges {
          node {
            blogTitle
            postTitle
            postImage{
                fluid{
                    ...GatsbyContentfulFluid
                }
            }
            postDescription {
              postDescription
            }
          }
        }
    }
}
`;


