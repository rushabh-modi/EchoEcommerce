import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const Checkout = () => {
  return (
    <div>
        <EmptyDiv>
        <h3>Payment Gateway is Coming Soon!!!</h3>
        <NavLink to="/products">
          <Button>Continue Shopping</Button>
        </NavLink>
      </EmptyDiv>
    </div>
  )
}

const EmptyDiv = styled.div`
  display: grid;
  place-items: center;
  height: 50vh;
  padding: 11rem;

  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;

export default Checkout;