import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import TitleRow from "../components/TitleRow";
import ReactJotformEmbed from "react-jotform-embed";

function Enrol() {
  return (
    <>
      <Nav />
      <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <div className="mx-auto sm:text-center lg:max-w-2xl">
          <ReactJotformEmbed
            src="https://form.jotform.com/201838122431042"
            scrolling="true"
            initialHeight={800}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Enrol;
