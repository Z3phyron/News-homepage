import React, { useRef, useEffect } from "react";
import { Container, Images, Text } from "./styles";
import boyImg from "../../assets/boy.jpg";
import girlImg from "../../assets/girl.jpg";
import gsap from "gsap";

const Index = () => {
  let app = useRef(null);
  let images = useRef(null);
  let textWrap = useRef(null);

  let tl = new gsap.timeline();

  const animation = () => {
    //images variables
    const bImg = images.firstElementChild;
    const gImg = images.lastElementChild;

    tl.to(app, 0, { css: { visibility: "visible" } });

    gsap.from(gImg, {
      duration: 1.2,
      translateY: 1280,
      ease: "power3.inOut",
    });
    gsap.to(gImg, {
      duration: 1.2,
      translateY: 0,
      ease: "power3.inOut",
    });

    gsap.from(
      gImg.firstElementChild,
      2,
      { scale: 1.6, ease: "power3.inOut" },
      0.2
    );
    gsap.to(gImg.firstElementChild, 2, { scale: 1, ease: "power3.inOut" }, 0.2);

    gsap.from(
      bImg,
      {
        duration: 1.2,
        translateY: 1280,
        ease: "power3.inOut",
      },
      0.2
    );
    gsap.to(
      bImg,
      {
        duration: 1.2,
        translateY: 0,
        ease: "power3.inOut",
      },
      0.2
    );

    gsap.from(
      bImg.firstElementChild,
      2,
      { scale: 1.6, ease: "power3.inOut" },
      0.2
    );
    gsap.to(bImg.firstElementChild, 2, { scale: 1, ease: "power3.inOut" }, 0.2);
  };

  useEffect(() => {
    // window.addEventListener("load", () => {
      animation();
    // });
  });

  return (
    <Container ref={(el) => (app = el)}>
      <Text>
        <div className="wrapper" ref={(el) => (app = el)}>
          <h1 className="header">
            <p>Relief the Burden</p>
            <p>of diseases caused</p>
            <p>by behaviors</p>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias,
            voluptate, soluta consequatur animi exercitationem delectus cumque
            perferendis.
          </p>
        </div>
      </Text>
      <Images ref={(el) => (images = el)}>
        <div className="boyImg img">
          <img src={boyImg} alt="" />
        </div>
        <div className="girlImg img">
          <img src={girlImg} alt="" />
        </div>
      </Images>
    </Container>
  );
};

export default Index;
