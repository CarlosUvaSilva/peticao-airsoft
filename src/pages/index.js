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
  console.log("voteCount: ", voteCount)
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
          quality={95}
          objectFit={'cover'}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="landing page image"
          style={{ boxSizing: 'content-box' }}
        />
        <StaticImage
          className='mobile-image'
          src="../images/peticao-mobile.png"
          width={320}
          quality={95}
          objectFit={'cover'}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="landing page image"
          style={{ boxSizing: 'content-box' }}
        />
        <div className="description-container">
        {
          voteCount ?
          <h2>Faltam {7500 - (voteCount * 1000)} Assinaturas</h2>
          :
          <h2>Apoia um airsoft melhor</h2>
        }
          <a className='link' target="_blank" rel="noreferrer" href={petitionURL}>
            <div className='flex-link'>
              {/*<M4 className='svg'/>*/}
              <h1 className='cta'>ASSINA A PETIÇÃO!</h1>
              {/*<AK className='svg inverted'/>*/}
            </div>
          </a>
          <div className='counter' style={{ height: '67.5px' }}>
            {
              voteCount ?
                <h2 >{voteCount} já assinaram</h2>
                :
                <Loader
                  visible={loader}
                  type="Oval"
                  color="black"
                  secondaryColor="black"
                  height={50}
                  width={65}
                  // timeout={3000} //3 secs
                />
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
