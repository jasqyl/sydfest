import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link'

export const Footer = () => (<Box component="section" p={2}>
  <Typography variant='h5' textAlign="left" mb="1rem">Quick Links</Typography>
  <Box display="flex" flexWrap="wrap">
    <Link width="50%">Add New Concert</Link>
    <Link width="50%">Past Concerts</Link>
    <Link width="50%">Edit Your Concerts</Link>
    <Link width="50%">Concert Search</Link>
  </Box>
</Box>)

export default Footer