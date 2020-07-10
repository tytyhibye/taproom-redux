import React from 'react';
import Header from "./Header";
import BeerControl from "./BeerControl";
import { Grid } from "@material-ui/core";
import '../App.css';

function App() {
  return (
    <React.Fragment>
      <div className="bg">
        <Grid container direction="column">
          <Grid item><Header/></Grid>
            <Grid item container>
            <Grid item xs={0} sm={2}/>
            <Grid item xs={12} sm={8} className="card">
              <BeerControl/>
            </Grid>
            <Grid item xs={0} sm={2}/>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default App;
