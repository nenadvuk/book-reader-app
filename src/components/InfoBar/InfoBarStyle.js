import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  box-shadow: var(--shadow);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  height: 70px;
  background: var(--medGrey);
  color: var(--white);
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  padding: 0 40px;
  span {
    :first-child:hover {
      color: var(--hover);
      transition: all 0.3s;
    }
    font-size: var(--fontMed);
    color: var(--white);
    padding-right: 10px;

    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
`;
