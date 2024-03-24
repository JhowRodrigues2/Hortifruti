import { Box, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/logo.svg";
import YoutubeIcon from "../assets/youtubeIcon.svg";
import InstagramIcon from "../assets/instagramIcon.svg";
import FacebookIcon from "../assets/facebookIcon.svg";
import AdressIcon from "../assets/adressIcon.svg";
import MailIcon from "../assets/mailIcon.svg";
import WhatsappIcon from "../assets/whatsappIcon.svg";

export const Footer = () => {
  return (
    <Box className="footer">
      <Box className="footerText">
        <Typography sx={{ fontSize: "30px", fontWeight: 700 }}>
          Entre em contato com a gente!
        </Typography>
        <Box sx={{ display: "flex" }}>
          <img src={AdressIcon} alt="Ícone do Local" />
          <Typography sx={{ fontSize: "16px", color: "#495057" }}>
            Parque dom pedro II, 190 - SP
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <img src={MailIcon} alt="Ícone do Local" />
          <Typography sx={{ fontSize: "16px", color: "#495057" }}>
            fs.hortifruti@gmail.com
          </Typography>
        </Box>
        <Box>
          <button>
            <img src={WhatsappIcon} alt="Ícone do WhatsApp" />
            FAZER PEDIDO!
          </button>
        </Box>
      </Box>

      <Box className="footerImgArea">
        <img
          src={Logo}
          alt="logo marca"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <Typography>©2024 - FS HORTIFRUTI.   <Typography>Todos os direitos reservados.</Typography></Typography>
     
      </Box>
      <Box className="footerIcons">
        <img src={InstagramIcon} alt="Ícone do Instagram" />
        <img src={FacebookIcon} alt="Ícone do Facebook" />
        <img src={YoutubeIcon} alt="Ícone do Youtube" />
      </Box>
    </Box>
  );
};
