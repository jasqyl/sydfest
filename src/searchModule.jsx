import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Search from './search';
import ResultCard from './resultCard';
import {addEvent} from './utils';

export default function ConcertSearchDialog({ allList, onSave, Control }) {
  const [open, setOpen] = React.useState(false);
  const [filteredConcerts, setFilteredConcerts] = useState([]);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onAddEvent = (concert) => () => {
    addEvent(concert);
    onSave();
    handleClose()
  }

  return (
    <>
      <Control handleOpen={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Concert Search
        </DialogTitle>
        <DialogContent>
          <Search allList={allList} onSearch={setFilteredConcerts}/>
          {
            filteredConcerts.map(concert => <ResultCard key={concert.id} data={concert} onSave={onAddEvent(concert)}/>)
          }
        </DialogContent>
      </Dialog>
    </>
  );
}