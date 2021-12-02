import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function CardCustom({developers}) {



  return (
    <Card sx={{ maxWidth: 450, margin: 1,borderRadius: 8  }} >
      <CardMedia
        component="img"
        height="340"
        width='wrap'
        image={developers.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {developers.courseName}
        </Typography>
        <Typography variant="body2" color="red">
         {developers.price} $
        </Typography>
      </CardContent>

    </Card>
  );
}
