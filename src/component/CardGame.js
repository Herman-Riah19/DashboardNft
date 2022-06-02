import React from 'react'
import {Card, CardContent, CardMedia, Typography, CardActions, Button} from '@mui/material'

const CardGame = ({id, title, description, image}) => {
  return (
    <Card sx={{ maxWidth: 400, }}>
      <CardMedia
        component="img"
        height="300"
        width="400"
        image={image}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography fontFamily='Nunito' variant="body2" >
         {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{fontFamily: 'Nunito'}} variant="contained" primary>Play</Button>
      </CardActions>
    </Card>
  )
}

export default CardGame