import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useAppSelector } from "./state/Hooks";
import { Education } from "./pages/Education";
import { Skills } from "./pages/Skills";
import Footer from "./components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import logo from "./images/mobile-logo.png";
import Resume from "./pages/Resume";

// Test comment
const theme = createTheme({});

const DarkTheme: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51v5",
    },
    secondary: {
      main: "rgb(25, 190, 207)",
    },
  },
});

const LightTheme: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#808080",
      contrastText: "#4fb25",
    },
    secondary: {
      main: "rgb(25, 190, 207)",
    },
  },
});

function App() {
  // @ts-ignore
  const mode = useAppSelector((state) => state.theme.mode);
  const theme = mode === "light" ? LightTheme : DarkTheme;
  const loc = useLocation().pathname.replace(/^\/+/, "") || "Home";
  const titleString = loc.charAt(0).toUpperCase() + loc.slice(1) + " Page";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <HelmetProvider>
        <Helmet>
          <title>{titleString}</title>
          <link rel="icon" href={logo} />
        </Helmet>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            width: "100%",
            overflowX: "hidden",
          }}
        >
          <Navbar />
          <Container
            sx={{
              mt: 5,
              flex: "1 0 auto", // This makes the container take up available space
              mb: 4, // Add some margin before the footer
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/education" element={<Education />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
