import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "next/head";

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
      <div className="grid grid-cols-2">
        <form name="contact" method="POST" data-netlify="true">
          <input
            type="hidden"
            name="subject"
            value="Sales inquiry from mysitename.netlify.app"
          />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        <form name="contact" netlify>
          <input
            type="hidden"
            name="test"
            value="Sales inquiry from mysitename.netlify.app"
          />
          <p>
            <label>
              Message with netlify: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Sendxx</button>
          </p>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default TestPage;
