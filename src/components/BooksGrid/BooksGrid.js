import { Wrapper, Content } from "./BooksGridStyle";

const BooksGrid = ({children}) => {
  return (
    <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
  )
}

export default BooksGrid