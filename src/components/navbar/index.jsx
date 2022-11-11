import React, { useEffect, useRef, useState } from "react";
import { Container, Logo, Menu, Toggle } from "./styles";
import { HiBars3 } from "react-icons/hi2";
import { VscClose } from "react-icons/vsc";
import { gsap } from "gsap";

const Index = () => {
  const [click, setClick] = useState(false);

  let link = useRef(null);

  const animation = () => {
    gsap.from([link.children], {
      duration: 0.6,
      translateX: 1200,
      stagger: 0.3,
      ease: "power3.inOut",
      delay: 1,
    });
    gsap.to([link.children], {
      duration: 0.6,
      translateX: 0,
      stagger: 0.3,
      ease: "power3.inOut",
      delay: 1,
    });
  };

  useEffect(() => {
    animation();
  });

  return (
    <Container>
      <Logo>W.</Logo>
      <Toggle click={click} onClick={() => setClick(!click)}>
        {click ? (
          <VscClose ref={(el) => (link = el)} />
        ) : (
          <HiBars3 ref={(el) => (link = el)} />
        )}
      </Toggle>
      <Menu click={click} ref={(el) => (link = el)}>
        <li onClick={() => setClick(!click)}>Home</li>
        <li onClick={() => setClick(!click)}>New</li>
        <li onClick={() => setClick(!click)}>Popular</li>
        <li onClick={() => setClick(!click)}>Trending</li>
        <li onClick={() => setClick(!click)}>Categories</li>
      </Menu>
    </Container>
  );
};

export default Index;
