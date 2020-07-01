import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="/images/derekshowler.jpg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
                <h1>Derek Showler</h1>
            <hr1/>
                <h2>Software Automation Engineer</h2>

            <hr/>

          <p>Cypress | Selenium | JavaScript | Java | Continuous Integration | Continuous Delivery | Jenkins </p>

        
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
