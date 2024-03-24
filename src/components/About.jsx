import { Box, Typography } from "@mui/material";
import React from "react";
import Tomato from "../assets/tomato.svg";
export const About = () => {
  return (
    <Box id='about'>
      <Box
        sx={{ display: "flex", alignItems: "end", justifyContent: "center"}}
     className='aboutImage' >
        <img src={Tomato} alt="imagem de um tomate" />
      </Box>
      <Box
  className='aboutText'
>
  <Typography
    sx={{ fontWeight: 700, fontSize: "21px", color: "#00856F" }}
  >
    Sobre Nós
  </Typography>
  <Typography
  sx={{
    fontWeight: 700,
    fontSize: ["32px", "40px"], 
  }}
>
    Entenda quem somos e por que existimos
  </Typography>
  <Typography sx={{ fontSize: "16px", color: "#495057" }}>
    A FS HORTIFRUTI tras uma forma do seu comercio receber as mercadorias
    com facilidade, sem transito, estresse e perca de tempo. Em poucos
    cliques é realizado o pedido e pronto, no outro dia de manhã sua
    mercadoria está no local desejado!
  </Typography>
</Box>

    </Box>
  );
};
