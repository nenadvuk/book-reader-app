import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  line-height: 0.8;
  animation: fadeIn 1s;
  h2 {
    font-style: italic;
  }
`;

export const Image = styled.img`
  box-shadow: var(--shadow);
  height: 320px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    transition: all 0.3s ease;
    filter: brightness(40%);
  }
`;
