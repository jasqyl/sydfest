import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ConcertDetails from '../concertDetailsModule';
import {addEvent} from '../utils';

export default function BasicCard({data, refreshConcerts}) {
  return (
    <Card sx={{ minWidth: { xs: '64vw', md: "400px" }, backgroundImage: `url("${data.image}")`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize:'cover', pb: '3rem', border: '1px solid gray', margin: '0px 0.5rem' }}>
      <CardContent sx={{minHeight: "18rem"}}>
        <Typography sx={{backgroundColor: 'white', opacity: 0.8}} variant='body2' align='left' display='flex' alignItems='center' mb={1}>
          <LocationOnOutlinedIcon/> {data.venue}
        </Typography>
        <Typography sx={{backgroundColor: 'white', opacity: 0.8}} variant='body2' align='left' display='flex' alignItems='center' mb={1}>
          <CalendarMonthOutlinedIcon />{data.date}
        </Typography>
        <Typography sx={{backgroundColor: 'white', opacity: 0.8}} variant='body2' align='left' display='flex' alignItems='center' mb={1}>
          <PersonOutlineOutlinedIcon />{data.artist}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent: 'center'}}>
        <ConcertDetails buttonText="More Info" size="small" data={data} refreshConcerts={refreshConcerts}/>
        <Button size="small" variant="contained" onClick={()=>{addEvent(data); refreshConcerts()}}>Add Event</Button>
      </CardActions>
    </Card>
  );
}