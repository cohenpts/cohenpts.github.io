import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './header.module.scss'

const Header = ({ siteTitle, siteSubtitle }) => (
  <header className={styles.header}>
    <h1>
      <Link to="/" style={{...styles.link}}>
        <span className={styles.title}>{siteTitle}</span>
        <span className={styles.subtitle}>{siteSubtitle}</span>
      </Link>
    </h1>
    <div className={styles.rightPanel}>
      <Link to="/">HOME</Link>
      <Link to="/portfolio">MY WORK</Link>
      <Link to="/about">ABOUT ME</Link>
      <Link to="/blog">BLOG</Link>
      <Link to="/contact">CONTACT</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
