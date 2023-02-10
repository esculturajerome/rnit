import { useRouter } from "next/router";
import React from "react";

const ContactForm = () => {
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => router.push("/success"))
      .catch((error) => alert(error));
  };
  return (
    <form
      data-netlify="true"
      method="post"
      name="RNITContact"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="RNITContact" />
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
  );
};
export default ContactForm;
