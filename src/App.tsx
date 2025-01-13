import { Routes, Route } from 'react-router-dom';
import { Container, createTheme, CssBaseline, ThemeOptions, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { useAppSelector } from './state/Hooks';

// @ts-expect-error
let theme = createTheme({});

const DarkTheme: ThemeOptions = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#3f51v5"
        },
        secondary: {
            main: "#f50057"
        }
    }
});

const LightTheme: ThemeOptions = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#4f51b5"
        },
        secondary: {
            main: "#f50057"
        }
    }
});

function App() {
  const mode = useAppSelector(state => state.theme.mode);
  const theme = mode === "light" ? LightTheme : DarkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container disableGutters sx={{minHeight: "100vh", minWidth: '100vw', margin: 0, padding: 0}}>
        <Navbar />
        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default App;