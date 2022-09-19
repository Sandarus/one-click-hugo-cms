import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="theme-compiled">

          <link rel="shortcut icon" href="icon.ico" />
          
          <meta name="MobileOptimized" content="320" />
          <meta name="viewport" content="initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>

          <meta name="title" content="erabadu"/>
          <meta name="description" content="Architecture, UI/UX & Logo Designing" />
          <meta name="author" content="erabadu" />
          <meta name="keywords" content="sandaru, sandeepa, erabadu, architecture, UI/UX, Logo, Designing"/>

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://thepotatoeffect.com" />
          <meta property="og:title" content="erabadu" />
          <meta property="og:description" content="Architecture, UI/UX & Logo Designing" />
          <meta property="og:image" content="https://thepotatoeffect.com/og.png" />

          <meta property="twitter:card" content="erabadu | Architecture, UI/UX & Logo Designing" />
          <meta property="twitter:url" content="https://thepotatoeffect.com" />
          <meta property="twitter:title" content="erabadu" />
          <meta property="twitter:description" content="Architecture, UI/UX & Logo Designing"/>
          <meta property="twitter:image" content="https://thepotatoeffect.com/og.png" />

        <Head />
        <body
          className={`antialiased text-lg bg-white dark:bg-gray-900 dark:text-white leading-base`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
