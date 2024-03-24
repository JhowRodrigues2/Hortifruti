import { Box, List, ListItem, Drawer, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import YoutubeIcon from "../assets/youtubeIcon.svg";
import InstagramIcon from "../assets/instagramIcon.svg";
import FacebookIcon from "../assets/facebookIcon.svg";
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      className={isHeaderFixed ? "headerFixed" : "header"}
    sx={{ display: "flex", justifyContent: "space-around" }}
    >
      <Box className="logo" sx={{ width: "250px" }}>
        <img
          src={Logo}
          alt="logo marca"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <List       className={isHeaderFixed ? "menuFixed" : "menu"}
>
          <LinkScroll
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            color="inherit"
            underline="none"
          >
            <ListItem>Início</ListItem>
          </LinkScroll>
          <LinkScroll
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            color="inherit"
            underline="none"
          >
            <ListItem>Sobre</ListItem>
          </LinkScroll>

          <LinkScroll
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            color="inherit"
            underline="none"
          >
            <ListItem>Serviços</ListItem>
          </LinkScroll>{" "}
          <LinkScroll
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            color="inherit"
            underline="none"
          ></LinkScroll>
          <LinkScroll
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            color="inherit"
            underline="none"
          >
            <ListItem>Depoimentos</ListItem>
          </LinkScroll>
        </List>
      </Box>

      <Box sx={{ display: { xs: "block", sm: "none" } }}>
      <IconButton onClick={toggleDrawer} sx={isHeaderFixed ?  { color: "#FFFAF1" }:{ color: "#00856f" }}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            backgroundColor: "#00856f",
            width: "60%",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={toggleDrawer}>
            <CloseIcon
              sx={{ width: "30px", height: "30px", color: "#FFFAF1" }}
            />
          </IconButton>
        </Box>
        <List className="listDrawer">

        <LinkScroll
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            color="inherit"
            underline="none"
          >
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Início
          </ListItem>
          </LinkScroll>
          <LinkScroll
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            color="inherit"
            underline="none"
          >
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Sobre
          </ListItem>
          </LinkScroll>
          
          <LinkScroll
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            color="inherit"
            underline="none"
          >
                    <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Serviços
          </ListItem>
          </LinkScroll>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Depoimentos
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button className="pedidoButtonDrawer">FAZER PEDIDO! </button>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <img src={InstagramIcon} alt="Ícone do Instagram" />
            <img src={FacebookIcon} alt="Ícone do Facebook" />
            <img src={YoutubeIcon} alt="Ícone do Youtube" />
          </ListItem>
        </List>
      </Drawer>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <button  className={isHeaderFixed ? "pedidoButtonHeaderFixed" : "pedidoButtonHeader"}>FAZER PEDIDO! </button>
      </Box>
    </Box>
  );
};

export default Header;
