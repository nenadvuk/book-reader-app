import { useState } from "react";
// Mui
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function TransitionsModal({ bookKey}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const lStorageItems = JSON.parse(window.localStorage.getItem(bookKey));

  return (
    <div>
      <Button
        style={{
          borderRadius: 5,
          backgroundColor: "var(--medGrey)"
        }}
        variant="contained"
        className="fadeIn"
        endIcon={<EventNoteIcon />}
        onClick={handleOpen}
      >
        View Note
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6">
              Title: {lStorageItems.title}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Note: {lStorageItems.note}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Book read:{" "}
              {lStorageItems.haveRead ? (
                <CheckCircleOutlineTwoToneIcon
                  style={{ backgroundColor: "error" }}
                />
              ) : (
                <CancelTwoToneIcon />
              )}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
