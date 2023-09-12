import { useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { BsCheck2Square } from "react-icons/bs";

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleForm(e) {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    axios({
      method: "POST",
      url: process.env.REACT_APP_FIREBASE_CONTACTFORM,
      data: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res);
        setIsSubmitted(true);
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
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
              ref={nameRef}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              autoComplete="off"
              ref={emailRef}
            />
            <textarea
              placeholder="Enter your message"
              name="message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              ref={messageRef}
            />
            <div className="submitted">
              <input type="submit" value="SEND" />
              {isSubmitted && (
                <h3>
                  <BsCheck2Square /> Form Submitted
                </h3>
              )}
            </div>
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

        textarea {
          resize: none;
        }

        .submitted {
          display: flex;
          align-items: center;

          h3 {
            margin-left: 10px;
          }

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
        }
      }
    }
  }
`;
export default Contact;
