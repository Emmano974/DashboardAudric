import React, { Component } from 'react'
import { AppBar, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness3Icon from '@material-ui/icons/Brightness3';

import DashboardIcon from '@material-ui/icons/Dashboard';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Dashboard from '../Content/Dashboard/Dashboard'
import Devis from '../Content/Devis/Devis'
import Sidebar from './Sidebar';
import Content from './Content';

const drawerWidth = 240;

const styles = theme => ({
   
    menuButton: {
        marginRight: theme.spacing(2),
      },
    contentside: {
            flexGrow: 1,
            padding: theme.spacing(3),
          },
    title : {
        flexGrow:1,
    },
    root: {
        display: 'flex',
      },
      appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      
      // necessary for content to be below app bar
      
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      },
      });

    
class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            page : [{
                link:"/Dashboard",
                icon:<DashboardIcon />,
                titre: 'Dashboard',
                component:<Dashboard/>
            },
            {
                link:"/Devis",
                icon:<DashboardIcon />,
                titre: 'Devis',
                component:<Devis/>
            }
        ],
        ShowMenu:false,
        }
    }




    ShowMenu = () => {
        this.setState({ShowMenu:!this.state.ShowMenu})
    }

        render(){
            const { classes } = this.props;

            
            
        return (
        <div className={classes.root}><BrowserRouter >
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <Typography className={classes.title}  variant='h6'>
                    <Switch>{this.state.page.map(pages => (
                        <Route path={pages.link}>
                                {pages.titre}
                        </Route>
                    ))}
                    </Switch>
                    </Typography>
                    <IconButton color='inherit' onClick={this.handleProfileMenuOpen}>
                        <Brightness5Icon/>
                    </IconButton >
                    <IconButton color='inherit'>
                        <Brightness3Icon/>
                    </IconButton>
                    <IconButton color='inherit' onClick={this.ShowMenu}>
                        <AccountCircleIcon/>
                        </IconButton>
                    <IconButton color='inherit'>
                        <NotificationsIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            
                    <Sidebar page={this.state.page}/>
                    <Content page={this.state.page}/>
                </BrowserRouter>
        </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Header)  