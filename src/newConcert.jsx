import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { newEvent } from './utils';

export default function NewConcert({ Control }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Control handleOpen={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            newEvent({
              date: formJson.date,
              name: formJson.concertTitle,
              venue: formJson.venue,
              artist: formJson.artist,
            })
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            id="artist"
            name="artist"
            label="Artist"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            id="date"
            name="date"
            label="Date"
            fullWidth
            variant="standard"
            type='date'
          />
          <TextField
            autoFocus
            required
            id="concertTitle"
            name="concertTitle"
            label="Concert Title"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            id="venue"
            name="venue"
            label="Venue"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit">Save</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}