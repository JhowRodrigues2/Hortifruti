import "./App.css";
import Header from "./components/Header";
import { Box, ThemeProvider,createTheme } from "@mui/material";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Card } from "./components/Card";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: '"DM Sans", sans-serif',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box className="app">
        <Header />
        <Hero />
        <Card/>
        <Services/>
        <About/>
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
