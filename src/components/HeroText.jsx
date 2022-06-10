import React from "react";
import styled from "styled-components";

const HeroText = () => {
  return (
    <Container>
      <h5>For every student, every classroom. Real results.</h5>
      <h1>You</h1>
      <h1>Can.</h1>
      <h1>Learn.</h1>
      <h1>Anything.</h1>
      <div>
        <BtnContainer>
          <button>Read More</button>
          <button className="research">Research</button>
        </BtnContainer>
      </div>
    </Container>
  );
};

export default HeroText;

const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    font-weight: 700;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #651fac;
    background: transparent;
    border: 3px solid #651fac;
    border-radius: 0.5rem;
    transition: all 0.2s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 10px 17px 16px -11px #651fac;
      transform: translateY(-3px) translateX(-3px);
    }
  }

  .research {
    color: #fff;
    background-color: #651fac;
    box-shadow: 15px 10px 30px -11px #651fac;
  }
`;

const Container = styled.div`
  padding: 1rem;
  h5 {
    color: #515151;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    &:nth-of-type(1) {
      color: #af60ff;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      color: #8840c7;
    }
    &:nth-of-type(3) {
      color: #651fac;
    }
    &:nth-of-type(4) {
      color: #3c0473;
    }
  }
`;
