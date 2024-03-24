import { Box, Typography, CardContent } from "@mui/material";
import React from "react";
import CheckIcon from "../assets/checkIcon.svg";
export const Services = () => {
  return (
    <Box id="services">
      <Box>
        <Typography
          sx={{ fontWeight: 700, fontSize: "20px", color: "#00856F" }}
        >
          Serviços
        </Typography>
        <Typography
          sx={{ fontWeight: 700, fontSize: "40px", color: "#212529" }}
        >
          Algumas vantagens :)
        </Typography>
      </Box>
      <Box className="cardServicesArea">
        <CardContent className="cardServices">
          <img src={CheckIcon} alt="Ícone" />
          <Typography sx={{ fontWeight: 700, fontSize: "24px" }}>
            Compre hoje e receba amanhã
          </Typography>
          <Typography>
            Sabemos o quão um comercio precisa que suas mercadorias estejam em
            estoque para começar a produção, pensando nisso a nossa logistica
            garante que você vai receber no dia seguinte após seu pedido!
          </Typography>
        </CardContent>
        <CardContent className="cardServices">
          <img src={CheckIcon} alt="Ícone" />
          <Typography sx={{ fontWeight: 700, fontSize: "24px" }}>
            Atendimento 24hrs
          </Typography>
          <Typography>
            Para garantir que não haja dúvidas em nosso serviço, oferecemos
            atendimento via Whatsapp 24 horas.
          </Typography>
        </CardContent>
        <CardContent className="cardServices">
          <img src={CheckIcon} alt="Ícone" />
          <Typography sx={{ fontWeight: 700, fontSize: "24px" }}>
            Produtos de qualidade!
          </Typography>
          <Typography>
            Selecionamos a mão seu produto, garantimos que irá receber a melhor
            qualidade possível. Além disso os Legumes, Frutas e Verduras vem
            direto do CEAGESP.
          </Typography>
        </CardContent>
      </Box>
    </Box>
  );
};
