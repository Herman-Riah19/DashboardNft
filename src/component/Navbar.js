import React, { useContext, useState } from 'react'
import {default as Notification} from '../asset/icon/Notification.png'
import {Box, Button, Container, Dialog, DialogContent, DialogTitle} from '@mui/material'
import GridContainer from './Grid/GridContainer'
import GridItem from './Grid/GridItem'
import {AuthContext} from '../context/Context'
import LoginDialog from './LoginDialog'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const { user, logout } = useContext(AuthContext)

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = (value) => {
        setOpen(false);
    }

    const handleLogoutClicked = () => {
        return (
            <Dialog open={open}>
                <DialogTitle>Log Out</DialogTitle>
                <DialogContent>
                    <Button onClick={!open} variant='contained'>Cancel</Button>
                    <Button onClick={logout} variant='outlined'>Log out</Button>
                </DialogContent>
            </Dialog>
        )
    }

    return (
    <Container>
        {user ? (
            <GridContainer>
                <GridItem xs={2}>
                    <Button variant='outlined'>Earn Rewards</Button>
                </GridItem>
                <GridItem xs={2}>
                    <Button variant='outlined'>
                        <img src={Notification} />
                    </Button>
                </GridItem>
                <GridItem xs={2}>
                    <Button variant='outlined' onClick={handleLogoutClicked}>
                        Logout
                    </Button>
                </GridItem>
            </GridContainer>
        ) : (
            <GridContainer>
                <GridItem xs={6}>
                    <Button variant='outlined' onClick={handleClickOpen}>Log In</Button>
                </GridItem>
                <GridItem xs={6}>
                    <Button variant='contained'>
                        Sign Up
                    </Button>
                </GridItem>
                <LoginDialog 
                    open={open}
                    onClose={handleClose}/>
            </GridContainer>
        )}
    </Container>
  )
}

export default Navbar