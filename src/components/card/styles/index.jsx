import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-columns: 20% auto;
grid-gap: 20px;
`;
export const Image = styled.div`
 width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Details = styled.div`
  display: grid;
  grid-gap: 10px;
`;
export const Id = styled.h1`
  font-size: 20px;
`;
export const Title = styled.h2`
  font-size: 17px;
`;
export const Desc = styled.p`
  font-size: 15px;
  line-height: 150%;
`;
