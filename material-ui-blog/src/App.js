import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
 appBar: {
   backgroundColor: "#ffffff"
 },
 appBarTypography :{
  color: "#888234"
 }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" className = {classes.appBarTypography}>
            Blog
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
