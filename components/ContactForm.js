const ContactForm = () => {
  return (
    <div id="contact">
      <form
        data-netlify="true"
        method="post"
        name="RNIT Contact Form"
        data-netlify-honeypot="bot-field"
        action="/success"
      >
        <input type="hidden" name="contact-form" value="RNIT Contact Form" />
        <div hidden>
          <input name="bot-field" />
        </div>
        {/* <form name="RNIT Contact Form" netlify> */}
        {/* <input
          type="hidden"
          name="rnit-contact-form"
          value="RNIT Contact Form"
        /> */}
        {/* <div hidden>
          <input name="bot-field" />
        </div> */}
        <div className="mb-1 sm:mb-2">
          <label className="inline-block mb-1 font-medium" htmlFor="username">
            Name*
          </label>
          <input
            className="flex-grow w-full py-2 text-sm px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-main focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Juan Dela Cruz"
            required
            name="Name"
          />
        </div>
        <div className="mb-1 sm:mb-2">
          <label htmlFor="number" className="inline-block mb-1 font-medium">
            Phone Number
          </label>
          <input
            placeholder="09+++++++++"
            maxLength="11"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            className="flex-grow w-full py-2 text-sm px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-main focus:outline-none focus:shadow-outline"
            id="number"
            name="Number"
          />
        </div>
        <div className="mb-1 sm:mb-2">
          <label htmlFor="email" className="inline-block mb-1 font-medium">
            E-mail
          </label>
          <input
            type="email"
            placeholder="juan.delacruz@example.com"
            className="flex-grow w-full py-2 text-sm px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-main focus:outline-none focus:shadow-outline"
            id="email"
            name="Email"
          />
        </div>
        <div className="mb-1 sm:mb-2">
          <label htmlFor="message" className="inline-block mb-1 font-medium">
            Message*
          </label>
          <textarea
            placeholder="Send us a message"
            type="text"
            required
            className="flex-grow w-full h-32 pt-4 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-main focus:outline-none focus:shadow-outline"
            id="message"
            name="Message"
          />
        </div>
        <div className="mt-4 mb-2 sm:mb-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full py-2 text-sm px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-main hover:bg-main/80 focus:shadow-outline focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
