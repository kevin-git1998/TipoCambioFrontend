import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          {/* Agrega el CDN de Bootstrap aquí */}
          <link 
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
            rel="stylesheet" 
            integrity="sha384-KyZXEJpL5DK6HfeDh8tFuE80O5mY7lbM0xnDL0QIFxaYcD0Up4/tXkZ2gmiLqV4f" 
            crossorigin="anonymous" 
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
