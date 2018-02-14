import React from "react";
import {
    Section,
    Row,
    Col,
    Input
} from 'react-materialize';
import styles from './SignIn.css';

import logo from "../../logo/engage.png"
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import API from "../../utils/API";
import FontIcon from 'material-ui/FontIcon';
import {BrowserRouter as Redirect} from "react-router-dom";

const style = {
    margin: 5,
    logo: {
        margin: '-2% 25% -2% 25%',
        width: '50%',
        paddingTop: '5%'
    },
    headline_customer: {
        margin: 25,
        fontSize: 24,
        paddingTop: 16,
        paddingLeft: 5,
        marginBottom: 12,
        fontWeight: 200,
        textAlign: 'center'
    },
    headline_company: {
        margin: 25,
        fontSize: 24,
        paddingTop: 16,
        paddingRight: 5,
        marginBottom: 12,
        fontWeight: 200,
        textAlign: 'center'
    },
    paper: {
        height: '50%',
        width: '60%',
        marginTop: 30,
        textAlign: 'center',
        display: 'inline-block'
    },
    signIn: {
        margin: 10
    }
};

export default class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'a'
        };
    }

    handleChange = (value) => {
        this.setState({value: value});
    };

    state = {
        email: "",
        password: "",
        userId: "",
        redirect: false
    };
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.email && this.state.password) {
            API
                .login({email: this.state.email, password: this.state.password})
                .then((response) => {
                    console.log(response);
                    this.state.redirect = true;
                    this.state.userId = response.data;
                })
                .catch(err => console.log(err));
        }

    }

    render() {
        //    const { redirect } = this.state;    const { redirect_comp } = this.state;
        if (this.state.redirect) {
            return <Redirect to={`/UserHomepage/${this.state.userId}`}/>
        }
        //    if (redirect_comp) {        return <Redirect to='/bushomepage'/>    }
        return (
            <Section>
                <Section>
                    <Col s={12} m={8} l={6}>
                        <div>
                            <img style={style.logo} className="logosize" alt="logo" image src={logo}/>
                        </div>
                    </Col>
                    <div>
                        <Col s={12} m={4} l={4} className="center-align offset-l4">

                            <Paper style={style.paper} zDepth={1}>
                                <Tabs value={this.state.value} onChange={this.handleChange}>

                                    <Tab icon={<FontIcon className="material-icons">face</FontIcon>} label="Customer" value="a">
                                        <div>
                                            <h2 style={style.headline_customer}>Customer Sign In</h2>

                                            <Row>

                                                <Col s={2} l={3}></Col>
                                                <Input
                                                    s={8} l={6}
                                                    label="Email"
                                                    name="email"
                                                    type="email"
                                                    className='offset-l3'
                                                    value={this.state.email}
                                                    onChange={e => this.change(e)}/>
                                            </Row>
                                            <Row>
                                                <Col s={2} l={3}></Col>
                                                <Input
                                                    s={8} l={6}
                                                    label="Password"
                                                    name="password"
                                                    type="password"
                                                    className='offset-l3'
                                                    value={this.state.password}
                                                    onChange={e => this.change(e)}/>
                                            </Row>
                                            <Row>
                                                <Col s={4} className="center-align offset-l4 offset-s3">
                                                    <RaisedButton label="Sign In" primary={true} style={style.signIn}/>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col s={8} m={6} l={6} className="center-align offset-l3 offset-m3 offset-s2">
                                                    <p>Not Engaging yet? {< FlatButton href = '/SignUp' label = "Sign Up" primary = {
                                                            true
                                                        }
                                                        style = {
                                                            style
                                                        } />}</p>
                                                </Col>
                                            </Row>

                                        </div>
                                    </Tab>
                                    <Tab icon={<FontIcon className="material-icons">store</FontIcon>} label="Company" value="b">
                                        <div>
                                            <h2 style={style.headline_company}>Company Sign In</h2>
                                            <Row>

                                                <Col s={2} l={3}></Col>
                                                <Input
                                                    s={8} l={6}
                                                    label="Email"
                                                    name="email"
                                                    type="email"
                                                    className='offset-l3'
                                                    value={this.state.email}
                                                    onChange={e => this.change(e)}/>
                                            </Row>
                                            <Row>
                                                <Col s={2} l={3}></Col>
                                                <Input
                                                    s={8} l={6}
                                                    label="Password"
                                                    name="password"
                                                    type="password"
                                                    className='offset-l3'
                                                    value={this.state.password}
                                                    onChange={e => this.change(e)}/>
                                            </Row>
                                            <Row>
                                                <Col s={4} className="center-align offset-l4 offset-s3">
                                                    <RaisedButton label="Sign In" primary={true} style={style.signIn}/>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col s={8} m={6} l={6} className="center-align offset-l3 offset-m3 offset-s2">
                                                    <p className="sign-in-txt">Not Engaging yet? {< FlatButton href = '/SignUp' label = "Sign Up" primary = {
                                                            true
                                                        }
                                                        style = {
                                                            style
                                                        } />}</p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </Paper>
                        </Col>
                    </div>

                </Section>
            </Section>

        );
    }
}