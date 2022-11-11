import React, { useEffect, useRef } from "react";
import { Container, Left, List, Right } from "./styles";
import useReactSimpleMatchMedia from "react-simple-matchmedia";
import desktop from "../../assets/images/image-web-3-desktop.jpg";
import mobile from "../../assets/images/image-web-3-mobile.jpg";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Index = () => {
  gsap.registerPlugin(ScrollTrigger);
  const matched = useReactSimpleMatchMedia("phone");
  let hero = useRef(null);
  let heroLeft = useRef(null);
  let h11 = useRef(null);
  let h12 = useRef(null);
  let h13 = useRef(null);
  let dsc = useRef(null);
  let newList = useRef(null);
  let list = useRef(null);

  const animation = () => {
    const heroImg = heroLeft.firstElementChild;

    gsap.from(hero, {
      duration: 0.2,
      visibility: "hidden",
    });
    gsap.to(hero, {
      duration: 0.2,
      visibility: "visible",
    });

    gsap.from(heroLeft, {
      duration: 1.2,
      translateX: -1280,
      ease: "power3.inOut",
    });
    gsap.to(heroLeft, {
      duration: 1.2,
      translateX: 0,
      ease: "power3.inOut",
    });

    gsap.from(heroImg.firstElementChild, {
      duration: 1.2,
      translateX: -1280,
      ease: "power3.inOut",
      scale: 1.8,
      delay: 0.2,
    });
    gsap.to(heroImg.firstElementChild, {
      duration: 1.2,
      translateX: 0,
      ease: "power3.inOut",
      scale: 1,
      delay: 0.2,
    });

    gsap.from([h11.children, h12.children, h13.children], {
      duration: 0.6,
      translateY: 100,
      stagger: 0.3,
      delay: 1.2,
    });
    gsap.to([h11.children, h12.children, h13.children], {
      duration: 0.6,
      translateY: 0,
      stagger: 0.3,
      delay: 1.2,
    });

    gsap.from(dsc, {
      duration: 1,
      translateY: 300,
      stagger: 0.3,
      delay: 1.3,
    });
    gsap.to(dsc, {
      duration: 1,
      translateY: 0,
      stagger: 0.3,
      delay: 1.3,
    });
  };

  useEffect(() => {
    animation();

    gsap.from(newList, {
      duration: 0.6,
      translateX: 1200,
      delay: 1,
    });
    gsap.to(newList, {
      duration: 0.6,
      translateX: 0,
      delay: 1,
      scrollTrigger: {
        trigger: newList,
        start: "top bottom",
      },
    });

    gsap.from(list.children, {
      duration: 0.6,
      translateY: 1200,
      stagger: 0.3,
      delay: 1,
    });
    gsap.to(list.children, {
      duration: 0.6,
      translateY: 0,
      stagger: 0.3,
      delay: 1,
      scrollTrigger: {
        trigger: list,
        start: "top bottom",
      },
    });
  });

  return (
    <Container ref={(el) => (hero = el)}>
      <Left ref={(el) => (heroLeft = el)}>
        <div className="image">
          <img src={matched ? mobile : desktop} alt="" />
        </div>
        <div className="text">
          <div className="heading">
            <h1 ref={(el) => (h11 = el)}>
              <div>The Bright</div>
            </h1>
            <h1 ref={(el) => (h12 = el)}>
              <div>Future of</div>
            </h1>
            <h1 ref={(el) => (h13 = el)}>
              <div>Web 3.0?</div>
            </h1>
          </div>
          <div className="dsc" ref={(el) => (dsc = el)}>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button>Read more</button>
          </div>
        </div>
      </Left>
      <Right ref={(el) => (newList = el)}>
        <h1 className="header">New</h1>
        <List ref={(el) => (list = el)}>
          <li>
            <h3 className="head">Hydrogen VS Electric Cars</h3>
            <p> Will hydrogen-fueled cars ever catch up to EVs?</p>
          </li>
          <li>
            <h3 className="head">The Downsides of AI Artistry</h3>
            <p>
              {" "}
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </li>
          <li>
            <h3 className="head"> Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </li>
        </List>
      </Right>
    </Container>
  );
};

export default Index;
