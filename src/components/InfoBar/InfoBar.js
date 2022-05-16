
// Styles
import { Wrapper, Content } from "./InfoBarStyle";

const InfoBar = ({ title, bookAdded }) => {
  
  return (
    <Wrapper>
      <Content>
        <span className="fadeIn">{title}</span>
        {/*Depending if we just add the book, or visited page again, message is shown */}
        {bookAdded && (
          <span style={{ animationDuration: ".2s" }} className="zoomIn">
            <i>This Book Is On Your List</i>
          </span>
        )}
      </Content>
    </Wrapper>
  );
};

export default InfoBar;
