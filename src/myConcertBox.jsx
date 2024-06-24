import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditConcertModule from './editConcert'
import {removeEvent} from './utils';

export const MyConcerts = ({data}) => {
  const [open, setOpen] = useState(false);
  const onRemove = () => {
    removeEvent(data)
    window.location.reload()
  }

  return(
  <TableContainer component={Paper} sx={{my: '0.5rem'}}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={4} sx={{backgroundColor:'lightgray'}}>{data.date}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Event Name</TableCell>
            <TableCell align="left">Venue</TableCell>
            <TableCell align="left">Artist</TableCell>
            <TableCell sx={{px: 0}}/>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell component="th" scope="row">
              {data.name}
            </TableCell>
            <TableCell align="left">{data.venue}</TableCell>
            <TableCell align="left">{data.artist}</TableCell>
            <TableCell sx={{px: 0}}>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ padding: 0 }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box display='flex'>
                  <img height={130} width={80} style={{objectFit: 'contain', marginRight: '1rem'}} src={data.image} alt='icon' />
                  <Table size="small">
                    <TableHead>
                      <TableRow sx={{backgroundColor:'lightgray'}}>
                        <TableCell>ETA</TableCell>
                        <TableCell>Genre</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {data.eta}
                        </TableCell>
                        <TableCell>{data.genre}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row" align='center'>
                          <Button variant='contained' size='small' onClick={onRemove}>Remove</Button>
                        </TableCell>
                        <TableCell align='center'>
                          <EditConcertModule data={data} Control={({handleOpen}) => <Button size='small' variant='contained' onClick={() => {handleOpen()}}>Edit Event</Button>} />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>)}

export default MyConcerts