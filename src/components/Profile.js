import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import AvatarPic from '../images/man.png';
import {compose} from 'redux';
import { connect } from 'react-redux';
import {signOut} from "../store/actions/authAction";
import {Redirect} from "react-router-dom";

const styles = {
    avatar: {
        margin: 18,
        width: 120,
        height: 120,
    },
    card: {
        minWidth: 275,
        maxWidth: 400,
        margin: '40px auto 0',

    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    span: {
        color: '#f50057',
        fontWeight: '500',
    },
};

class Profile extends Component {
    render() {
        const {classes, auth, profile} = this.props;
        //console.log(auth);
        if(!auth.uid) return <Redirect to="/signin" />;
        return profile && profile.FirstName ? (
            <Card className={classes.card}>
                <CardContent>
                    <Grid container justify="center" alignItems="center">
                        <Avatar alt={profile.FirstName + " " + profile.LastName} src={AvatarPic} className={classes.avatar}/>
                    </Grid>
                    <Typography style={{marginBottom: '15px', textAlign: 'center'}} variant="h5" component="h2">
                        Welcome <span className={classes.span}>{profile.LastName}!</span>
                    </Typography>
                    <Typography variant="subheading" gutterBottom>
                        <span className={classes.span}>Full Name:</span> {profile.FirstName? profile.FirstName+" " : ''} {profile.LastName? profile.LastName : ''}
                    </Typography>
                    <Typography variant="subheading" gutterBottom>
                        <span className={classes.span}>Email:</span> {profile.email}
                    </Typography>
                    <Typography variant="subheading" gutterBottom>
                        <span className={classes.span}>Phone:</span> {profile.PhoneNumber}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button style={{margin: '0 auto'}} size="medium" color="secondary" onClick={()=>this.props.signOut()} fullWidth>Signout</Button>
                </CardActions>
            </Card>
        ) : null;
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps,mapDispatchToProps),
)(Profile);
