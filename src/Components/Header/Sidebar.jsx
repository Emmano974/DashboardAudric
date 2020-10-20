import React from 'react'
import { Link } from "react-router-dom";
import { List, ListItemText, ListItem, ListItemIcon, Drawer, Divider, IconButton, makeStyles, useTheme } from '@material-ui/core';
import clsx from 'clsx'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
}));



 export default function Sidebar(){
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        this.onClose();
        setOpen(false);
    }
        return (
            
            // <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper,}}anchor="left">
            // <div className={classes.toolbar} />
            // <Divider />
            // <div className={classes.rootside}>
            //     <List component="nav" className='root'>{this.props.page.map(pages => (
            //         <Link to={pages.link}>
            //         <ListItem button>
            //             <ListItemIcon>
            //                 {pages.icon}
            //             </ListItemIcon>
            //             <ListItemText>
            //                     {pages.titre}
            //             </ListItemText>
            //         </ListItem>
            //         </Link>
            //     ))}
            //     </List>
            //     </div>
            // </Drawer>
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
              <IconButton onClick={handleClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>{this.props.pages.map((pages) => (
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
          </Drawer>)}