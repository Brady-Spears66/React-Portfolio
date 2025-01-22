import { Box, Container, Paper, Typography, useTheme } from '@mui/material';
import { ComputersCanvas } from '../components/canvas';

function Home() {
    const theme = useTheme();

    return (
        <Box sx={{ 
            width: '100%',
            height: '85vh',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative' // Added position relative
        }}>
            <Container sx={{ textAlign: 'center', mt: 2}}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to my portfolio
                </Typography>
                <Typography variant="h4" component="h2" gutterBottom>
                    My name is Brady Spears
                </Typography>
                <Typography variant="h5" component="h2">
                    I am a software engineer with a passion for web development and much more!
                </Typography>
            </Container>
            <ComputersCanvas/>
        </Box>
    );
}

export default Home;