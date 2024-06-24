import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {addEvent} from './utils';

export default function ConcertDetails({ buttonText, size, data, refreshConcerts }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen} size={size}>
        {buttonText}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Concert Details
        </DialogTitle>
        <DialogContent>
          <Card>
            <CardMedia
              component="img"
              sx={{ width: '100%', backgroundColor: 'grey', minHeight: '10rem' }}
              image="/static/images/cards/live-from-space.jpg"
              alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="body1" textAlign='left'>
                  <b>Event Name: </b>{data.name}
                </Typography>
                <Typography variant="body1" component="div" textAlign='left'>
                  <b>Artist: </b>{data.artist}
                </Typography>
                <Typography variant="body1" component="div" textAlign='left'>
                  <b>ETA:</b> {data.eta}
                </Typography>
                <Typography variant="body1" component="div" textAlign='left'>
                  <b>Genre:</b> {data.genre}
                </Typography>
                <Typography variant="body1" component="div" textAlign='left'>
                  <b>Date:</b> {data.date}
                </Typography>
                <Typography variant="body1" component="div" textAlign='left'>
                  <b>Venue:</b> {data.venue}
                </Typography>
                <Typography variant="body1" component="div" textAlign='left'>
                  <b>Description:</b> {data.description}
                </Typography>
              </CardContent>
              <Button aria-label="add event" variant='contained' size='small' fullWidth sx={{mb: '1rem'}} onClick={()=> {addEvent(data); refreshConcerts()}}>
                Add Event
              </Button>
              <Button aria-label="add event" variant='contained' size='small' fullWidth onClick={handleClose}>
                Close
              </Button>
            </Box>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
}