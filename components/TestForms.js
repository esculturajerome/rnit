import React from "react";

const TestForms = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };
  return (
    <form
      data-netlify="true"
      name="sampleForm"
      method="post"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="sampleForm" />
      <label>
        What order did the pizza give to the pineapple?
        <input name="order" type="text" />
      </label>
      <input type="submit" />
    </form>
  );
};

export default TestForms;
