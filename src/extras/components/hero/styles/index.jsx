import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  /* align-items: center; */
  height: 100vh;
  visibility: hidden;
`;
export const Text = styled.div`
  padding: 10%;
  display: flex;
  align-items: center;
  .header {
    margin-bottom: 20px;
  }
  p {
    overflow: hidden;
    line-height: 150%;
  }
`;

export const Images = styled.div`
  width: 100%;
  position: relative;

  .img {
    /* height: 100%; */
    position: absolute;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .boyImg {
    width:45%;
    left: 10%;
    bottom: 0;
  }
  .girlImg {
    width: 35%;
    right: 10%;
    top: 0;
  }
`;
