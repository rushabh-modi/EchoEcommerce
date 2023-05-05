import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Contact = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  function handleForm(e) {
    e.preventDefault();
    console.log("Form submitted", name, email, message);
    const data = {
      name: name,
      email: email,
      message: message,
    };

    axios({
      method: "post",
      url: "https://rushabhmodi25.000webhostapp.com/EchoEcommerce/echo_contact.php",
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        console.log(res);
        alert("We'll be contacting you soon");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Wrapper>
      <h2 className="common-heading">Feel free to Contact</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7268341214744!2d72.54439531476964!3d23.033799984947418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84eaf57ac615%3A0x5c7498bb96b34c97!2sLalbhai%20Dalpatbhai%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1680717961658!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="LD College"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form className="contact-inputs" onSubmit={handleForm}>
            <input
              type="text"
              placeholder="Username"
              name="name"
              required
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <textarea
              placeholder="Enter your message"
              name="message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <input type="submit" value="SEND" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;
  font-size: 15px;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
        textarea {
          resize: none;
        }
      }
    }
  }
`;
export default Contact;
