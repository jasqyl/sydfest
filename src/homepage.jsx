import Overview from './overview';
import SearchGuide from './searchGuide';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ConcertSearchDialog from './searchModule';
function Homepage({refreshConcerts, allConcerts}) {
  return (
    <Container>
      <Overview />
      <ConcertSearchDialog allList={allConcerts} size="sm" onSave={refreshConcerts} Control={({handleOpen}) =>       
        <Button variant="contained" onClick={handleOpen}>
        Search Concerts
      </Button>}/>
      <SearchGuide />
    </Container>
  );
}

export default Homepage;
