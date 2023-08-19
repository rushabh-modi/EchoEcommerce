import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Contact = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  function handleForm(e) {
    e.preventDefault();

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
        console.log(
          "Form submitted from having",
          "Name:",
          name,
          "Email:",
          email,
          "Message:",
          message
        );

        alert("We'll be contacting you soon");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Wrapper>
      <h2 className="common-heading">Feel free to Contact</h2>

      <div className="container">
        <div className="contact-form">
          <form className="contact-inputs" onSubmit={handleForm}>
            <input
              type="text"
              placeholder="Name"
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
  .common-heading {
    margin-bottom: 3rem;
  }

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
          margin-top: 0.5rem;

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
