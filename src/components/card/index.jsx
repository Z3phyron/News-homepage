import React from "react";
import { Container, Desc, Details, Id, Image, Title } from "./styles";

const Index = (props) => {
  const { img, id, title, desc } = props;
  return (
    <Container>
      <Image>
        <img src={img} alt="" />
      </Image>
      <Details>
        <Id>0{id}</Id>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Details>
    </Container>
  );
};

export default Index;
