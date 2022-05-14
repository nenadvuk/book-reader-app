import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  line-height: 0.8;
  h2{
    font-style:italic;
  }
`;

export const Image = styled.img`
  height: 320px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 10px;
  animation: fadeIn 0.8s;
  cursor: pointer;
  :hover {
    transition: all 0.3s ease;
    filter: brightness(40%);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
