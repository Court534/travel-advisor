import React from 'react';
import { Box, Typeography, Buttons, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

import useStyles from './PlaceDetailStyles'

const PlaceDetail = ({ place }) => {
  const classes = useStyles();
  

  return (
   <Card elevation={6}>
    <CardMedia
      style={{ height: 350 }}
      image={place.photo ? place.photo.image.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
    />
   </Card>
  )
}

export default PlaceDetail;