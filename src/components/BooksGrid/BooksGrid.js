// Style
import { Wrapper, Content } from "./BooksGridStyle";
// Mui
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// Components
import { Spinner } from "../Spinner/Spinner.styles";

const BooksGrid = ({
  loading,
  children,
  items,
  setItems,
  numberOfItems,
  searchTerm
}) => {
  // Instead of pagination
  let num = items;
  
  return (
    <Wrapper>
      {loading && <Spinner />}
      <Content>{children}</Content>
      <Stack spacing={2} direction="row">
        {searchTerm && !loading ? (
          <Button 
            style={{
              width: "40%",
              borderRadius: 5,
              margin: "0 auto",
              backgroundColor: "var(--brown)",
            }}
            // On click we are rendering another 8 books
            onClick={() => {
              num += 8;
              setItems(num);
            }}
            variant="contained"
          >
            Load More
          </Button>
        ) : null}
      </Stack>
    </Wrapper>
  );
};

export default BooksGrid;
