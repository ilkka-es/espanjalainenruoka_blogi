import React from 'react'
import { Link, graphql } from 'gatsby'
import CookieConsent from 'react-cookie-consent'
import Header from './header'

const Layout = ({ location, title, children, data }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header
        menuLinks={data.site.siteMetadata.menuLinks}
        siteTitle={data.site.siteMetadata.title}
      />
      <main>{children}</main>
      <footer className="bg-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Madridissa, ❤️
          {` `}
          <a href="https://www.espanjalainenruoka.com">Espanjalainen ruoka</a>
        </div>
      </footer>
      <CookieConsent
        location="bottom"
        buttonText="Hyväksyn evästeet"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
      >
        Käytämme verkkopalvelussamme Google Analyticsiä mittaamaan
        verkkopalveluidemme käyttöä.
      </CookieConsent>
    </div>
  )
}

export default Layout
