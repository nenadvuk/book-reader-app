import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  height: 55px;
  background: var(--medGrey);
  margin: 11px auto 0 0;
  border-radius: 2px;
  color: var(--white);
  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
    @media screen and (max-width: 768px) {
      left: 7px;
      top: 13px;
      width: 20px;
    }
  }
  input {
    font-size: var(--fontBig);
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);
    :focus {
      outline: none;
    }
    @media screen and (max-width: 768px) {
      margin: 8px 0;
      height: 30px;
    }
  }
  @media screen and (max-width: 768px) {
    height: 45px;
    margin-bottom: 10px;
    width: 350px;
  }
`;
