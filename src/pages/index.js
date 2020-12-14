import React from 'react'
import { Link, graphql } from 'gatsby'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Feature from '../components/feature'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>Joku meni rikki.</p>
      </Layout>
    )
  }

  return (
    <Layout data={data} location={location} title={siteTitle}>
      <SEO title="Espanjalainen ruoka" />
      {/* <Header
        menuLinks={data.site.siteMetadata.menuLinks}
        siteTitle={data.site.siteMetadata.title}
      /> */}
      <Hero />
      <Feature />

      <div className="bg-gray-100 border-t border-white">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const category = post.frontmatter.category || 'ei ole'
            // let featuredImgFluid = post.frontmatter.banner.childImageSharp.fluid

            return (
              <div
                key={post.frontmatter.date}
                className="flex mb-12 sm:px-0 bg-white shadow overflow-hidden sm:rounded-lg h-48"
              >
                <div className="flex-none w-96 relative">
                  <Link to={post.fields.slug} itemProp="url">
                    <img
                      src={post.frontmatter.banner.childImageSharp.fluid.src}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </Link>
                </div>
                <div className="flex-auto">
                  <article
                    className="p-6"
                    key={post.fields.slug}
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
                        {category}
                      </h2>
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
        menuLinks {
          name
          link
        }
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
          category
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
