import React, { Component } from 'react'
import { Card, CardText, CardActions, CardTitle, CardHeader, CardMedia } from 'material-ui/Card';

export class SignInForm extends Component {
    render() {
        let height = window.screen.availHeight* 0.5;
        let width = window.screen.availWidth* 0.6;
        return (
            <div>
                <center>
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={8} >
                                <Card 
                                    style={{width:width, height:height}}
                                    >
                                    <TextField
                                        hintText="Enter Phone or Email"
                                        /><br />
                                    <TextField
                                        hintText="Password"
                                        /><br />
                                </Card>
                            </Col>
                        </Row>
                    </Grid>
                </center>
            </div>
        )
    }
}

export default SignInForm