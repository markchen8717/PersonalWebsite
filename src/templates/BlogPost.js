import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from '../components/footer'
import { graphql } from 'gatsby'
import ContactForm from '../components/ContactForm'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';


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

export default function BlogPost(props) {

    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                //Need to check if this is an image
                if (node.data.target.fields.file["en-US"].contentType.includes("image"))
                    return (<img src={`https:${node.data.target.fields.file["en-US"].url}`} style={{ width: '100%' }} />)
            },
            [BLOCKS.PARAGRAPH]: (node, children) => {
                var prefix = node.content[0].marks[0]
                if (prefix && prefix.hasOwnProperty('type') && prefix.type == "code") {
                    return (
                        // <pre>
                        //     <code >
                        //         {node.content[0].value}
                        //     </code>
                        // </pre>
                        <SyntaxHighlighter language="python" style={nightOwl}>
                            {node.content[0].value}
                        </SyntaxHighlighter>
                    )
                }
                else
                    return <p>{children}</p>
            }
        }
    }
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            {props.pageContext.postTitle}
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            {props.pageContext.postDescription}
                        </Typography>
                    </Container>
                </div>
                {/* End hero unit */}
                <Container
                    className={classes.cardGrid}
                    maxWidth="md"
                // style={{ backgroundColor: "green" }}
                >
                    {/* <div dangerouslySetInnerHTML={{ __html: props.data.contentfulBlogPost.postContent.childContentfulRichText.html }} /> */}
                    <div>
                        {documentToReactComponents(props.data.contentfulBlogPost.postContent.json, options)}
                    </div>
                </Container>
            </main>
            <Container >
                <Grid container direction="column" spacing={6} >
                    <Grid item >
                        <ContactForm />
                    </Grid>
                    <Grid item >
                        <Footer className={classes.footer} />
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};
export const pageQuery = graphql`
query($postTitle: String!){
    contentfulBlogPost (postTitle:{eq:$postTitle}){
        postContent{
            json
        }
    }
}
`;

