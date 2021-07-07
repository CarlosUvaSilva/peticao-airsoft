import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import "./faqs.scss"

const Faqs = () => (
  <Layout>
    <Seo title="Faqs" />
    <div className="container">
      <h1>FAQS</h1>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What harsh truths do you prefer to ignore?
            </AccordionItemButton>
          </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
          Exercitation in fugiat est ut ad ea cupidatat ut in
          cupidatat occaecat ut occaecat consequat est minim minim
          esse tempor laborum consequat esse adipisicing eu
          reprehenderit enim.
          </p>
        </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Is free will real or just an illusion?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
            In ad velit in ex nostrud dolore cupidatat consectetur
            ea in ut nostrud velit in irure cillum tempor laboris
            sed adipisicing eu esse duis nulla non.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  </Layout>
)

export default Faqs
