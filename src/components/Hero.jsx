import { Box, Typography } from "@mui/material";
import React from "react";
import WhatsappIcon from '../assets/whatsappIcon.svg'
import Woman  from '../assets/woman.svg'
export const Hero = () => {
  return (
    <Box id="hero">
      <Box className='text'>
        <Typography
          sx={{
            color: "#00856F",
            fontSize: "14px",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          BOAS-VINDAS A FS HORTIFRUTI 👋
        </Typography>
        <Typography sx={{ fontWeight: 700, fontSize:  { xs: "25px", sm: "52px" }}}>
          Seu pedido entregue em seu comércio!
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: { xs: "16px", sm: "18px" }, // Defina o tamanho da fonte para diferentes tamanhos de tela
            color: "#495057",
          }}
        >
          Com a FS é fácil, em poucos cliques você faz seu pedido sem dor de
          cabeça. Clique no botão abaixo e confira nossas ofertas!
        </Typography>
        <button>
          <img src={WhatsappIcon} alt="Ícone do WhatsApp" />
          FAZER PEDIDO!
        </button>
      </Box>
      <Box className='woman'>
        <img src={Woman} alt="mulher com sacola de compras"  />
      </Box>
    </Box>
  );
};
