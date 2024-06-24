import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useState } from 'react';

const searchByArtist = (list = [], keyword) => {
  return list.filter(c => {
    return new RegExp(`${keyword}`, 'i').test(c.artist);
  })
}

const searchByVenue = (list = [], keyword) => {
  return list.filter(c => {
    return new RegExp(`${keyword}`, 'i').test(c.venue);
  })
}

const searchByGenre = (list = [], keyword) => {
  return list.filter(c => {
    return new RegExp(`${keyword}`, 'i').test(c.genre);
  })
}

const searchByAll = (list = [], keyword) => {
  const artistList = searchByArtist(list, keyword)
  const venueList = searchByVenue(list, keyword)
  const genreList = searchByGenre(list, keyword)
  return [...artistList, ...venueList, ...genreList]
}

export function Search({allList, onSearch}) {
  const [filter, setFilter] = useState('all');
  const [keyWords, setKeywords] = useState('');
  const getSearchResult = () => {
    switch (filter) {
      case 'all':
        return searchByAll(allList, keyWords)
      case 'artist':
        return searchByArtist(allList, keyWords)
      case 'genre':
        return searchByGenre(allList, keyWords)
      case 'venue':
        return searchByVenue(allList, keyWords)
      default:
        return searchByAll(allList, keyWords)
    }
  }
  const onSearchClick = () => {
    onSearch(getSearchResult())
  }
  return (
    <Box component="section" >
      <Typography variant='subtitle1' sx={{margin: '1rem 0 1rem 0'}} textAlign="left"><b>Keywords:</b></Typography>
      <Box display="flex" mb="1rem">
        <TextField
          placeholder="Keywords"
          variant="filled"
          onChange={(e) => {setKeywords(e.target.value)}}
          sx={{
            '& .MuiInputBase-input': { pt: '0.5rem' },
            flex: 1,
            mr: '0.5rem'
          }}
        />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant='filled'
          value={filter}
          onChange={(e)=>{setFilter(e.target.value)}}
          sx={{
            flex: 0.5,
            '& .MuiSelect-select': {pt: '0.5rem'}
          }}
        >
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'artist'}>Artist</MenuItem>
          <MenuItem value={'genre'}>Genre</MenuItem>
          <MenuItem value={'venue'}>Venue</MenuItem>
        </Select>
      </Box>
      <Button variant="contained" onClick={onSearchClick}>SEARCH</Button>
    </Box>
  );
}

export default Search;
