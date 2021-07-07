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
          src="../images/peticao-red.png"
          width={1440}
          quality={95}
          objectFit={'cover'}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="landing page image"
          style={{ boxSizing: 'content-box' }}
        />
        <StaticImage
          className='mobile-image'
          src="../images/peticao-mobile-red.png"
          width={320}
          quality={95}
          objectFit={'cover'}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="landing page image"
          style={{ boxSizing: 'content-box' }}
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
          {
            voteCount ?
              <h2>{voteCount} já assinaram</h2>
              :
              <Loader
                visible={loader}
                type="Oval"
                color="black"
                secondaryColor="black"
                height={65}
                width={65}
                // timeout={3000} //3 secs
              />
          }
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
