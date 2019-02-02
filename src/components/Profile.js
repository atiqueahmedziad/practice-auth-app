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
import AvatarPic from '../images/man.png'

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
        const {classes} = this.props;

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Grid container justify="center" alignItems="center">
                        <Avatar alt="Remy Sharp" src={AvatarPic} className={classes.avatar}/>
                    </Grid>
                    <Typography style={{marginBottom: '15px', textAlign: 'center'}} variant="h5" component="h2">
                        Welcome <span className={classes.span}>Name</span> !
                    </Typography>
                    <Typography variant="subheading" gutterBottom>
                        <span className={classes.span}>Full Name:</span> Atique Ahmed Ziad
                    </Typography>
                    <Typography variant="subheading" gutterBottom>
                        <span className={classes.span}>Email:</span> softfilebd@gmail.com
                    </Typography>
                    <Typography variant="subheading" gutterBottom>
                        <span className={classes.span}>Phone:</span> 01521498050
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button style={{margin: '0 Auto'}} size="medium" color="secondary" fullWidth>Signout</Button>
                </CardActions>
            </Card>
        );
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
