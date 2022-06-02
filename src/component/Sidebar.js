import React from 'react'
import {default as Ellipse} from '../asset/Ellipse 16.png';
import {default as Game} from '../asset/icon/game.png';
import {default as Leader} from '../asset/icon/leader.png';
import {default as Info} from '../asset/icon/info.png';
import {default as MakePu} from '../asset/icon/make_purchase.png';
import {default as Transfer} from '../asset/icon/transfer.png';
import {default as Invite} from '../asset/icon/invite.png';
import {default as Coupe} from '../asset/icon/Coupe.png';
import {Toolbar, MenuList, MenuItem, ListItemIcon, ListItemText} from '@mui/material'
import { makeStyles } from '@mui/styles';
import SidebarStyle from '../style/SidebarStyle';

const useStyle = makeStyles(SidebarStyle)
const Sidebar = () => {
    const classes = useStyle()

    const itemPassStyle = {
      margin: 1,
      padding: 2,
      '&:hover': {
          background: '#5EC6B826',
          color: '#5EC6B8',
      }
    }

    const itemActiveStyle = {
      margin: 1,
      padding: 2, 
      background: '#5EC6B826',
      color: '#5EC6B8',
      '&:hover': {
        background: '#5EC6B826',
        color: '#5EC6B8',
      }
    }

    return (
    <MenuList className={classes.menu}>
       <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: [1],
            }}
          >
            <ListItemIcon>
                <img src={Ellipse} alt=''/>
            </ListItemIcon>
            <ListItemText>User Name</ListItemText>
        </Toolbar>
        <MenuItem sx={itemPassStyle}>
          <ListItemIcon>
            <img src={Game} alt=''/>
          </ListItemIcon>
          <ListItemText>Games</ListItemText>
        </MenuItem>
        <MenuItem sx={itemPassStyle}>
          <ListItemIcon>
            <img src={Coupe} alt=''/>
          </ListItemIcon>
          <ListItemText>Tournement</ListItemText>
        </MenuItem>
        <MenuItem sx={itemPassStyle}>
          <ListItemIcon>
            <img src={Leader} alt=''/>
          </ListItemIcon>
          <ListItemText>Leader board</ListItemText>
        </MenuItem>
        <MenuItem sx={itemPassStyle}>
          <ListItemIcon>
            <img src={Info} alt=''/>
          </ListItemIcon>
          <ListItemText>Gamifly Info</ListItemText>
        </MenuItem>
        <MenuItem sx={itemActiveStyle}>
          <ListItemIcon>
            <img src={MakePu} alt=''/>
          </ListItemIcon>
          <ListItemText>Make Purchase</ListItemText>
        </MenuItem>
        <MenuItem sx={itemActiveStyle}>
          <ListItemIcon>
            <img src={Transfer} alt=''/>
          </ListItemIcon>
          <ListItemText>Make Transfer</ListItemText>
        </MenuItem>
        <MenuItem sx={itemActiveStyle}>
          <ListItemIcon>
            <img src={Invite} alt=''/>
          </ListItemIcon>
          <ListItemText>Invite Friend</ListItemText>
        </MenuItem>
      </MenuList>
    )
}

export default Sidebar