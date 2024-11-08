import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            Hiring Platform
          </Typography>
          <div>
            <Button color="inherit" component={Link} to="/">
              Dashboard
            </Button>
            <Button color="inherit" component={Link} to="/assessments">
              Assessments
            </Button>
            <Button color="inherit" component={Link} to="/jobs">
              Jobs
            </Button>
            <Button color="inherit" component={Link} to="/candidates">
              Candidates
            </Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
