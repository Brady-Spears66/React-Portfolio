import { Box, Container, IconButton, Stack, Typography, useTheme } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    const theme = useTheme();

    const backgroundColor = theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, 0.06)' : 'grey';
    // Old Background Color: #4f51b5

    return (
        <Box 
            component="footer"
            sx={{
                color: 'white',
                width: '100%',
                backgroundColor,
                flex: '0 0 auto', // Prevents the footer from growing or shrinking
                borderTop: 1, // Optional: adds a subtle top border
                borderColor: 'divider', // Uses theme-aware color for border
                transition: 'background-color 0.7s ease'
            }}
        >
            <Container 
                maxWidth="md"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    px: { xs: 2, sm: 3 },
                    py: 2, // Consistent padding top and bottom
                }}
            >
                <Stack 
                    spacing={0.5}
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
                            flexWrap: 'wrap',
                            mt: 1
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
                                        fontSize: '2.5rem',
                                        
                                    },
                                    '&:hover': {
                                        color: "rgb(25, 190, 207)",
                                        backgroundColor: "transparent"
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
