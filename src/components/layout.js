import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    /* header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    ) */
  } else {
  /*   header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    ) */
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className="bg-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Madridissa, ❤️ 
        {` `}
        <a href="https://www.espanjalainenruoka.com">Espanjalainen ruoka</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
