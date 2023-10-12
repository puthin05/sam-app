/*import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import { Router,Link, Route, Routes } from 'react-router-dom';
import Form from './Form';


export default function Ani() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <img width="100" src='https://aniwatch.to/images/logo.png'></img>
          <Typography variant="h4" component="div" sx={{ flexGrow: 0.02}}>
           <a href="https://aniwatch.to/home"> Home</a>
          </Typography>
          <Typography variant="h4" component="div" sx={{ flexGrow: 0.02}}>
           <a href="https://aniwatch.to/movie">Movies</a>
          </Typography>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1}}>
            <a href="https://aniwatch.to/top-airing">Top Airing</a>
          </Typography>
          <Button color="inherit">
            <link to='/form' >Login</link>
          </Button>

          
        </Toolbar>
      </AppBar>
      <Router>
      <Routes>
        <Route path="./form" element={<Form/>}/>

      </Routes>
      </Router>
      <img width="100%" src="data:image/jpeg;base64,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"/>
      </Box>
    );
  }*/
  
  
  
  import * as React from 'react';
  import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
  import AppBar from '@mui/material/AppBar';
  import Box from '@mui/material/Box';
  import Toolbar from '@mui/material/Toolbar';
  /*import Typography from '@mui/material/Typography';*/
  import Button from '@mui/material/Button';
  import IconButton from '@mui/material/IconButton';
  import MenuIcon from '@mui/icons-material/Menu';
  /*import InfoIcon from '@mui/icons-material/Info';*/
  import Form from './Form';
  import "./adi.css";
  export default function Ani() {
    return (
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <img width="100px" src="https://s2.bunnycdn.ru/assets/t4/s1/images/logo.png" alt="logo" />             
              <Button color="inherit">
                <Link to="/Form" className='a'>Login</Link>
              </Button>
              <Button color="inherit">
                <a href='https://zorox.to/home' className='a'>Home</a>
              </Button>
              <Button color="inherit">
                <a href='https://zorox.to/trending' className='a'>Trending</a>
              </Button>
              <Button color="inherit">
                <a href='https://zorox.to/updated' className='a'>Recent Update</a>
              </Button>
              <Button color="inherit">
                <a href='https://zorox.to/newest' className='a'>New Release</a>
              </Button>
            </Toolbar>
          </AppBar>
          <Routes>

            
            <Route path="/Form" element={<Form />} />
          </Routes>
        </Box>
      </Router>
    );
  }
  
  
  
