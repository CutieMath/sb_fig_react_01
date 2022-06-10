import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Nav>
        <Container>
          <LogoIcon />
          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
          <Menu isOpen={isOpen}>
            <LinkWrapper>
              <Menulink href="">Search</Menulink>
              <Menulink href="">Login</Menulink>
              <Button>Join Now</Button>
            </LinkWrapper>
          </Menu>
        </Container>
      </Nav>
    </div>
  );
};

export default Navbar;

const Nav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
  padding: 2rem;
  svg {
    height: 1.4rem;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #858586;
    font-size: 0.9rem;
    padding: 0.7rem 1.5rem;
    transition: all 0.2s ease-in;
    border-radius: 1rem;
    font-weight: 500;

    &:hover {
      color: #7781d4;
      background: #e7e9fc;
    }
  }
`;
const Button = styled.button`
  font-size: 0.8rem;
  background: #f774c5;
  border: none;
  padding: 0.8rem 1.1rem;
  border-radius: 1rem;
  color: #fff;
  box-shadow: 10px 10px 20px -7px #ecb6d7;
  transition: all 0.1s ease-in;
  margin-left: 0.5rem;
  cursor: pointer;

  &:hover {
    box-shadow: 10px 17px 11px -11px #ecb6d7;
    transform: translateY(-3px) translateX(-3px);
  }
`;
const Menu = styled.div``;
const LinkWrapper = styled.div``;
const Menulink = styled.a``;
const Hamburger = styled.div``;
