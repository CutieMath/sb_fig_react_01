import React from "react";
import styled from "styled-components";
import image from "../assets/hero.png";
import bg from "../assets/bg.png";

const Hero = () => {
  return (
    <Container bg={bg}>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <h1>Text</h1>
          </Left>
          <img src={image} alt="" />
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
// For the blur
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
const InnerWrapper = styled.div``;
const Left = styled.div``;
