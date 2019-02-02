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
import {Link} from "react-router-dom";
import styleAuth from './styles/stylesAuth';

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
        console.log(this.state.email, this.state.password)
    };

    render() {
        const { classes } = this.props;
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
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" onChange={this.handleChange} name="email" autoComplete="email" autoFocus/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" onChange={this.handleChange} type="password" id="password" autoComplete="current-password"/>
                        </FormControl>
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
                    <p>Don't have an account ? <Link to={'/signup'}>Sign up here!</Link></p>
                </Paper>
            </main>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleAuth)(SignIn);
