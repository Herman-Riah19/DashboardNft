import React, {useContext, useState} from 'react'
import {Dialog, DialogTitle, List, ListItem,ListItemText, ListItemAvatar, Avatar } from '@mui/material'
import PropTypes from 'prop-types'

import {default as googleIcon} from '../asset/icon/icon_google.png'
import {default as facebookIcon} from '../asset/icon/icon_facebook.png'
import {default as metamaskIcon} from '../asset/icon/icon_metamask.png'

import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { useEthers, useEtherBalance} from '@usedapp/core'
import { AuthContext } from '../context/Context'

const LoginDialog = (props) => {
    const { onClose, open} = props;

    const {activateBrowserWallet, account} = useEthers()
    const etherBalance = useEtherBalance(account)

    const context = useContext(AuthContext)

    const handleGoogleResponse = (response) => {
      context.login(response)
    }

    const handleFacebookResponse = (response) => {
      context.login(response)
    }

    const handleConnetWallet = (response) => {
      activateBrowserWallet()
      context.login(response)
    }
  
    return (
      <Dialog onClose={onClose} open={open} >
        <DialogTitle>Connect with</DialogTitle>
        <List sx={{ pt: 1 }}>
            <GoogleLogin
              clientId={process.env.GOOGLE_SERVER_ID}
              render={renderProps => (
                <ListItem button onClick={renderProps.onClick}>
                  <ListItemAvatar>
                    <img src={googleIcon} />
                  </ListItemAvatar>
                  <ListItemText primary='Google ID' />
                </ListItem>
              )}
              onSuccess={handleGoogleResponse}
              onFailure={handleGoogleResponse}
              isSignedIn={true} />

            <FacebookLogin
              appId={process.env.FACEBOOK_SERVER_ID}
              autoLoad={true}
              render={renderProps => (
                <ListItem button onClick={renderProps.onClick}>
                  <ListItemAvatar>
                    <img src={facebookIcon} />
                  </ListItemAvatar>
                  <ListItemText primary='Facebook' />
                </ListItem>
              )}
              callback={handleFacebookResponse}/>
            {!account && (
              <ListItem button onClick={handleConnetWallet}>
                <ListItemAvatar>
                  <img src={metamaskIcon} />
                </ListItemAvatar>
                <ListItemText>Meta Mask</ListItemText>
              </ListItem>
            )}
        </List>
      </Dialog>
    )  
}

LoginDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
    loginType: PropTypes.array.isRequired,
}

export default LoginDialog