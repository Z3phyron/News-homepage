import styled from "styled-components";

export const Container = styled.div`
  padding: 1% 5%;
  display: grid;
  grid-template-columns: 65% auto;
  grid-gap: 20px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 60% auto;
  }
  @media screen and (max-width: 980px) {
    grid-template-columns: 100%;
  }
`;
export const Left = styled.div`
  .image {
    width: 100%;
    margin-bottom: 20px;
    overflow: hidden;
    z-index: 2;
    img {
      width: 100%;
      z-index: -1;
    }
  }

  .text {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .heading {
      font-size: 23px;

      h1 {
        height: 60px;
        overflow: hidden;
        div {
          font-weight: 900;
          /* transform: translateY(10px); */
        }
      }
    }

    .dsc {
      letter-spacing: 1px;
      line-height: 150%;
      p {
        font-size: 16px;
        margin-bottom: 20px;
      }

      button {
        padding: 10px 25px;
        letter-spacing: 2px;
        border: none;
        outline: none;
        color: var(--Off-white);
        background: var(--Soft-red);
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
          background: var(--Very-dark-blue);
        }
      }
    }
  }
`;
export const Right = styled.div`
  background: var(--Very-dark-blue);
  padding: 5% 5% 0;
  height: auto;

  .header {
    color: var(--Soft-orange);
    margin-bottom: 20px;
  }
`;
export const List = styled.div`
  height: auto;
  color: var(--Off-white);
  letter-spacing: 1px;
  overflow: hidden;

  li {
    /* margin-top: auto; */
    margin-bottom: 30px;
    padding: 2vh 1% 1%;
    height: auto;
    &::after {
      content: "";
      display: block;
      border-bottom: 2px solid var(--Dark-grayish-blue);
      /* border-radius: 20px; */
      padding-top: 1.5rem;
    }

    &:last-child::after {
      display: none;
    }
    /* border-top: 2px solid #a19f9f; */
  }
  .head {
    margin-bottom: 10px;
    font-size: 20px;
  }

  p {
    line-height: 150%;

    font-size: 16px;
  }

  @media screen and (max-width: 1200px) {
    p {
      font-size: 14px;
    }
  }
`;
