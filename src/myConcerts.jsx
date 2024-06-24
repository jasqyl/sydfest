import Typography from '@mui/material/Typography';
import MyConcertItem from './myConcertBox';
import Container from '@mui/material/Container';
import {getMyEvents, getDate} from './utils'
import Carousel from './carousel'
import OverviewTab from './overviewTab';

export const MyConcerts = ({refreshConcerts, allConcerts}) => {
  const myConcerts = getMyEvents() || [];
  const upcomingConcerts = []
  const pastConcerts = []
  myConcerts.forEach(c => {
    if(getDate(c.date) > Date.now()) upcomingConcerts.push(c);
    else pastConcerts.push(c);
  });
  const carouselData = allConcerts.slice(0, 5);
  return(
  <Container sx={{my: '2rem'}}>
    <Typography variant='h5' sx={{margin: '2rem 0'}}>What's On</Typography>
    <Carousel data={carouselData} refreshConcerts={refreshConcerts}/>
    <OverviewTab allConcerts={allConcerts} refreshConcerts={refreshConcerts}/>
    <Typography variant='h5' sx={{margin: '0 5rem 2rem 5rem', textDecoration: 'underline', textUnderlineOffset: '1rem'}}>My Concerts</Typography>
    <Typography variant='subtitle1' mb='1rem' textAlign='left'>Upcoming Events</Typography>
    {
      upcomingConcerts.length > 0 
      ? upcomingConcerts.map(c => <MyConcertItem data={c} key={c.id}/>) 
      : <Typography mb='1rem' mt='1rem' textAlign='left'>No upconming event</Typography>
    }
    <Typography variant='subtitle1' mb='1rem' mt='1rem' textAlign='left'>Past Events</Typography>
    {
      pastConcerts.length > 0 
      ? pastConcerts.map(c => <MyConcertItem data={c} key={c.id}/>) 
      : <Typography mb='1rem' mt='1rem' textAlign='left'>No past events</Typography>
    }
  </Container>
)}

export default MyConcerts