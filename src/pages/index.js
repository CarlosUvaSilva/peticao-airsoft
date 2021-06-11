import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import axios from 'axios'
import Loader from "react-loader-spinner";

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import M4 from "../images/m4.svg";
import AK from "../images/ak.svg";

import "./index.scss"

const IndexPage = () => {
  const [voteCount, setVoteCount] = React.useState(0)
  const [loader, setLoader] = React.useState(true)

  const petitionURL = 'https://peticaopublica.com/pview.aspx?pi=airsoftamendment'

  React.useEffect(() => {
    axios.get("/.netlify/functions/petition-count", {
      params: {
        url: petitionURL
      }
    }).then(response => {
      setVoteCount(response.data)
      setLoader(false)
    })
  }, [])

  return (
    <Layout>
      <Seo title="Airsoft Petição" />
      <div className="container">
        <StaticImage
          className='desktop-image'
          src="../images/peticao.png"
          width={1440}
          height={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="landing page image"
          style={{ padding: '20px 0', boxSizing: 'content-box' }}
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
          <a className='link' target="_blank" rel="noreferrer" href={petitionURL}>
            <div className='flex-link'>
              {/*<M4 className='svg'/>*/}
              <h2>ASSINA A PETIÇÃO!</h2>
              {/*<AK className='svg inverted'/>*/}
            </div>
          </a>
          <Loader
            visible={loader}
            type="Oval"
            color="black"
            secondaryColor="black"
            height={50}
            width={50}
            timeout={3000} //3 secs
          />
          {
            voteCount ? <h2>{voteCount} já assinaram</h2> : null
          }
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
