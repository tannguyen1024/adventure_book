import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, CardActions, Typography, withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
    card: {
        maxWidth: 200,
        backgroundColor: 'rgba(255, 217, 154, 0.3)',
        marginLeft: '25px',
        marginTop: '25px',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class Admin_User extends Component {

    render() {
        const { classes } = this.props;

        return (
            <>
                {
                    this.props.users.map(user =>
                        <div key={user.id}><Card className={classes.card}>
                            <CardContent>

                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Name
                                </Typography>

                                <Typography variant="h5" component="h2">
                                    {user.username}
                                </Typography>

                                <br/>

                                <Typography className={classes.pos} color="textSecondary">
                                    Admin Status:
                                </Typography>

                                <Typography component="p">
                                    {user.admin ? 'Yes' : 'No'}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="primary" size="small">Promote to Admin</Button>
                            </CardActions>
                        </Card></div>)
                }
            </>
        )
    }
}

Admin_User.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = reduxState => ({ users: reduxState.userAll, user: reduxState.user });
export default connect(mapStateToProps)(withStyles(styles)(Admin_User));