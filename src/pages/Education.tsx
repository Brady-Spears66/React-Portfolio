import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  CardMedia,
} from "@mui/material";
import { educations } from "../constants";

export function Education() {
  return (
    <Container maxWidth="md" sx={{ mt: 5, textAlign: "center" }}>
      <Grid container justifyContent="center">
        {educations.map((education) => (
          <Grid item xs={12}>
            <Card
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                textAlign: "left",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <CardMedia
                component="img"
                image={education.logo}
                alt="Miami University"
                sx={{
                  width: { xs: "6rem", sm: "8rem", md: "10rem" },
                  height: { xs: "3rem", sm: "4rem", md: "5rem" },
                  objectFit: "contain",
                  mb: { xs: 2, sm: 0 },
                  mr: { xs: 0, sm: 2 },
                }}
              />
              <CardContent sx={{ textAlign: { xs: "center", sm: "left" } }}>
                <Typography variant="h6">{education.school}</Typography>
                <Typography variant="body1" color="textSecondary">
                  {education.degree}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {education.major}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {education.expectedGraduation}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Education;
