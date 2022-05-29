import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body className={"p-1"}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
