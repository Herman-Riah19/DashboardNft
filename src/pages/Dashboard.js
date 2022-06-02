import React, {useState} from 'react'
import CardGame from '../component/CardGame'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'
import cardModel from '../model/cardModel'
import {Box, Typography,Container} from '@mui/material'
import GridContainer from '../component/Grid/GridContainer'
import GridItem from '../component/Grid/GridItem'
import styles from '../style/DashboardStyle';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(styles);

const Dashboard = () => {

  const classes = useStyles()

  return (
    <Box className={classes.main} >
      <GridContainer>
        <GridItem xs={3}>
          <Sidebar classes={classes.sidebar} />
        </GridItem>
        <GridItem xs={9}>
        <main role="main">
            <GridContainer className={classes.navbar}>
              <GridItem xs={7}>
                <Typography variant='h4'>
                  Let choose the game
                </Typography>
              </GridItem>
              <GridItem xs={5}>
                <Navbar />
              </GridItem>
            </GridContainer>
            <GridContainer>
              {cardModel.map(item => (
                <GridItem xs={6}>
                  <CardGame 
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    image={item.image} />
                </GridItem>
              ))}
            </GridContainer>
            <Container >
              <Typography varian='p' fontFamily='Nunito' sx={{textAlign: 'center', justifyContent: 'center'}}>
                 By continuing you agree to the Terms of Service and Privacy Policy
              </Typography>
            </Container>
          </main>
        </GridItem>
      </GridContainer>
    </Box>
  )
}

export default Dashboard