import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--brown);
  box-shadow: var(--shadow);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--maxWidth);
  padding: var(--padding);
  margin: 0 auto;
  .flex {
    align-items: center;
    display: flex;
    
  }
`;

export const Image = styled.img`
  height: 50px;
  margin-top:10px;
`;
export const Text = styled.h2`
  color: var(--main);
  :hover{
    transition: all .3s;
    color:var(--hover)
  }
`;
