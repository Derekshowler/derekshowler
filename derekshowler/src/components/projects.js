import React from 'react';
import {Tab, Tabs, Card, CardTitle, CardActions, CardMenu, Button, IconButton, CardText } from 'react-mdl'

const CustomGrid = (props) => (
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >
            {props.name}
        </CardTitle>
        <CardText>
            This will eventually be my projects page
        </CardText>
        <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>

        </CardMenu>
    </Card>
);

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        switch(this.state.activeTab) {
            case 0:
                return (<div className="projects-grid"><CustomGrid name="This is React"/></div>);
            case 1:
                return (<div className="projects-grid"><CustomGrid name="This is Cypress"/></div>);
            case 2:
                return (<div className="projects-grid"><CustomGrid name="This is Jenkins"/></div>);
            default:
                return (<div className="projects-grid"><CustomGrid name="This is Jest"/></div>);
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Cypress</Tab>
                    <Tab>Jenkins</Tab>
                    <Tab>Jest</Tab>
                </Tabs>
                <section className="projecs-grid">
                    {this.toggleCategories()}
                </section>
            </div>
        );
    }
}

export default Projects;