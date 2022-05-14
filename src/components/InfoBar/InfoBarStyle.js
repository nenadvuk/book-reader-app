import styled from "styled-components";

export const Wrapper = styled.div`
max-width: var(--maxWidth);
  /* position: sticky; */
  /* top: 0; */
  /* z-index: 100; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* width: 100%; */
  height: 70px;
  background: var(--medGrey);
  color: var(--white);
`;


export const Content = styled.div`
  display: flex;
  width: 100%;
  /* max-width: var(--maxWidth); */
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
