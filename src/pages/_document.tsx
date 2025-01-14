import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

// Define a custom Document class
class MyDocument extends Document {
  // Static method to handle getInitialProps
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const { __NEXT_DATA__ } = this.props;
    const currentPage = __NEXT_DATA__?.page || "/";
    const bodyClass = currentPage === "/" ? "home-page" : currentPage;

    return (
      <Html lang="en" className={bodyClass}>
        <Head />
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
