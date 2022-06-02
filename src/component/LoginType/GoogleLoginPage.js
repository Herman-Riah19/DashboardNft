import React, {useState} from 'react'
//import { AuthContext } from '../../security/context'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = '37253827536-bt3japo8ar971neam60noodsqihbs2qv.apps.googleusercontent.com'

function GoogleLoginPage() {

  const handleGoogleResponse = (response) => {
    console.log(response)
  }

  return (
        <GoogleLogin
          clientId={clientId}
          buttonText='Google ID'
          onSuccess={handleGoogleResponse}
          onFailure={handleGoogleResponse}
        />
  );
}
 
export default GoogleLoginPage;