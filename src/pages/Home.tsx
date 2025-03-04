import { Box, Container, Paper, Typography, useTheme } from '@mui/material';
import { ComputersCanvas } from '../components/canvas';

function Home() {
    const theme = useTheme();

    return (
        <>
            <Box sx={{ 
                width: '100%',
                height: '60vh',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
            }}>
                <Container sx={{ 
                    textAlign: 'center', 
                    mt: 2,
                    }}>
                    <Typography variant="h2" component="h1" gutterBottom>
                        Welcome to my portfolio
                    </Typography>
                    <Typography variant="h4" component="h2" gutterBottom>
                        My name is Brady Spears
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        I am a software engineer with a passion for web development and much more!
                    </Typography>
                </Container>
                <ComputersCanvas/>
            </Box>
            
            {/* Technology Section below the canvas */}
            <Container sx={{ textAlign: 'center', py: 6 }}>
                <Box sx={{ 
                    p: 4,
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: 1,
                    boxShadow: 1
                }}>
                    <Typography variant="h6" gutterBottom>
                        Crafted with Modern Web Technologies
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        I built this portfolio using React and TypeScript, powered by Vite for lightning-fast performance. 
                        This combination allows me to create a smooth, responsive experience while maintaining clean, type-safe code.
                    </Typography>
                    <Typography variant="body1">
                        To bring this site to life, I've incorporated some awesome libraries: Material-UI for sleek, 
                        modern styling, ThreeJS for engaging 3D graphics, EmailJS for seamless contact functionality, 
                        and ReduxJS for efficient state management. Each technology was carefully chosen to create 
                        the best possible showcase of my work and skills.
                    </Typography>
                </Box>
            </Container>
        </>
    );
}

export default Home;