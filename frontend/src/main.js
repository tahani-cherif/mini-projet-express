
import './main.css';
import { styled } from '@mui/material/styles';
import {Box,Grid,Paper} from '@mui/material'
import React,{ useState } from'react'
import {Link} from 'react-router-dom' 
function Main() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1976D2' : '#1976D2',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color:'white',

  }));
  return (
    <div className="App">
  <Box sx={{ flexGrow: 1 }} className="box">
      <Grid container spacing={1}>
      <Link to='/insc'>  <Grid item xs >
      <Item className='item'>Inscription</Item>  
        </Grid>
        </Link>
        <Link to='/affich'>
        <Grid item xs>
          <Item className='item'>Affichage </Item>
        </Grid>
        </Link>
        <Link to='/affichid'>
        <Grid item xs>
          <Item className='item'>Affichage user by Id</Item>
        </Grid>
        </Link>
      </Grid>
     
    </Box>
    <Box sx={{ flexGrow: 1 }} className="box2">
    <Grid container spacing={3}>
    <Link to='/updite'>
      <Grid item xs>
          <Item className='item2'>Update by Id</Item>
        </Grid>
        </Link>
        <Link to='/delete'>
        <Grid item xs>
          <Item className='item'>Delete by Id</Item>
        </Grid>
        </Link>
        </Grid>
        </Box>
    </div>
  );
}

export default Main;
