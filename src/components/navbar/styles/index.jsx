import styled, { keyframes } from "styled-components";

const fadeInRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(30px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  padding: 0 5%;
`;

export const Logo = styled.h1`
  font-weight: 700;
  font-size: 50px;
`;
export const Toggle = styled.div`
 display: none;
 font-size: 30pt;
 z-index:999;
  @media (max-width: 900px) {
    display: block;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  font-size: 18px;
  letter-spacing: 1px;
  gap: 30px;
  
  margin-left: auto;

  @media screen and (max-width: 900px) {
    position: absolute;
    display: ${(props) => (props.click ? "flex" : "none")};
    flex-direction: column;
    top: 0;
    right: 0;
    z-index: 998;
    width: 50%;
    height: 100%;
    padding-top: 20%;
    padding: 35% 5% 0;
    text-align: left;
    align-items: flex-start;
    trabsition: all 0.3s ease;
    animation: ${fadeInRight} 0.3s ease;
    background: #e6e6e6;
  }
`;
