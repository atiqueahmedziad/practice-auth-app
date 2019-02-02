import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PersonPin from '@material-ui/icons/PersonPin';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import stylesAuth from './styles/stylesAuth'
import {Link} from "react-router-dom";

class SignUp extends Component {
    state = {
        FirstName: '',
        LastName: '',
        PhoneNumber: '',
        email: '',
        password: ''
    };

    handleChange = e => this.setState({
        [e.target.id] : e.target.value
    });

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.FirstName, this.state.LastName, this.state.PhoneNumber, this.state.email, this.state.password);
    };

    render() {
        const { classes } = this.props;
        return (
            <main className={classes.main}>
                <CssBaseline/>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <PersonPin/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} onSubmit={this.handleSubmit}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="FirstName">First Name</InputLabel>
                            <Input type="text" onChange={this.handleChange} id="FirstName" name="FirstName" autoComplete="FirstName" autoFocus/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="LastName">Last Name</InputLabel>
                            <Input type="text" onChange={this.handleChange} id="LastName" name="LastName" autoComplete="LastName" />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="PhoneNumber">Phone Number</InputLabel>
                            <Input type="text" onChange={this.handleChange} id="PhoneNumber" name="PhoneNumber" autoComplete="PhoneNumber" />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input type="email" onChange={this.handleChange} id="email" name="email" autoComplete="email" />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input type="password" onChange={this.handleChange} name="password" id="password" autoComplete="current-password"/>
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            Sign up
                        </Button>
                    </form>
                    <p>Already has an account ? <Link to={'/signin'}>Sign in now!</Link></p>
                </Paper>
            </main>
        );
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(stylesAuth)(SignUp);
