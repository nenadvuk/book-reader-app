// Styles
import { Wrapper, Content } from "./InfoBarStyle";
// Mui
import TransitionsModal from "../Modal/Modal";

const InfoBar = ({ title, bookAdded, bookKey }) => {

  const lStorageItems = JSON.parse(window.localStorage.getItem(bookKey));
  // const reader = JSON.parse(window.localStorage.getItem("read-books"));

  return (
    <Wrapper>
      <Content>
        <span className="fadeIn">{title}</span>
        {lStorageItems && lStorageItems.note !=="" ? (
          <TransitionsModal bookKey={bookKey} myPage={false}/>
        ) : null}
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
