const ContactFormTest = () => {
  return (
    <div id="contact">
      <form name="contact" method="post">
        <input
          type="hidden"
          name="rnit-contact-form-test"
          value="RNIT Contact Form Test"
        />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

export default ContactFormTest;
