import React from 'react';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';

const DashboardPage = () => {
  return (
    <Grid container spacing={3} padding={2}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Job Postings
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Frontend Developer</Typography>
            <Typography variant="body2">3 Candidates Applied</Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              View Details
            </Button>
          </CardContent>
        </Card>
      </Grid>
      {/* Add more job cards */}
    </Grid>
  );
};

export default DashboardPage;
