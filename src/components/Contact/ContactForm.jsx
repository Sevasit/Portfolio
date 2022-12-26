import React, { useRef } from "react";

const ContactForm = (props) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredMessage = messageRef.current.value;

    const enteredForm = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };

    props.onAddComment(enteredForm);

    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col max-w-[1200px] w-full mx-auto"
    >
      <div className="pb-8">
        <p className="text-4xl font-bold inline text-gray-300">Get in touch</p>
        <p className="text-base text-gray-400 pt-1">
          Submit the form below or shoot me an email : new12253952@gmail.com
        </p>
      </div>
      <input
        className="bg-slate-300 p-2 focus:bg-red-300 placeholder-black transition duration-300"
        ref={nameRef}
        type="text"
        placeholder="Name"
        name="name"
        required
      />
      <input
        className="my-4 p-2 bg-slate-300 focus:bg-red-300 placeholder-black transition duration-300"
        ref={emailRef}
        type="email"
        placeholder="Email"
        name="email"
        required
      />
      <textarea
        className="bg-slate-300 p-2 focus:bg-red-300 placeholder-black transition duration-300"
        ref={messageRef}
        name="message"
        rows="5"
        placeholder="Message"
        required
      ></textarea>
      <button
        className="transition duration-500  border-2 text-white w-[150px] rounded-md mx-auto mt-5 py-1 font-medium hover:bg-red-400 hover:text-black hover:border-black"
        type="submit"
      >
        Submit
      </button>
      {props.isLoading && (
        <p className="text-lg text-red-400 mx-auto mt-4">Loading...</p>
      )}
      {props.error && (
        <p className="text-lg text-red-400 mx-auto mt-4">{props.error}</p>
      )}
    </form>
  );
};

export default ContactForm;
