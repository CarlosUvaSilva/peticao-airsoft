import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import axios from 'axios'
import Loader from "react-loader-spinner";

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import M4 from "../images/m4.svg";
import AK from "../images/ak.svg";

import marceloGIF from '../gifs/marcelo.gif'

import "./index.scss"

const IndexPage = () => {
  // const [voteCount, setVoteCount] = React.useState(0)
  // const [loader, setLoader] = React.useState(true)
  // console.log("voteCount: ", voteCount)
  const petitionURL = 'https://peticaopublica.com/pview.aspx?pi=airsoftamendment'

  // React.useEffect(() => {
  //   axios.get("/.netlify/functions/petition-count", {
  //     params: {
  //       url: petitionURL
  //     }
  //   }).then(response => {
  //     setVoteCount(response.data)
  //     setLoader(false)
  //   })
  // }, [])

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
        <img src={marceloGIF} alt="Otter dancing with a fish" />
      </div>
    </Layout>
  )
}
export default IndexPage
