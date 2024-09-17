import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to Supreme High School
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5">Students</Typography>
            <Typography>View and manage student information</Typography>
            <Button variant="contained" color="primary" style={{ marginTop: '10px' }} href="/students">
              Manage Students
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5">Teachers</Typography>
            <Typography>View and manage teacher information</Typography>
            <Button variant="contained" color="primary" style={{ marginTop: '10px' }} href="/teachers">
              Manage Teachers
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5">Courses</Typography>
            <Typography>View and manage available courses</Typography>
            <Button variant="contained" color="primary" style={{ marginTop: '10px' }} href="/courses">
              Manage Courses
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
