import React from 'react';
import { SSRProvider, Container } from 'react-bootstrap';
import Head from 'next/head';
import Header from './header';

export default function Layout({ children, title, description }) {
  return (
    <SSRProvider>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://talks-higgs-preselection.vercel.app/" />
        <meta property="og:site_name" content={title} />
        <meta property="article:author" content="https://www.facebook.com/profile.php?id=100007905904884" />
        <meta property="og:image" content="https://talks-higgs-preselection.vercel.app/images/sigeff.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@SoChigusa" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://talks-higgs-preselection.vercel.app/images/sigeff.png" />
        <title>{title}</title>
      </Head>
      <Header></Header>
      <Container>
        {children}
      </Container>
    </SSRProvider>
  )
}