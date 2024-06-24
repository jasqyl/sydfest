import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ConcertDetails from './concertDetailsModule';

export default function ResultCard({data, onSave}) {
  console.log(data)
  return (
    <Card sx={{ display: 'flex', mt: '1rem' }}>
      <CardMedia
        component="img"
        sx={{ width: {xs: '30%', md: '50%'}, backgroundColor: 'grey', minWidth: {xs: '6rem', md: '9rem'} }}
        image={data.image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="subtitle1" textAlign='left'>
            <b>Event Name:</b> {data.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" textAlign='left'>
            <b>Date:</b> {data.date}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" textAlign='left'>
            <b>Venue:</b> {data.venue}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent:'space-between', alignItems: 'center', pl: 1, pb: 1, pr: 1, flexDirection: {xs: 'column', md: 'row'} }}>
          <ConcertDetails buttonText='More Info' size='small' data={data}/>
          <Button aria-label="add event" variant='contained' size='small' sx={{marginTop: {xs: '0.5rem', md: '0'}}} onClick={onSave}>
            Add Event
          </Button>
        </Box>
      </Box>
    </Card>
  );
}