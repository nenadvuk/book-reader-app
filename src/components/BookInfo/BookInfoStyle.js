import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding: 40px 20px;
  animation: fadeIn 1s;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 400px;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px;
  color: var(--white);
  overflow: hidden;
  text-align: center;
  > p {
    text-align: justify;
  }
  .publish-info {
    display: flex;
    justify-content: space-around;
  }
  .subjects {
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    margin-bottom: 15px;
  }
  .subjects_item {
    margin: 10px 10px 0 0;
    padding: 0.2rem 0.7rem;
    border-radius: 30px;
    @media screen and (max-width: 1024px) {
      font-size: var(--fontVerySmall);
    }
  }
`;

export const Image = styled.img`
  border-radius: 20px 0 0 20px;
  min-height: 475px;
  @media screen and (max-width: 768px) {
    border-radius: 20px 20px 0 0;
    width: 100%;
  }
`;
