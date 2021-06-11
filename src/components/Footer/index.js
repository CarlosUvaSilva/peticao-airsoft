import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

import Icon from '../Icon';

import "./styles.scss"

const Footer = () => (
  <footer>
    <div className="icon-container">
      <a className="icon-link" target="_blank" rel="noreferrer" href="https://discord.gg/jyNuZBDj">
        <Icon size={40} name='discord' />
        <p>Discord</p>
      </a>
      <a className="icon-link" target="_blank" rel="noreferrer" href="https://www.facebook.com/events/123121909847502">
        <Icon size={40} name='facebook' />
        <p>Facebook</p>
      </a>
      <a className="icon-link" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=eS0QXP-Dl0k">
        <Icon size={40} name='youtube' />
        <p>Youtube</p>
      </a>
    </div>
  </footer>
)

export default Footer
