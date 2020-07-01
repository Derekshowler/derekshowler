import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import showler from "./pictures/derekshowler.jpg";

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <img
              src="/images/derekshowler.jpg"
              alt="Derek Showler"
              style={{height: '250px'}}
              className="contactAvatar"
               />
              <h2>Derek Showler's story:</h2>
              <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                Growing up in rural Missouri, Derek quickly became fascinated by computers and outdoor activity. 
                
                Passionate for getting out a small town, Derek used his athleticism to help him land a college scholarship
                
                at a nearby private school, Southwest Baptist University. 

                In college, Derek studied mathematics alongside computer science. On top of his studies, Derek competed at the NCAA

                Division II level for three sports. Indoor Track, Outdoor Track, and Cross Country. 

                In 2015, Derek represented his team at the NCAA Cross Country Championships. The team placed 13th in division II,

                the highest ever achieved by the university.

                <br></br>
                <br></br>  
                
                Upon graduating, Derek entered into the software field where he has primarily been focused on expanding and shaping

                companies automation culture. With a passion to develop and maintain automation frameworks. 
                
                Derek strives to automate system functionality and improve processes. In order to provide top notch coverage, 
                
                Derek tracks product updates and translates future requirements into viable regression test cases. 

                His industry experience ranges from government air traffic control systems,  insurance, and even professional sport systems. 
                
                Derek enjoys automating software and is well versed in Javascript, Cypress, Selenium, Java, Jest, CI/CD pipelines, and Jenkins. 
                

              </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Information:</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    Phone: (417) 664 -3792
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    email: derekshowler@gmail.com
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;