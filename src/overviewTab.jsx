import {useState} from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NewConcert from './newConcert';
import ConcertSearchDialog from './searchModule';

export const OverviewTab = ({allConcerts, refreshConcerts}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (<Box component="section" display="flex" py={2}>
  <Typography component="div" sx={{textDecoration: 'underline', textUnderlineOffset: '1rem', display:'flex', alignItems:'center', justifyContent:'center', width: '50%'}}>Overview</Typography>
  <div style={{width: '50%'}}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        + Add Concert <KeyboardArrowDownIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <NewConcert Control={({handleOpen}) => <MenuItem onClick={() => {handleOpen()}}>Enter Concert Info</MenuItem>} />
        <ConcertSearchDialog allList={allConcerts} size="sm" onSave={refreshConcerts} Control={({handleOpen}) =>       
        <MenuItem onClick={handleOpen}>Search For Concert Info</MenuItem>}/>
      </Menu>
    </div>
</Box>)}

export default OverviewTab