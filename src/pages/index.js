import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Feature from "../components/feature"
import Nav from "../components/nav"


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes


  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Espanjalainen ruoka" />
      <Nav />
      <Hero />
      <Feature />
      
      <div className="bg-gray-100 border-t border-white">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug   
          //let featuredImgFluid = post.frontmatter.banner.childImageSharp.fluid
          console.log(post.frontmatter.banner);

          return (
            <div class="flex mb-12 sm:px-0 bg-white shadow overflow-hidden sm:rounded-lg h-48">
               <div class="flex-none w-96 relative">
                <img src={post.frontmatter.banner.childImageSharp.fluid.src} alt="" class="absolute inset-0 w-full h-full object-cover" />
              </div>
            <div className="flex-auto">
              <article
              className="p-6"
                key={post.fields.slug}
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-2xl">
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                </header>
                <section>
                
                  <p
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
              
            </div>
            </div>
          )
        })}
        </div>
        </div>
        
      
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          banner {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
