import useAuth from '../../hooks/useAuth';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { closeLoginModal } from '../../features/modal/modalSlice';
import { Button } from '../../styles/Button';

export default function Login() {
  const dispatch = useDispatch();
  const { setAuth } = useAuth();

  const userRef = useRef(null);

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setAuth({ user });
    setUser('');
    setPwd('');
  };

  return (
    <Wrapper>
      <aside className="modal">
        <div className="header">
          <h2>Login</h2>
          <p
            onClick={() => {
              dispatch(closeLoginModal());
            }}
          >
            <AiOutlineClose />
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            autoComplete="off"
            required
          />
          <Button>Login</Button>
        </form>
      </aside>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    background: #fff;
    width: 80vw;
    height: 48vh;
    max-width: 400px;
    border-radius: 8px;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    p {
      font-size: 24px;
      cursor: pointer;
    }

    h2 {
      font-weight: 600;
      margin-bottom: 1rem;
      margin-left: 0px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }

  label {
    font-size: 18px;
    margin-top: 0.5rem;
  }

  input[type='text'],
  input[type='password'],
  button {
    font-size: 18px;
    padding: 0.5rem;
    border-radius: 0.5rem;
    width: 100%;
    margin-top: 0.25rem;
  }

  button {
    margin-top: 1rem;
    padding: 0.7rem 1rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;
