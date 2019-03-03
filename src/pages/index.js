import React from 'react'
import ParticleBackground from '../components/ParticleBackground'
import Typed from 'react-typed'

import Layout from '../components/layout'
import SEO from '../components/seo'

const HomepageSEOKeywords = [
  'Erik Cohen',
  'Web',
  'Developer',
  'Javascript',
  'React',
  'Redux',
  'Medellin',
  'Colombia',
]

const TypedAutocompletePhrases = [
  'I am a Front-end Developer',
  'I am a Web Developer',
  'I am a Javascript Developer',
  'I am a React Developer'
]

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={HomepageSEOKeywords} />
    <ParticleBackground />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        fontSize: '35px',
        color: '#fff'
      }}
    >
      <p style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        textAlign: 'center',
        background: '#263238'
      }}>
        <span>Hey! I'm Erik</span>
        <Typed styles={{whiteSpace: 'pre'}} strings={TypedAutocompletePhrases} typeSpeed={60} backSpeed={50} backDelay={10} />
      </p>
    </div>
  </Layout>
)

export default IndexPage
