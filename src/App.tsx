import { Box, Container, createTheme, CssBaseline, darkScrollbar, ThemeOptions, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { useAppSelector } from './state/Hooks';
import { Education } from './pages/Education';
import { Skills } from './pages/Skills';


const theme = createTheme({});

const DarkTheme: ThemeOptions = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#3f51v5"
        },
        secondary: {
            main: "#f50057"
        }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: (themeParam) => ({
          body: themeParam.palette.mode === 'dark' ? darkScrollbar() : null,
        }),
      },
    },
});
console.log(DarkTheme.components?.MuiCssBaseline?.styleOverrides)

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
  
  document.getElementById('root')

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme/>
      <Box sx={{ // Use Box instead of Container for the root element
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        minWidth: '100%',
        overflow: 'hidden',
      }}>
        <Navbar />
        <Container sx={{ mt: 10}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path='/skills' element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education/>} />
          </Routes>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;