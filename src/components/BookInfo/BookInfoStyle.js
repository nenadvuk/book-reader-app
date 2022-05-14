import styled from "styled-components";

export const Wrapper = styled.div`
  background-size: cover;
  background-position: center top;
  padding: 40px 20px;
  animation: fadeIn 1s;
`;

export const Content = styled.div`
  display: flex;
  /* flex-direction:row; */
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    max-width: 400px;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px;
  color: var(--white);
  overflow: hidden;
`;

export const Image = styled.img`
  border-radius: 20px 0 0 20px;

  @media screen and (max-width: 768px) {
    border-radius: 0 0 20px 20px ;
    width: 100%;
  }
`;
