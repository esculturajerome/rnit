import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "next/head";
import GetInTouch from "../components/GetInTouch";

function TestPage() {
  return (
    <>
      <Head>
        <title>RNIT | Test Page</title>
        <meta
          name="description"
          content="RNIT page with Team Information and Organizational Chart"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Nav />
      <div className="grid  place-content-center p-16">
        <GetInTouch />
      </div>

      <Footer />
    </>
  );
}

export default TestPage;
