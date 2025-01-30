import { Box, Card, CardContent, Container, Grid, Typography, CardMedia } from "@mui/material";
import miamiUniversity from '../assets/education/miamiUniversity.png';

export function Education() {
    return (
        <Container maxWidth="md" sx={{ mt: 5, textAlign: 'center' }}>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={10}>
                    <Card sx={{ p: 2, display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                        <CardMedia
                            component="img"
                            image={miamiUniversity}
                            alt="Miami University"
                            sx={{ width: '10vw', height: '10vw', objectFit: 'contain', mr: 2 }}
                        />
                        <CardContent>
                            <Typography variant="h6">
                                Miami University
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Bachelor of Arts in Computer Science
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Co-Major in Entrepreneurship
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Expected Graduation: 2025
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Education;
