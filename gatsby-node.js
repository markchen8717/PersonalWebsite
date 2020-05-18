const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const BlogPage = path.resolve('./src/templates/BlogPage.js');
    const BlogPost = path.resolve('./src/templates/BlogPost.js');
    const { createPage } = actions;
    const blogQuery = await graphql(`
    query {
        allContentfulBlog{
            edges{
                node{
                    blogTitle
                    blogDescription{
                        blogDescription
                    }
                }
            }
        }
    }
    `);
    const postQuery = await graphql(`
    query{
        allContentfulBlogPost{
            edges{
                node{
                    postTitle
                    blogTitle
                    postDescription{
                        postDescription
                    }
                }
            }
        }	
    }
    `);

    // console.log(JSON.stringify(blogQuery.data.allContentfulBlog.edges, null, 4));
    blogQuery.data.allContentfulBlog.edges.forEach(({ node }) => {
        createPage({
            path: "/blog/" + node.blogTitle.replace(/\s+/g, '-').toLowerCase(),
            component: BlogPage,
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                blogTitle: node.blogTitle,
                blogDescription: node.blogDescription.blogDescription,
            },
        });
    });

    postQuery.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
            path: "/blog/" + node.blogTitle.replace(/\s+/g, '-').toLowerCase() + "/" + node.postTitle.replace(/\s+/g, '-').toLowerCase(),
            component: BlogPost,
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                postTitle:node.postTitle,
                postDescription:node.postDescription.postDescription
            },
        });
    });
}