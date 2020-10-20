import React, { Component } from 'react'
import {withStyles } from '@material-ui/core';


import { Route, Switch } from 'react-router-dom';


const styles = theme => ({
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      },
      });

    
class Content extends Component{
    render(){
            const { classes } = this.props;
        return (
       
                <main className={classes.content}>
                        
                    <Switch>{this.props.pages.map(pages => (
                        <Route path={pages.link}>
                                {pages.component}
                        </Route>
                    ))}
                    </Switch>
                    </main>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Content)  