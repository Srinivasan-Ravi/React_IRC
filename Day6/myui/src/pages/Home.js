import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
function Home() {
  
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
        <Card style={{ minWidth: 275,backgroundColor:"yellow"}}>
      <CardContent>
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More!</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card style={{ minWidth: 275,backgroundColor:"blueviolet"}}>
      <CardContent>
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More!</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card style={{ minWidth: 275,backgroundColor:"green"}}>
      <CardContent>
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More!</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card style={{ minWidth: 275,backgroundColor:"orangered"}}>
      <CardContent>
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More!</Button>
      </CardActions>
    </Card>
        </Grid>
      </Grid>
    </Box>

    </div>
  )
}

export default Home