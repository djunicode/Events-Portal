import * as React from 'react';
import Button from '@mui/material/Button';
import { Grid, TextField, Typography } from '@mui/material';

export default function BasicButtons() {
  return (
  <>
       <Grid container spacing={2} sx={{ padding: "50px" }}>
          <Grid item md={12} sx={{ justifyContent: "center", display: "flex" }}>
            Create Your Event
          </Grid>
          <Grid item md={6} >
            <Typography variant="h5">EventName</Typography>
            <TextField disabled id="outlined-basic" variant="outlined" fullWidth />
          </Grid>
          <Grid item md={6}>
            <Typography variant="h5">Registration Link</Typography>
            <TextField disabled id="outlined-basic" variant="outlined" fullWidth />
          </Grid>

          <Grid item md={6} >
            <Typography variant="h5">About the Event</Typography>
            <TextField disabled id="outlined-basic" variant="outlined" fullWidth />
          </Grid>
          <Grid item md={6}>
            <Typography variant="h5">Maximum Participant</Typography>
            <TextField disabled id="outlined-basic" variant="outlined" fullWidth />
          </Grid>


          
          <Grid item md={3} >
            <Typography variant="h5">Date</Typography>
            <TextField id="outlined-basic" variant="outlined" fullWidth />
          </Grid>
          <Grid item md={3} >
            <Typography variant="h5">time</Typography>
            <TextField id="outlined-basic" variant="outlined" fullWidth />
          </Grid>{" "}
          <Grid item md={6}>
            <Typography variant="h5">Any other info </Typography>
            <TextField disabled id="outlined-basic" variant="outlined" fullWidth />
          </Grid>
          <Grid item md={6} >
            <Typography variant="h5">add photos</Typography>
            <TextField  id="outlined-basic" variant="outlined" fullWidth />
          </Grid>{" "}
          </Grid>
        
      <Button variant="outlined"> Create Event</Button>
  </>
    
  );
}

