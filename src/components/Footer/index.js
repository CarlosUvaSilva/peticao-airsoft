import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import "./styles.scss"

const Footer = () => (
  <div className='footer'>
    {/*<h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
      OLA
      </Link>
      <FontAwesomeIcon icon={faTwitter} color="blue"/>
    </h1>*/}
  </div>
)

export default Footer
