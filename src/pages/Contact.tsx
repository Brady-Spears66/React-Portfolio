import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Container, IconButton, Stack, TextField, Typography, Divider, Paper, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
    return (
        <Box sx={{ 
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center' // Center everything horizontally
        }}>
            <Container 
                maxWidth="md" 
                sx={{ 
                    mb: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', // Center container content
                    px: { xs: 2, sm: 3 }
                }}
            >
                <Grid
                    container
                    spacing={2}
                    sx={{
                        width: '100%',
                        margin: 0,
                        // Remove any default padding
                        '& .MuiGrid-item': {
                            px: 0, // Remove default padding from Grid items
                        }
                    }}
                >
                    <Grid item xs={12}>
                        <Typography 
                            sx={{
                                fontSize: { xs: '2rem', sm: '3rem' },
                                textAlign: "center",
                                mb: 4,
                                width: '100%' // Ensure full width
                            }}
                        >
                            Contact Me
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Name"
                            name='name'
                            required
                            fullWidth
                            size="medium"
                        />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Email"
                            name='email'
                            required
                            fullWidth
                            size="medium"
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <TextField
                            label="Write a message"
                            name='message'
                            required
                            fullWidth
                            multiline
                            rows={4}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button 
                            variant='contained'
                            fullWidth
                            sx={{
                                backgroundColor: "#3f51b5",
                                color: "white"
                            }}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Container>

            <Container 
                maxWidth="md"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    px: { xs: 2, sm: 3 }
                }}
            >
                <Stack 
                    spacing={1} 
                    alignItems="center"
                    sx={{ 
                        width: '100%',
                        maxWidth: 'md' 
                    }}
                >
                    <Typography variant="body1">
                        Brady Spears
                    </Typography>
                    <Typography variant="body1">
                        South Charleston, Ohio
                    </Typography>
                    <Typography variant="body1">
                        spearsb2@miamioh.edu
                    </Typography>
                    <Typography variant="body1">
                        (937) 371-2938
                    </Typography>
                    
                    <Stack 
                        direction="row" 
                        spacing={2} 
                        justifyContent="center"
                        sx={{ 
                            width: '100%',
                            flexWrap: 'wrap' 
                        }}
                    >
                        {[
                            { icon: <GitHubIcon />, href: 'https://github.com/Brady-Spears66', label: 'github' },
                            { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/brady-spears-2b5192229/', label: 'linkedin' },
                            { icon: <LocalPhoneIcon />, href: 'tel:937-371-2938', label: 'phone' },
                            { icon: <EmailIcon />, href: 'mailto:spearsb2@miamioh.edu', label: 'email' }
                        ].map((item) => (
                            <IconButton 
                                key={item.label}
                                size='large'
                                aria-label={item.label}
                                href={item.href}
                                target='_blank'
                                sx={{
                                    '& svg': {
                                        fontSize: '2.5rem'
                                    }
                                }}
                            >
                                {item.icon}
                            </IconButton>
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}

export default Contact;