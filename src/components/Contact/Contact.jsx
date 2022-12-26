import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "./ContactForm";
import Comment from "./Comment";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const history = useHistory();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        "https://registerapp-5fe8c-default-rtdb.firebaseio.com/comments.json"
      );

      if (!response.ok) {
        throw new Error("Somthing went wrong");
      }

      const data = await response.json();

      const loadedComments = [];

      for (const key in data) {
        loadedComments.push({
          id: key,
          name: data[key].name,
          email: data[key].email,
          message: data[key].message,
        });
      }
      setComments(loadedComments);
    } catch (error) {}
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    fetchComments();
  }, []);

  async function addCommentHandler(dataForm) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://registerapp-5fe8c-default-rtdb.firebaseio.com/comments.json",
        {
          method: "POST",
          body: JSON.stringify(dataForm),
          headers: {
            "content-type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong❌");
      }
    } catch (error) {
      setError("Something went wrong❌");
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
    setIsLoading(false);
    history.push("/");
  }

  return (
    <section
      data-aos="fade-in"
      data-aos-delay="200"
      className="w-full h-[1000px] md:-h-[1000px] lg:h-screen p-4"
    >
      <ContactForm
        onAddComment={addCommentHandler}
        isLoading={isLoading}
        error={error}
      />
      <Comment commentsData={comments} />
    </section>
  );
};

export default Contact;
