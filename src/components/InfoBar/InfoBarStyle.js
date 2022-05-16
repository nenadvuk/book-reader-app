import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  box-shadow: var(--shadow);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  height: 70px;
  background: var(--medGrey);
  color: var(--main);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 40px;
  span {
    font-size: var(--fontMed);
    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
`;
