import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {Link, Redirect} from "react-router-dom";
import styleAuth from './styles/stylesAuth';
import {signIn} from '../store/actions/authAction';
import {compose} from 'redux';
import {connect} from "react-redux";
import FormStyle from './styles/FormStyle';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = e => this.setState({
        [e.target.id] : e.target.value
    });

    handleSubmit = e => {
        e.preventDefault();
        this.props.signIn(this.state);
    };

    render() {
        const { classes,auth, authError } = this.props;
        if(auth.uid) return <Redirect to={'/'} />;
        return (
            <main className={classes.main}>
                <CssBaseline/>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} onSubmit={this.handleSubmit}>
                        <MuiThemeProvider theme={FormStyle}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" onChange={this.handleChange} name="email" autoComplete="email" autoFocus/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" onChange={this.handleChange} type="password" id="password" autoComplete="current-password"/>
                        </FormControl>
                        </MuiThemeProvider>
                        <FormControlLabel
                            style={{float: 'left', clear: 'right'}}
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            Sign in
                        </Button>
                    </form>
                    {authError? <p className="auth-error">{authError}</p>: null}
                    <p>Don't have an account ? <Link to={'/signup'}>Sign up here!</Link></p>
                </Paper>
            </main>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        signIn: creds => { dispatch(signIn(creds))}
    }
};

export default compose(
    withStyles(styleAuth),
    connect(mapStateToProps,mapDispatchToProps)
)(SignIn)
