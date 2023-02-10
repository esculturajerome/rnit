const ContactFormTest = () => {
  return (
    <div id="contact">
      <form name="sample_form" method="post" netlify>
        <input type="hidden" name="form-name" value="sample_form" />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
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
