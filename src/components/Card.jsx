import { Box, Typography } from '@mui/material'
import React from 'react'

export const Card = () => {
  return (
    <Box className='cardNumber'>
      <Box className='cardNumberArea'>
      <Typography className='cardNumberText'><span>+3500 </span>Pedidos Entregues</Typography>
      <Typography className='cardNumberText'><span>+15 </span>Comércios</Typography>
      <Typography className='cardNumberText'><span>+10</span> Anos no Mercado</Typography>
      </Box>
    </Box>
  )
}
