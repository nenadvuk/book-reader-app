import { Wrapper, Content } from "./BooksGridStyle";

const BooksGrid = ({children}) => {
  return (
    <Wrapper>
        {/* <h1 className={animate ? "fadeIn" : null}>{header}</h1> */}
        <Content>{children}</Content>
      </Wrapper>
  )
}

export default BooksGrid