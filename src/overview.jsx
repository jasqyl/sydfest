import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const Overview = () => (<Box component="section" py={2}>
  <Typography variant='h5' sx={{margin: '0 5rem 2rem 5rem', textDecoration: 'underline', textUnderlineOffset: '1rem'}}>Getting Started</Typography>
  <Typography paragraph>Welcome to SydFest Tracker, the ultimate companion for live music in Sydney. Here're some tips about how to jump into the action:</Typography>
  <Typography paragraph>Begin your journey by <b>Add New Concert</b> to add details of the next gig you're attending. Just the name, date, and venue, and you're set!</Typography>
  <Typography paragraph>Curious about what's happening around town? Use the <b>Concert Search</b> to explore events by date, artist, or venue. It's your gateway to Sydney's vibrant music scene.</Typography>
</Box>)

export default Overview