import React, { useState } from 'react';
import clsx from 'clsx';
import { createMuiTheme, makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Devis from '../Content/Devis/Devis';
import DashBoard from '../Content/Dashboard/Dashboard';
import Serveurs from '../Content/Serveurs/Serveurs'
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link, Route, Switch } from 'react-router-dom';
import Recettes from '../Content/Recettes/Recettes';
import Factures from '../Content/Factures/Factures'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Menu, MenuItem, Tooltip } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import StorageIcon from '@material-ui/icons/Storage';
import Projets from '../Content/Projets/Projets';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ReceiptIcon from '@material-ui/icons/Receipt';

const drawerWidth = 240;



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  titre : {
    flexGrow : 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(12),
  },
}));

const pages = [{
    link:"/Dashboard",
    icon:<Tooltip title="Dashboard" placement='right'><DashboardIcon /></Tooltip>,
    titre: 'Dashboard',
    component:<DashBoard/>
},
{
    link:"/Devis",
    icon:<Tooltip title="Devis" placement='right'><DescriptionIcon /></Tooltip>,
    titre: 'Devis',
    component:<Devis/>
},
{
    link:"/Factures",
    icon:<Tooltip title="Factures" placement='right'><ReceiptIcon /></Tooltip>,
    titre: 'Factures',
    component:<Factures />
},
{
    link:"/Recettes",
    icon:<Tooltip title="Factures" placement='right'><EqualizerIcon /></Tooltip>,
    titre: 'Recettes',
    component:<Recettes/>
},
{
  link:"/Serveurs",
  icon:<Tooltip title="Serveurs" placement='right'><StorageIcon /></Tooltip>,
  titre: 'Serveurs',
  component:<Serveurs />
},
{
  link:"/Projets",
  icon:<Tooltip title="Projets" placement='right'><EventNoteIcon /></Tooltip>,
  titre: 'Projets',
  component:<Projets />
},
]

export default function MiniDrawer() {
  const [anchorEl, setAnchorEl] = useState(null);
const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [darkMode, setDarkMode] = useState(false)

const teme = createMuiTheme({
  palette: {
    type: darkMode ? 'dark' : 'light'
  }
})




  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );



  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  
  return (
    <ThemeProvider theme={teme}>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.titre}><Switch>{pages.map((pages) => (
                                <Route path={pages.link}>
                                    {pages.titre}
                            </Route>
                        ))}
                        </Switch>
          </Typography>
          {darkMode ? (<IconButton color='inherit' onClick={()=> setDarkMode(!darkMode)}>
                        <Brightness3Icon/>
                    </IconButton >):( <IconButton color='inherit' onClick={()=> setDarkMode(!darkMode)}>
                        <Brightness5Icon/>
                    </IconButton>)}
          
                   
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List component="nav">{pages.map((pages) => (
                    <Link to={pages.link}>
                    <ListItem button>
                  
                        <ListItemIcon>
                            {pages.icon}
                        </ListItemIcon>
                        <ListItemText>
                                {pages.titre}
                        </ListItemText>
                    </ListItem>
                    </Link>
                ))}
                </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
                        
        <Switch>{pages.map((pages) => (
          <Route path={pages.link}>
            {pages.component}
          </Route>
        ))}
        </Switch>
       </main>
      </div>
      </ThemeProvider>
  );
}