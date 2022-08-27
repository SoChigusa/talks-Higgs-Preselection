import React from 'react';
import { SSRProvider, Container } from 'react-bootstrap';
import Head from 'next/head';
import Header from './header';

export default function Layout({ children, title }) {
  return (
    <SSRProvider>
      <Head>
        <title>{title}</title>
      </Head>
      <Header></Header>
      <Container>
        {children}
      </Container>
    </SSRProvider>
  )
}