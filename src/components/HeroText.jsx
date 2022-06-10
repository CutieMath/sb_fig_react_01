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
          <button>Research</button>
          <button className="readmore">Read More</button>
        </BtnContainer>
      </div>
    </Container>
  );
};

export default HeroText;

const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background-color: #81d1ff;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 0.5rem;
    box-shadow: 10px 13px 24px -7px #81d1ff;
    transition: all 0.2s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 10px 17px 16px -11px #81d1ff;
      transform: translateY(-3px) translateX(-3px);
    }
  }

  .readmore {
    color: #81d1ff;
    background: transparent;
    border: 3px solid #81d1ff;
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
