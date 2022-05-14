import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--brown);
  box-shadow: var(--shadow);
 
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding:var(--padding);
  margin: 0 auto;
`;

export const Image = styled.img`
  height: 50px;
  padding: 10px 0 0 0;
`;
export const Text = styled.h2`
  color: var(--main);
`;
