import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import M4 from "../images/m4.svg";
import AK from "../images/ak.svg";

import "./index.scss"

const IndexPage = () => (
  <Layout style={{ backgroundColor: 'yellow' }}>
    <Seo title="Airsoft Petição" />
    <div className="container">
      <StaticImage
        src="../images/peticao.png"
        width={1440}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="landing page image"
        style={{ height: '70%', padding: '20px 0', boxSizing: 'content-box' }}
      />
      <h1>Ainda não assinaste a petição?</h1>
      <a className='link' target="_blank" href="https://peticaopublica.com/pview.aspx?pi=airsoftamendment">
        <div className='flex-link'>
          <M4 className='svg'/>
          <h2>De que estás à espera</h2>
          <AK className='svg inverted'/>
        </div>
      </a>
    </div>
  </Layout>
)

export default IndexPage
