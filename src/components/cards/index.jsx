import React, { useEffect, useRef } from "react";
import { Container } from "./styles";
import Card from "../card";
import img1 from "../../assets/images/image-retro-pcs.jpg";
import img2 from "../../assets/images/image-top-laptops.jpg";
import img3 from "../../assets/images/image-gaming-growth.jpg";
import gsap from "gsap";

const Index = () => {
  let cards = useRef(null);
  const data = [
    {
      img: img1,
      id: 1,
      title: "Reviving Retro PCs",
      desc: "  What happens when old PCs are given modern upgrades?",
    },
    {
      img: img2,
      id: 2,
      title: " Top 10 Laptops of 2022",
      desc: "   Our best picks for various needs and budgets.",
    },
    {
      img: img3,
      id: 3,
      title: "The Growth of Gaming",
      desc: "   How the pandemic has sparked fresh opportunities.",
    },
  ];

  const animation = () => {
    gsap.from(cards.children, {
      duration: 0.6,
      translateY: 1200,
      stagger: 0.3,
      delay: 1,
    });
    gsap.to(cards.children, {
      duration: 0.6,
      translateY: 0,
      stagger: 0.3,
      delay: 1,
      scrollTrigger: {
        trigger: cards,
        start: "top bottom",
      },
    });
  };

  useEffect(() => {
    // animation();
    gsap.from(cards.children, {
      duration: 0.6,
      translateY: 200,
      stagger: 0.3,
      delay: 1,
    });
    gsap.to(cards.children, {
      duration: 0.6,
      translateY: 0,
      stagger: 0.3,
      delay: 1,
      scrollTrigger: {
        trigger: cards,
        start: "top bottom",
      },
    });
  });

  return (
    <Container ref={(el) => (cards = el)}>
      {data.map((item) => (
        <Card
          key={item.id}
          img={item.img}
          id={item.id}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </Container>
  );
};

export default Index;
