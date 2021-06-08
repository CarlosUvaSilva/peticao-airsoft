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
        className='desktop-image'
        src="../images/peticao.png"
        width={1440}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="landing page image"
        style={{ height: '70%', padding: '20px 0', boxSizing: 'content-box' }}
      />
      <StaticImage
        className='mobile-image'
        src="../images/peticao-mobile.png"
        width={350}
        quality={95}
        objectFit={'cover'}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="landing page image"
        style={{ padding: '50px 50px', boxSizing: 'content-box' }}
      />
      <div className="description-container">
        <h1>Apoia um airsoft melhor</h1>
        <a className='link' target="_blank" rel="noreferrer" href="https://peticaopublica.com/pview.aspx?pi=airsoftamendment">
          <div className='flex-link'>
            {/*<M4 className='svg'/>*/}
            <h2>ASSINA A PETIÇÃO</h2>
            {/*<AK className='svg inverted'/>*/}
          </div>
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
